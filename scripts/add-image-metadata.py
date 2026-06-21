"""
Add EXIF / IPTC metadata to hero and gallery images for SEO.
Backs up originals to public/images/backup/ before modifying.
Handles .jpg/.jpeg and .webp separately (piexif for JPEG, PIL info for WebP).
"""

import os
import shutil
from pathlib import Path

try:
    from PIL import Image
    import piexif
    from piexif import ImageIFD
except ImportError:
    print("ERROR: pip install Pillow piexif")
    raise

PROJECT = Path(__file__).resolve().parent.parent
IMG_DIR = PROJECT / "public" / "images"
BACKUP_DIR = IMG_DIR / "backup"

BRAND = "Alhaya Cleaning Services"
SITE = "https://www.carpetcleaningdubai.com"

# ── Image metadata definitions ──────────────────────────────────────────

GALLERY_META = {
    "before-after-1.jpeg": {
        "title": "Carpet Before After Deep Cleaning Dubai",
        "desc": "Carpet before and after deep cleaning by Alhaya Cleaning Services Dubai - professional stain removal results",
        "tags": "carpet before after, deep cleaning Dubai, carpet stain removal, Alhaya cleaning, professional carpet cleaning results",
    },
    "before-after-2.jpeg": {
        "title": "Carpet Stain Removal Before After UAE",
        "desc": "Professional carpet stain removal before and after - coffee tea karak stain cleaning by Alhaya UAE",
        "tags": "carpet stain removal, before after cleaning, UAE carpet cleaning, coffee stain removal, Alhaya cleaning services",
    },
    "before-after-3.jpeg": {
        "title": "Carpet Shampoo Results Before After",
        "desc": "Professional carpet shampoo cleaning results showing before and after transformation by Alhaya Dubai",
        "tags": "carpet shampoo, before after, carpet cleaning results, shampoo cleaning Dubai, Alhaya carpet services",
    },
    "before-after-4.jpeg": {
        "title": "Deep Carpet Stain Removal Before After",
        "desc": "Deep carpet stain removal before and after by Alhaya Cleaning Services - stubborn stain treatment UAE",
        "tags": "deep stain removal, carpet cleaning before after, stubborn stain, carpet treatment UAE, Alhaya cleaning",
    },
    "before-after-5.jpeg": {
        "title": "Carpet Odor Stain Removal Before After",
        "desc": "Carpet odor and stain removal before and after - eco-friendly cleaning by Alhaya Cleaning Services UAE",
        "tags": "carpet odor removal, stain removal before after, eco-friendly cleaning, carpet deodorizing, Alhaya UAE",
    },
    "before-after-6.jpeg": {
        "title": "Wool Carpet Deep Cleaning Before After",
        "desc": "Wool carpet deep cleaning before and after transformation - specialized wool care by Alhaya Dubai",
        "tags": "wool carpet cleaning, deep cleaning before after, wool care Dubai, specialized carpet cleaning, Alhaya services",
    },
    "before-after-7.jpeg": {
        "title": "Persian Rug Stain Removal Before After",
        "desc": "Persian rug stain removal before and after by Alhaya - expert oriental rug cleaning Dubai UAE",
        "tags": "Persian rug cleaning, stain removal, oriental rug care, rug cleaning Dubai, Alhaya rug services UAE",
    },
    "before-after-8.jpeg": {
        "title": "Carpet Restoration Before After UAE",
        "desc": "Complete carpet restoration before and after - professional deep cleaning and sanitization by Alhaya UAE",
        "tags": "carpet restoration, before after UAE, carpet sanitization, deep cleaning restoration, Alhaya carpet cleaning",
    },
    "action-1.jpeg": {
        "title": "Carpet Cleaning Technician Dubai",
        "desc": "Alhaya Cleaning Services technician deep cleaning oriental rug in Dubai with professional equipment",
        "tags": "carpet cleaning technician, Dubai cleaning, oriental rug cleaning, professional equipment, Alhaya team Dubai",
    },
    "action-2.jpeg": {
        "title": "Professional Carpet Cleaning Equipment",
        "desc": "Professional carpet cleaning technician with industrial extraction equipment by Alhaya Cleaning Services UAE",
        "tags": "carpet cleaning equipment, professional technician, industrial extraction, carpet cleaning UAE, Alhaya equipment",
    },
    "carpet-shampoo-cleaning.webp": {
        "title": "Carpet Shampoo Deep Cleaning Service",
        "desc": "Carpet shampoo deep cleaning service with professional results by Alhaya Cleaning Services UAE",
        "tags": "carpet shampoo cleaning, deep cleaning service, professional carpet cleaning, shampoo results UAE, Alhaya cleaning",
    },
    "carpet-cleaning-machine.webp": {
        "title": "Industrial Carpet Cleaning Machine Dubai",
        "desc": "Industrial carpet cleaning machine in action - high-power extraction by Alhaya Cleaning Services Dubai",
        "tags": "carpet cleaning machine, industrial cleaning, extraction machine, carpet cleaning Dubai, Alhaya equipment",
    },
    "deep-carpet-cleaning-process.webp": {
        "title": "Deep Carpet Cleaning Process UAE",
        "desc": "Deep carpet cleaning process showing stain and odor removal steps by Alhaya Cleaning Services UAE",
        "tags": "deep carpet cleaning, cleaning process, stain removal, odor removal, carpet cleaning steps UAE, Alhaya process",
    },
    "professional-carpet-cleaning-team.jpeg": {
        "title": "Professional Carpet Cleaning Team",
        "desc": "Professional carpet cleaning team by Alhaya Cleaning Services - trained and certified technicians UAE",
        "tags": "carpet cleaning team, professional cleaners, certified technicians, Alhaya team, carpet cleaning UAE",
    },
    "carpet-steam-extraction.jpeg": {
        "title": "Carpet Steam Extraction Cleaning UAE",
        "desc": "Carpet steam extraction cleaning using hot water extraction method by Alhaya Cleaning Services UAE",
        "tags": "carpet steam extraction, hot water extraction, steam cleaning, carpet cleaning method, Alhaya steam cleaning UAE",
    },
    "clean-carpet-result.webp": {
        "title": "Clean Carpet Result After Professional Cleaning",
        "desc": "Clean carpet result after professional deep cleaning by Alhaya - fresh sanitized carpet ready to use",
        "tags": "clean carpet result, professional cleaning result, deep cleaning result, sanitized carpet, Alhaya carpet cleaning",
    },
}

HERO_META = {
    "carpet-1.jpeg": {
        "title": "Professional Carpet Cleaning Dubai",
        "desc": "Professional carpet cleaning service in Dubai by Alhaya - residential and commercial deep cleaning UAE",
        "tags": "professional carpet cleaning, Dubai carpet cleaning, residential commercial, deep cleaning, Alhaya services Dubai",
    },
    "carpet-2.jpg": {
        "title": "Carpet Deep Shampoo Cleaning UAE",
        "desc": "Carpet deep shampoo cleaning with rapid dry time by Alhaya Cleaning Services across UAE",
        "tags": "carpet shampoo cleaning, deep cleaning UAE, rapid dry time, Alhaya cleaning, carpet shampooing services",
    },
    "carpet-3.webp": {
        "title": "Carpet Stain Removal Services Dubai",
        "desc": "Professional carpet stain removal services in Dubai - coffee tea ink grease stain treatment by Alhaya",
        "tags": "carpet stain removal, stain treatment Dubai, coffee stain, ink stain removal, Alhaya stain services",
    },
    "carpet-4.jpg": {
        "title": "Commercial Carpet Cleaning UAE",
        "desc": "Commercial and office carpet cleaning services across UAE by Alhaya Cleaning Services",
        "tags": "commercial carpet cleaning, office carpet cleaning, UAE carpet services, Alhaya commercial cleaning",
    },
    "carpet-5.jpg": {
        "title": "Residential Carpet Cleaning Dubai",
        "desc": "Residential carpet cleaning for villas and apartments in Dubai by Alhaya Cleaning Services",
        "tags": "residential carpet cleaning, villa carpet cleaning, apartment cleaning Dubai, Alhaya residential services",
    },
    "carpet-6.jpg": {
        "title": "Eco-Friendly Carpet Cleaning UAE",
        "desc": "Eco-friendly non-toxic carpet cleaning safe for children and pets by Alhaya Cleaning Services UAE",
        "tags": "eco-friendly carpet cleaning, non-toxic cleaning, pet safe, child safe, Alhaya eco cleaning UAE",
    },
    "carpet-7.jpg": {
        "title": "Carpet Odor Removal Service Dubai",
        "desc": "Professional carpet odor removal and deodorizing service in Dubai by Alhaya Cleaning Services",
        "tags": "carpet odor removal, deodorizing service, odor elimination, carpet freshening Dubai, Alhaya odor removal",
    },
}


def backup(src: Path):
    rel = src.relative_to(IMG_DIR)
    dst = BACKUP_DIR / rel
    dst.parent.mkdir(parents=True, exist_ok=True)
    if not dst.exists():
        shutil.copy2(src, dst)
        print(f"  Backed up: {rel}")


def add_jpeg_metadata(path: Path, meta: dict):
    """Add EXIF metadata to JPEG files using piexif."""
    try:
        backup(path)
        img = Image.open(path)

        try:
            exif_dict = piexif.load(img.info.get("exif", b""))
        except Exception:
            exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "1st": {}, "thumbnail": None}

        exif_dict["0th"][ImageIFD.ImageDescription] = meta["desc"].encode("utf-8")
        exif_dict["0th"][ImageIFD.XPTitle] = meta["title"].encode("utf-16le")
        exif_dict["0th"][ImageIFD.XPComment] = meta["desc"].encode("utf-16le")
        exif_dict["0th"][ImageIFD.XPKeywords] = meta["tags"].encode("utf-16le")
        exif_dict["0th"][ImageIFD.XPSubject] = meta["desc"].encode("utf-16le")
        exif_dict["0th"][ImageIFD.Artist] = BRAND.encode("utf-8")
        exif_dict["0th"][ImageIFD.Copyright] = f"(c) {BRAND} - {SITE}".encode("utf-8")
        exif_dict["0th"][ImageIFD.Software] = "Alhaya SEO Metadata Tool".encode("utf-8")

        exif_bytes = piexif.dump(exif_dict)
        img.save(str(path), exif=exif_bytes, quality=95, optimize=True)
        print(f"  JPEG metadata added: {path.name}")
        return True
    except Exception as e:
        print(f"  ERROR ({path.name}): {e}")
        return False


def add_webp_metadata(path: Path, meta: dict):
    """For WebP, re-save with XMP-style info dict (PIL supports limited WebP metadata)."""
    try:
        backup(path)
        img = Image.open(path)
        img.save(
            str(path),
            format="WEBP",
            quality=90,
            method=6,
            exif=piexif.dump({
                "0th": {
                    ImageIFD.ImageDescription: meta["desc"].encode("utf-8"),
                    ImageIFD.Artist: BRAND.encode("utf-8"),
                    ImageIFD.Copyright: f"(c) {BRAND} - {SITE}".encode("utf-8"),
                    ImageIFD.Software: "Alhaya SEO Metadata Tool".encode("utf-8"),
                },
                "Exif": {},
                "GPS": {},
                "1st": {},
                "thumbnail": None,
            }),
        )
        print(f"  WebP metadata added: {path.name}")
        return True
    except Exception as e:
        print(f"  ERROR ({path.name}): {e}")
        return False


def process_images(folder: Path, meta_map: dict, label: str):
    print(f"\n{'='*60}")
    print(f"Processing {label} images in: {folder}")
    print(f"{'='*60}")
    ok, fail = 0, 0
    for fname, meta in meta_map.items():
        fpath = folder / fname
        if not fpath.exists():
            print(f"  SKIP (not found): {fname}")
            fail += 1
            continue
        ext = fpath.suffix.lower()
        if ext in (".jpg", ".jpeg"):
            ok += 1 if add_jpeg_metadata(fpath, meta) else 0
        elif ext == ".webp":
            ok += 1 if add_webp_metadata(fpath, meta) else 0
        else:
            print(f"  SKIP (unsupported format): {fname}")
            fail += 1
    print(f"\nResults: {ok} success, {fail} failed/skipped")
    return ok, fail


def verify_metadata():
    print(f"\n{'='*60}")
    print("VERIFICATION")
    print(f"{'='*60}")
    gallery_dir = IMG_DIR / "gallery"
    hero_dir = IMG_DIR / "carpet"
    for d, meta_map in [(gallery_dir, GALLERY_META), (hero_dir, HERO_META)]:
        for fname in meta_map:
            fpath = d / fname
            if not fpath.exists():
                continue
            try:
                img = Image.open(fpath)
                exif_raw = img.info.get("exif", b"")
                if exif_raw:
                    exif = piexif.load(exif_raw)
                    desc = exif.get("0th", {}).get(ImageIFD.ImageDescription, b"")
                    if isinstance(desc, bytes):
                        desc = desc.decode("utf-8", errors="ignore")
                    has_meta = bool(desc)
                else:
                    has_meta = False
                status = "OK" if has_meta else "NO METADATA"
                print(f"  [{status}] {fname}")
            except Exception as e:
                print(f"  [ERROR] {fname}: {e}")


if __name__ == "__main__":
    print("Alhaya Carpet Cleaning - Image EXIF Metadata Tool")
    print(f"Project: {PROJECT}")
    print(f"Images:  {IMG_DIR}")
    print(f"Backup:  {BACKUP_DIR}")

    BACKUP_DIR.mkdir(parents=True, exist_ok=True)

    g_ok, g_fail = process_images(IMG_DIR / "gallery", GALLERY_META, "Gallery")
    h_ok, h_fail = process_images(IMG_DIR / "carpet", HERO_META, "Hero")

    print(f"\n{'='*60}")
    print(f"TOTAL: {g_ok + h_ok} images updated, {g_fail + h_fail} skipped/failed")
    print(f"{'='*60}")

    verify_metadata()

    print("\nDone. Backups saved to public/images/backup/")
