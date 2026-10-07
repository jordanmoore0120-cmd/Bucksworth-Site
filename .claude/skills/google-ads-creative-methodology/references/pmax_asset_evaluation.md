# PMax Asset Evaluation Framework

Complete reference for evaluating Performance Max campaign assets.

---

## Asset Count Requirements

| Asset Type | Minimum | Recommended | Maximum |
|-----------|---------|-------------|---------|
| **Text: Headlines** | 3 | 11-15 | 15 |
| **Text: Long Headlines** | 1 | 3-5 | 5 |
| **Text: Descriptions** | 2 | 4-5 | 5 |
| **Text: Business Name** | 1 | 1 | 1 |
| **Image: Landscape (1.91:1)** | 1 | 10-15 | 20 |
| **Image: Square (1:1)** | 1 | 10-15 | 20 |
| **Image: Portrait (4:5)** | 0 | 3-5 | 20 |
| **Logo: Landscape (4:1)** | 1 | 3-5 | 5 |
| **Logo: Square (1:1)** | 1 | 3-5 | 5 |
| **Video** | 0 | 3-5 | 5 |
| **Call to Action** | 1 | 1 | 1 |

### Auto-Generated Video Warning
If no video assets are provided, Google auto-generates videos by stitching together image assets with transitions and text overlays. These auto-generated videos are typically:
- Lower quality than purpose-built video
- Less engaging (no narrative, no audio beyond music)
- Generic in feel (no brand voice)

Always recommend uploading at least one purpose-built video. Even a simple product demo or brand overview outperforms auto-generated content.

---

## Asset Quality Beyond Google's Ratings

Google provides asset performance labels (Best, Good, Low, Learning), but these only measure relative click performance. A full quality evaluation includes:

### Text Coherence
Do headlines and descriptions work together as a unified message? PMax assembles these dynamically, so every headline must make sense paired with every description.

**Test:** Pick any headline and any description. Read them together. Do they form a coherent message? Repeat with several random combinations. If combinations produce contradictory or confusing messages, the text assets need revision.

### Image Variety
A strong asset group includes a mix of:
- **Lifestyle imagery:** Product in use, real-world context
- **Product imagery:** Clean product shots, detail views
- **Brand imagery:** Brand-forward creative, logo treatments
- **Seasonal/promotional:** Sale graphics, limited-time offers (if applicable)

All images should look like they belong to the same brand. Mixing professional photography with low-resolution screenshots creates an inconsistent experience.

### Image Quality Checklist
- Resolution meets Google's minimum requirements for each ratio
- Composition is intentional (no awkward crops from resizing)
- Text overlays are readable at small sizes (mobile display)
- Brand colors and visual identity are consistent
- No watermarks, stock photo logos, or placeholder text
- Important content is not in the edges (Google may crop)

### Video Quality
- Professional or semi-professional production (not raw phone footage unless brand-appropriate)
- Clear messaging within the first 5 seconds
- Appropriate length for the channel (15-30s for most PMax video placements)
- Brand identification (logo, colors, name) visible
- Audio that works with and without sound (captions or text overlays)

### Logo Presence
- Clear and recognizable at small display sizes (logos appear in many PMax placements at very small dimensions)
- Both landscape and square versions uploaded
- No text-heavy logos that become illegible when scaled down
- Transparent background versions preferred

---

## Asset Group Theme Coherence

### The Single-Sentence Test
Each asset group should have a clear, focused audience or product theme. Ask: "Can I describe this asset group's target audience and product focus in one sentence?"

Good: "Anti-aging skincare for women 35-55 concerned about fine lines."
Bad: "All our products for everyone."

### Theme Dilution
"Catch-all" asset groups with generic assets dilute performance because:
- Google cannot learn what works for whom
- Messaging is too broad to resonate with any specific audience
- Performance signals are muddled across unrelated products/audiences

### Asset Group Architecture
| Approach | When to Use | Risk |
|----------|------------|------|
| One asset group per product category | Clear product differentiation, sufficient volume per category | Too many small asset groups with insufficient data |
| One asset group per audience segment | Same product, different buyer personas | Asset overlap between groups |
| One asset group per offer/promotion | Seasonal or promotional campaigns | Short lifespan, needs frequent updates |

### Coherence Checks Within an Asset Group
- All headlines relate to the same theme/product/audience
- All images show the same product category or audience context
- Descriptions support the headlines (not contradicting or introducing unrelated topics)
- Video content aligns with image and text messaging
- Final URL matches the asset group's theme (not a generic homepage)

---

## Brand Guidelines Configuration

PMax uses brand guidelines to maintain consistency across auto-created assets and placements.

### Configuration Checklist
| Setting | Status | Impact |
|---------|--------|--------|
| Business name | Set correctly | Appears in many ad formats |
| Logo (landscape) | Uploaded | Used in display, video end cards |
| Logo (square) | Uploaded | Used in mobile placements, favicons |
| Brand colors | Configured | Applied to auto-created assets, overlays |
| Font preferences | Set (if available) | Applied to text overlays in auto-created assets |

Missing brand guidelines means Google uses default styling for any auto-created or auto-formatted assets, resulting in off-brand appearances.

---

## Listing Group Structure (Shopping-Eligible PMax)

For PMax campaigns connected to a Merchant Center feed, listing groups determine which products serve in which asset group.

### Structure Best Practices
- **Products organized into logical groups:** By category, brand, price tier, or margin tier
- **Groups aligned with asset group themes:** The "Running Shoes" asset group should only contain running shoe products
- **Avoid one massive "All Products" listing group:** This prevents targeted messaging and makes performance analysis impossible

### Listing Group Segmentation Options
- Product type (from feed)
- Brand
- Custom labels (custom_label_0 through custom_label_4)
- Product ID (for individual product control)
- Category (Google product category)
- Condition (new, used, refurbished)

### Common Mistakes
- All products in a single listing group with generic asset messaging
- Listing groups that don't match asset group themes (outdoor furniture products in a "kitchen" asset group)
- No product exclusions (low-margin or out-of-stock products serving ads)

---

## Completeness Scoring Methodology

### Calculation
The completeness score (0-100) measures what percentage of recommended asset counts are met, weighted by asset importance.

### Weighting by Asset Type
| Asset Type | Weight | Rationale |
|-----------|--------|-----------|
| Headlines | 20% | Primary text asset, high impact |
| Long Headlines | 10% | Used in display and discovery placements |
| Descriptions | 15% | Supporting text, important for context |
| Images (all ratios) | 25% | Visual assets drive engagement across most channels |
| Video | 15% | Prevents low-quality auto-generation |
| Logos | 10% | Brand identification across placements |
| Business Name + CTA | 5% | Required foundation |

### Score Interpretation
| Score | Assessment | Priority |
|-------|-----------|----------|
| 90-100 | Fully equipped | Focus on quality and testing |
| 70-89 | Strong foundation | Fill gaps in weakest asset types |
| 50-69 | Significant gaps | Asset completion is the top priority |
| Below 50 | Under-resourced | Campaign is running with serious handicaps |

### Quality vs. Completeness
A 100/100 completeness score with poor-quality assets is worse than 70/100 with strong assets. Completeness scoring identifies structural gaps. Quality assessment (text coherence, image variety, theme alignment) evaluates effectiveness.

Always report both: "Completeness: 85/100. Quality assessment: strong text coherence, weak image variety (all stock photos, no product imagery)."
