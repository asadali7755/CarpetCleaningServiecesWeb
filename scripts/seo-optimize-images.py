"""
SEO Image Optimizer for CarpetCleaningDubai
- Converts all service/gallery/carpet images to WebP (best web format)
- Renames with SEO-friendly names matching services
- Creates backup of originals
"""

import os
import shutil
from PIL import Image

BASE = r"E:\sheryar bhai projects\carpetcleaningdubai\public\images"
BACKUP = os.path.join(BASE, "backup-originals")

# Mapping: (subfolder, old_filename) -> new_filename (without extension, will be .webp)
RENAME_MAP = {
    # ── services/ ──
    ("services", "carpet-service-1.jpeg"): "carpet-odor-removal-treatment-dubai",
    ("services", "carpet-service-2.jpeg"): "carpet-odor-removal-cleaning-uae",
    ("services", "carpet-service-3.jpeg"): "carpet-stain-treatment-process-dubai",
    ("services", "carpet-service-4.jpeg"): "carpet-stain-removal-service-card-dubai",
    ("services", "carpet-service-5.jpeg"): "carpet-stain-removal-results-uae",
    ("services", "carpet-service-6.jpeg"): "carpet-deep-shampoo-cleaning-card-dubai",
    ("services", "carpet-service-7.jpeg"): "carpet-deep-cleaning-process-uae",
    ("services", "carpet-service-8.jpeg"): "specialized-rug-cleaning-service-dubai",
    ("services", "carpet-service-9.jpeg"): "carpet-odor-removal-service-card-dubai",
    ("services", "carpet-service-10.jpeg"): "sofa-upholstery-cleaning-card-dubai",
    ("services", "carpet-stain-remover-2.jpg"): "professional-stain-removal-service-dubai",

    # ── gallery/ ──
    ("gallery", "action-1.jpeg"): "professional-carpet-cleaning-technician-dubai",
    ("gallery", "action-2.jpeg"): "commercial-carpet-cleaning-technician-uae",
    ("gallery", "carpet-shampoo-cleaning.webp"): "carpet-shampoo-deep-cleaning-dubai",
    ("gallery", "carpet-cleaning-machine.webp"): "industrial-carpet-cleaning-machine-dubai",
    ("gallery", "deep-carpet-cleaning-process.webp"): "deep-carpet-cleaning-process-uae",
    ("gallery", "professional-carpet-cleaning-team.jpeg"): "professional-carpet-cleaning-team-dubai",
    ("gallery", "carpet-steam-extraction.jpeg"): "carpet-steam-extraction-cleaning-uae",
    ("gallery", "clean-carpet-result.webp"): "clean-carpet-after-professional-cleaning-dubai",

    # ── carpet/ ──
    ("carpet", "carpet-1.jpeg"): "commercial-office-carpet-cleaning-uae",
    ("carpet", "carpet-2.jpg"): "carpet-cleaning-before-after-dubai",
    ("carpet", "carpet-3.webp"): "carpet-cleaning-results-dubai",
    ("carpet", "carpet-4.jpg"): "carpet-deep-cleaning-villa-dubai",
    ("carpet", "carpet-5.jpg"): "carpet-cleaning-apartment-uae",
    ("carpet", "carpet-6.jpg"): "carpet-cleaning-residential-dubai",
    ("carpet", "carpet-7.jpg"): "carpet-cleaning-commercial-uae",
}

os.makedirs(BACKUP, exist_ok=True)

converted = []
failed = []

for (subfolder, old_name), new_stem in RENAME_MAP.items():
    src = os.path.join(BASE, subfolder, old_name)
    if not os.path.exists(src):
        failed.append(f"NOT FOUND: {subfolder}/{old_name}")
        continue

    # Backup original
    bk_dir = os.path.join(BACKUP, subfolder)
    os.makedirs(bk_dir, exist_ok=True)
    shutil.copy2(src, os.path.join(bk_dir, old_name))

    # Convert to WebP
    new_name = f"{new_stem}.webp"
    dst = os.path.join(BASE, subfolder, new_name)

    try:
        img = Image.open(src)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        img.save(dst, "WEBP", quality=85, method=6)

        # Remove original if different name
        if old_name != new_name:
            os.remove(src)

        old_size = os.path.getsize(os.path.join(bk_dir, old_name))
        new_size = os.path.getsize(dst)
        savings = round((1 - new_size / old_size) * 100, 1)
        converted.append(f"OK: {subfolder}/{old_name} -> {new_name} ({savings}% smaller)")
    except Exception as e:
        failed.append(f"ERROR: {subfolder}/{old_name} -> {e}")

print("=" * 60)
print(f"CONVERTED: {len(converted)}")
for c in converted:
    print(f"  {c}")

if failed:
    print(f"\nFAILED: {len(failed)}")
    for f in failed:
        print(f"  {f}")

print("=" * 60)
print(f"Backups saved to: {BACKUP}")
