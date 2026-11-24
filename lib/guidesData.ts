export interface Guide {
  slug: string;
  title: string;
  h1: string;
  description: string;
  kw: string[];
  body: string[];
  faqs: { q: string; a: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "how-often-clean-carpet-uae",
    title: "How Often to Clean Carpets in the UAE — and Care Tips",
    h1: "How Often Should You Get Your Carpets Professionally Cleaned in the UAE?",
    description: "How often to deep clean carpets in UAE homes and offices, plus care tips for sand, sun and humidity to keep carpets looking good for longer.",
    kw: ["how often clean carpet UAE", "carpet cleaning frequency Dubai", "when to clean carpet", "carpet maintenance schedule UAE"],
    body: [
      "The UAE's desert climate creates unique conditions that affect how quickly carpets accumulate dirt, allergens, and odors. Understanding these factors helps you determine the right professional cleaning schedule for your specific situation.",
      "For a typical Dubai or Sharjah apartment with one or two residents and no pets, professional deep cleaning every 6 to 12 months is sufficient. This frequency removes the fine sand particles, dust, and allergens that regular vacuuming misses. If you vacuum twice a week and remove shoes at the door, you can stretch to annual cleaning without significant carpet degradation.",
      "Homes with children change the equation significantly. Toddlers and young children spend considerable time on the floor — playing, crawling, and eating. Carpets in these homes should be professionally cleaned every 3 to 6 months to ensure the surfaces children contact daily are genuinely hygienic, not just visually clean.",
      "Pet owners need the most frequent professional cleaning. Dogs and cats transfer oils, dander, hair, and occasionally accidents onto carpet fibres. Even well-trained pets contribute to faster carpet soiling. We recommend professional deep cleaning every 3 to 4 months for homes with pets, with spot treatment for accidents as they occur.",
      "Villas with large carpeted areas and high foot traffic — especially those with outdoor access where sand is tracked in regularly — benefit from quarterly professional cleaning. The larger the carpeted area exposed to foot traffic, the faster dirt accumulates. Entry points and hallways may need attention more frequently than bedrooms.",
      "Office and commercial carpets face the heaviest use. Hundreds of shoes crossing the same paths daily grind abrasive sand into the fibre base, creating visible traffic lanes within months. We recommend monthly cleaning for high-traffic commercial areas like lobbies and corridors, and quarterly cleaning for general office spaces.",
      "The UAE's continuous air conditioning is an often-overlooked factor. AC systems circulate and recirculate indoor air, picking up dust from carpet surfaces and redistributing it. In homes where carpets are the primary flooring, the carpet effectively acts as a large air filter. Regular professional cleaning removes the trapped particles, improving both carpet appearance and indoor air quality.",
      "Regardless of your cleaning schedule, certain events should prompt an immediate professional clean: after a renovation or construction work (construction dust is highly abrasive), after a major spill or pet accident, before or after moving into a new home, and after any water damage or flooding. These situations can cause permanent damage if not addressed promptly.",
      "Between professional cleans, sand is the biggest enemy in the UAE. Fine desert sand comes in on shoes, clothes and the wind, and every step grinds it against the carpet fibres. Put a good mat at every outside door, take shoes off indoors where you can, and vacuum busy areas at least twice a week and the whole carpet once a week.",
      "How you vacuum matters. Set the vacuum height to match the pile, go slowly and make several passes over busy areas, and empty the bag or bin before it is three-quarters full, because suction drops after that. Check that the brush roller turns freely and is not tangled.",
      "Protect carpets and rugs from the sun. Strong UAE sunlight fades colours, especially on rugs with natural dyes. Use curtains, blinds or UV film on the windows, and turn rugs around every few months so they fade evenly.",
      "Keep humidity steady. In coastal emirates like Dubai, Abu Dhabi and Sharjah, switching the AC off for long periods lets damp build up in carpet fibres, which leads to musty smells and mildew. If you travel in summer, leave the AC on a moderate setting.",
      "Move heavy furniture a little every few months, or use coasters under the legs, to avoid permanent dents in the pile, and clean the patch that was hidden underneath. For spills, blot from the outside in with a white cloth and cold water; never rub, and do not try home remedies until you know the stain and the fibre.",
    ],
    faqs: [
      { q: "Can I just vacuum instead of getting professional cleaning?", a: "Vacuuming removes surface dust and debris but cannot reach the compacted dirt, allergens, and bacteria embedded deep in carpet fibres. Professional deep cleaning is necessary to extract what vacuuming leaves behind. Think of vacuuming as daily maintenance and professional cleaning as the deep reset." },
      { q: "What happens if I never get my carpets professionally cleaned?", a: "Over time, embedded sand and grit act as abrasives that wear down carpet fibres with every step. Colours dull, the pile flattens permanently, allergens accumulate to unhealthy levels, and odors become trapped. Carpets that are never professionally cleaned typically need replacement years earlier than those maintained on a regular schedule." },
      { q: "Is professional cleaning necessary for new carpets?", a: "New carpets benefit from their first professional clean after 6 to 12 months of use. Even new carpets accumulate dust, sand, and allergens from the UAE environment. Early professional cleaning establishes a clean baseline and is easier (and cheaper) than waiting until visible soiling appears." },
      { q: "How do I stop sand damaging my carpets in Dubai?", a: "Put good mats at every outside door, take shoes off indoors, and vacuum busy areas at least twice a week. These three habits cut down the abrasive sand that reaches the fibres." },
      { q: "Should I leave my AC on when I go on holiday?", a: "Yes, on a moderate setting (around 25 to 26 degrees). Switching it off completely in the UAE summer lets humidity build up indoors, which can cause mildew in carpets and other soft furnishings." },
      { q: "How can I stop my rugs fading in the sun?", a: "Cut direct sunlight with curtains, blinds or UV window film, and turn the rug around every few months so it fades evenly. Handmade rugs with natural dyes fade fastest." },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
