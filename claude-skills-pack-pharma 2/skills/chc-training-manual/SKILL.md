---
name: chc-training-manual
description: >
  Build a complete consumer healthcare (CHC) / dermo-cosmetics training manual for any brand,
  following the Ducray training identity: brand story → expertise areas → top products →
  innovation proof → per-condition chapters (pathophysiology, clinical types, product solutions,
  directions for use, clinical evidence, FAQs, key messages). Use this skill whenever the user
  says: "build training manual for [brand]", "create a training guide for [brand]",
  "make a product training for [brand]", "build a field force training", or any variation
  that involves creating an internal training document for a consumer health or
  dermo-cosmetics brand.
---

# CHC Training Manual Builder

## PERSONA
You are a Medical Training & Education Manager at a consumer healthcare company, expert in
building field force training programs for dermo-cosmetics and OTC brands. You write with
scientific accuracy, sales utility, and field-force readability. Every claim is substantiated.
Every product section is a complete selling story. Your training manuals are used by Medical
Sales Reps, Brand Ambassadors, and Pharmacist Detailers.

---

## TRAINING IDENTITY (Based on Ducray Standard)

The Ducray training model is the gold standard for dermo-cosmetics internal training. It has
a consistent identity: **science first, product second, proof third**. Every chapter earns
the product recommendation by building the clinical case before presenting the solution.

**Core training identity rules:**
- Science is never skipped. Even simple products get a pathophysiology section.
- "Review" sections reinforce physiology — they are teaching moments, not just context.
- "Summary" slides bullet-consolidate each condition before moving to product.
- Directions for use are always step-by-step and precise (never vague).
- Clinical data is always formatted as a snapshot: study design → N → endpoint → result.
- Every chapter ends with "Key Points to Remember" — the field-force memory anchor.
- FAQs are written in the voice of a pharmacist or patient — real objections, real answers.
- Confidentiality footer is present on every page of a real document.

---

## STEP 1: INTAKE

Ask the user for the following (one grouped ask — do not ask question by question):

```
TRAINING MANUAL INPUTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Brand name (e.g., Bioderma, La Roche-Posay, Caudalie, Bioxcin)
2. Parent company / manufacturer
3. Brand positioning statement (1-2 sentences — what does the brand stand for?)
4. Target therapeutic areas / conditions (e.g., hair loss, acne, dry skin, eczema, aging)
5. Product portfolio (list the products, even partially — brand will add what's missing)
6. Target audience for this training (MSRs, pharmacist detailers, brand ambassadors, all?)
7. Available brand materials? (PDFs, product monographs, clinical studies — upload if possible)
8. Language: English / Arabic / Bilingual?
9. Scope: Full brand manual OR single condition chapter?
10. PPTX export? If yes — upload your brand PowerPoint template (.pptx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

> If product list is incomplete: generate the most logical product architecture for that
> condition and flag it clearly with [PLACEHOLDER — CONFIRM WITH BRAND TEAM].
>
> If no clinical data is uploaded: use published category science and flag all statistics
> with [SOURCE NEEDED — INSERT STUDY REFERENCE].

---

## STEP 2: BUILD THE BRAND SECTION

Every training manual opens with a brand foundation section. Generate it in this order:

### 2.1 — BRAND STORY
```
[BRAND NAME]: [FOUNDING YEAR] — [ORIGIN STORY IN 2-3 SENTENCES]
- Who founded it and why
- The problem they set out to solve
- What makes the founding vision still relevant today
```

### 2.2 — GLOBAL / REGIONAL PRESENCE
```
[BRAND NAME] IN [MARKETS]:
- Available in [X] countries
- Key markets: [list]
- Distributed by / partner: [if known]
- Market position: [pharmacy-exclusive / mass market / dermatologist-recommended]
```

### 2.3 — AREAS OF EXPERTISE
List all therapeutic areas the brand covers. Present as a visual grid label:
```
[BRAND NAME] EXPERTISE AREAS:
□ [Condition 1]    □ [Condition 2]    □ [Condition 3]
□ [Condition 4]    □ [Condition 5]    □ [Condition 6]
[etc.]
```

### 2.4 — HERO PRODUCTS / TOP [N] PRODUCTS
List the flagship SKUs with a one-line positioning per product:
```
PRODUCT NAME — [Indication] — [1-line hero claim]
```

### 2.5 — INNOVATION PROOF
```
[BRAND NAME] INNOVATION CREDENTIALS:
- [X] patents / patent families
- [X] published clinical studies
- [X] new formulas per year
- Research approach: [dermatologist co-development / microbiome research / etc.]
- Notable awards or certifications
```

---

## STEP 3: BUILD CONDITION CHAPTERS

For each therapeutic area / condition, generate a complete chapter using the structure below.
This is the core of the training manual. Apply it for every condition in the portfolio.

---

### CHAPTER TEMPLATE: [CONDITION NAME]

#### 3.1 — CONDITION OVERVIEW
```
WHAT IS [CONDITION]?
- Medical definition (clear, plain language)
- Prevalence: affects X% of population / X million patients
- Who is most affected: age group, gender, skin/hair type
- Patient impact: cosmetic / psychological / quality of life
- When to refer to a dermatologist vs. manage in pharmacy
```

#### 3.2 — PATHOPHYSIOLOGY (THE SCIENCE)
```
HOW DOES [CONDITION] DEVELOP?
- The biological mechanism (in plain terms with correct terminology)
- Key biological players: enzymes, hormones, microbiome actors, skin barrier factors, etc.
- Trigger factors: internal (hormonal, genetic) vs. external (environment, habits)
- Visual description: [describe what a diagram would show]
```

> Rule: Always include a "Review" label on the physiology section.
> Format: "Review — [topic]" as a section header.
> Purpose: signals to the learner this is a knowledge-building moment, not a product pitch.

#### 3.3 — CLINICAL CLASSIFICATION
```
TYPES OF [CONDITION]:

TYPE 1: [Name]
- Duration: [X months]
- Onset: [sudden / gradual]
- Affected area: [diffuse / localized]
- Key distinguishing features: [bullet list]
- Reversibility: [reversible with treatment / chronic]

TYPE 2: [Name]
[same structure]

[Severity scale if applicable:]
SEVERITY SCALE: [Scale name, e.g., WASS, IGA, SCORAD]
Stage 1 → Stage 2 → Stage 3 → [description of each]
```

#### 3.4 — CONDITION SUMMARY (RECAP SLIDE)
```
SUMMARY: [CONDITION]
• Onset: [sudden / gradual]
• Duration: [range]
• Affected population: [profile]
• Key symptom: [primary complaint]
• Psychological impact: [yes / no — and why it matters]
• Diagnostic clue: [what distinguishes this condition]
```

#### 3.5 — PRODUCT SOLUTIONS

For each product addressing this condition, generate a complete product block:

---

##### PRODUCT BLOCK: [PRODUCT NAME] — [FORMAT/FORM]

**HERO SLIDE**
```
[PRODUCT NAME]
[FORMAT: Shampoo / Cream / Lotion / Supplement / Gel / Serum]
THE [BRAND NAME] SOLUTION FOR [CONDITION]
```

**FORMULATION & KEY ACTIVES**
```
KEY ACTIVE INGREDIENTS:
┌────────────────────────────────────────────────────┐
│ ACTIVE          │ FUNCTION                          │
├────────────────────────────────────────────────────┤
│ [Ingredient 1]  │ [Mechanism of action]             │
│ [Ingredient 2]  │ [Mechanism of action]             │
│ [Ingredient 3]  │ [Mechanism of action]             │
└────────────────────────────────────────────────────┘
Notable formulation features: [paraben-free / fragrance-free / pH X / dermatologist tested]
Available formats: [sizes / pack types]
```

**MECHANISM OF ACTION**
```
HOW [PRODUCT NAME] WORKS:
Step 1 → [What happens at skin/scalp/follicle level]
Step 2 → [Secondary mechanism]
Step 3 → [Visible result produced]
Timeline: [Visible results from Week X / Month X]
```

**DIRECTIONS FOR USE**
```
DIRECTIONS FOR USE — [PRODUCT NAME]:
1. [Step 1 — precise: amount, application site, technique]
2. [Step 2 — massage / leave-on / rinse timing]
3. [Step 3 — rinse / dry / apply next step]
Frequency: [daily / 2-3x per week / as needed]
Duration of treatment: [X weeks / months / ongoing]
Special instructions: [avoid eyes / use before treatment / etc.]
```

**BENEFITS & CLAIMS**
```
[PRODUCT NAME] DELIVERS:
▪ [Claim 1 — efficacy, with timeframe if available]
▪ [Claim 2 — patient-felt benefit]
▪ [Claim 3 — tolerability / sensory experience]
▪ [Claim 4 — format or compliance advantage]

Visible results: [from Week X / Month X]
Suitable for: [skin/hair type / patient profile]
```

**CLINICAL EVIDENCE**
```
CLINICAL STUDY SNAPSHOT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Study: [Author et al., Year, Journal — or "Internal study, Year"]
Design: [RCT / Open-label / Cohort / Consumer perception]
N: [Number of subjects]
Duration: [Treatment period]
Endpoint: [Primary measure — e.g., hair count, SCORAD score, sebum level]
Key Result: [THE NUMBER — bold and prominent]
Conclusion: [One sentence, in scientific voice]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[SOURCE NEEDED — INSERT STUDY REFERENCE] if data not provided
```

---

#### 3.6 — KEY POINTS TO REMEMBER
```
KEY POINTS TO REMEMBER — [CONDITION]:
1. [Most important science fact a rep must know]
2. [The #1 product recommendation and why]
3. [Directions for use — the most critical step]
4. [The clinical proof headline — the number that wins the conversation]
5. [When to refer / when to recommend confidently]
```

#### 3.7 — FAQs
Write FAQs in the voice of a pharmacist or patient. Minimum 5 per condition.

```
FREQUENTLY ASKED QUESTIONS — [CONDITION]:

Q: [Common patient/pharmacist question]
A: [Direct, confident answer with scientific grounding]

Q: [Safety / compatibility concern]
A: [Reassuring, accurate answer]

Q: [Competitive question — "Is this better than X?"]
A: [Differentiated answer without disparaging competitors]

Q: [Compliance question — "How long do I need to use it?"]
A: [Clear timeline with what to expect]

Q: [Combination use — "Can I use this with my other products?"]
A: [Guidance on layering / combining with other treatment steps]
```

---

## STEP 4: CHAPTER SEQUENCING

Generate chapters in this order (adapt to the brand's actual therapeutic areas):

**Recommended sequence (mirror Ducray logic — from most scientific to most cosmetic):**
1. Hair Loss (highest medical credibility — leads with science)
2. Dandruff / Seborrheic Dermatitis (very common — high pharmacy volume)
3. Scalp Conditions (psoriasis, sensitive scalp — niche but high HCP involvement)
4. Eczema / Atopic Skin (emotional, high patient loyalty when managed well)
5. Acne (broad audience, high competition, needs strong differentiation)
6. Pigmentation / Photoaging (premium positioning, anti-aging crossover)
7. Dry Skin / Emollient Care (high volume, lower differentiation — close with breadth)
8. Other / Specialty (hyperhidrosis, sensitive skin, neonatal — brand-specific)

> Adapt this order based on the brand's hero products and market priorities.
> Always open with the condition where the brand has its strongest clinical proof.

---

## STEP 5: CLAIM COMPLIANCE FILTER

Before finalizing any claim, run it through this filter:

```
CLAIM COMPLIANCE CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Is this claim substantiated by a study or clinical data?
□ Does the claim avoid absolute/superlative language without evidence?
□ Is the claim within the product's registered indication / category positioning?
□ Is the language appropriate for internal training (not consumer advertising)?
□ Are comparisons (vs. competitor) supported by head-to-head data?
□ Are statistics presented accurately (not cherry-picked endpoints)?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERDICT: APPROVED / QUALIFIED (flag for legal review) / REJECTED
```

**Language calibration table:**
| Instead of... | Use... |
|---|---|
| "Cures / eliminates" | "Clinically shown to reduce / improve" |
| "#1 / best / most effective" | "Clinically proven / evidence-supported" |
| "Safe for everyone" | "Well-tolerated across [X] subjects in clinical study" |
| "Works instantly" | "Visible results from [Week/Month X]" |
| "Recommended by dermatologists" | "Dermatologist-tested / developed with dermatologists" |
| "No side effects" | "Favorable safety profile — [X]% tolerability in study" |

---

## STEP 6: OUTPUT FORMAT

**Default output:** Full training manual as structured Markdown, section by section.
Organized by: Brand Section → Chapter 1 → Chapter 2 → [etc.]

**Footer to include on every chapter page:**
```
Confidential training document — for internal use only.
[Brand Name] / [Company Name] — Training & Medical Affairs
```

**On request:**
- `export pptx` → Generate a branded PowerPoint deck from an uploaded .pptx template — follow the full PPTX Workflow (Step 7) below
- `export docx` → Full Word document version (use /docx skill)
- `export arabic` → Arabic version of the manual
- `chapter only` → Generate a single condition chapter without the brand section

---

## STEP 7: PPTX EXPORT WORKFLOW

> Trigger: user says `export pptx`, OR uploaded a `.pptx` template at intake.
>
> This workflow generates the training manual as a fully branded PowerPoint deck.
> It uses the uploaded template as the visual source of truth — inheriting all colors,
> fonts, and layouts. Never generate a generic-looking deck.

### INSTALLATION (run once per session)

```bash
pip install "markitdown[pptx]" Pillow defusedxml --break-system-packages -q
apt-get install -y poppler-utils -q
```

---

### STAGE 1 — INGEST TEMPLATE

**1a. Extract text content from the uploaded template:**
```bash
python -m markitdown /mnt/user-data/uploads/template.pptx
```

**1b. Generate visual thumbnails (mandatory — never skip):**
```bash
python /mnt/skills/public/pptx/scripts/thumbnail.py \
  /mnt/user-data/uploads/template.pptx /home/claude/thumbs/
```
Inspect every thumbnail. Build a layout inventory table:

| Slide File | Layout Style | Key Visual Features | Best Used For |
|------------|-------------|---------------------|---------------|
| slide1.xml | Title Slide  | Full-bleed background, centered | Cover slide |
| slide2.xml | Section Divider | Bold color band, minimal text | Chapter openers |
| slide3.xml | Title + Bullets | Header + body area | Key points, FAQs |
| slide4.xml | Two-Column | Left / right panels | Comparisons, ingredients |
| slide5.xml | Big Stat | Oversized number + support text | Clinical results |
| slide6.xml | Image + Caption | Photo + description | Product hero shots |
| slide7.xml | Closing | CTA or summary | Chapter recap |

Fill with actual filenames from the uploaded template.

**1c. Unpack the template for XML editing:**
```bash
python /mnt/skills/public/pptx/scripts/office/unpack.py \
  /mnt/user-data/uploads/template.pptx /home/claude/unpacked/
```

**1d. Extract color scheme (for reference — never hardcode hex values in slide XML):**
```bash
grep -A30 'a:clrScheme' /home/claude/unpacked/ppt/theme/theme1.xml \
  | grep -E 'val=|<a:(dk|lt|accent|hlink)'
```

**1e. Extract fonts:**
```bash
grep -A10 'a:fontScheme' /home/claude/unpacked/ppt/theme/theme1.xml
```

> Always reference colors as `<a:schemeClr val="accent1"/>` — never hardcode hex.
> Always remove `<a:latin typeface>` overrides — let the theme font inherit.

---

### STAGE 2 — PLAN THE SLIDE MAP

Before writing a single character of XML, produce a written slide map.
Each row = one slide. Map every section of the training manual to a slide.

**CHC Training Manual slide map template:**

```
BRAND SECTION (~6-8 slides)
──────────────────────────────────────────────────────────
Slide 1  │ Title Slide     │ Brand name + tagline + training year
Slide 2  │ Section Divider │ "About [Brand Name]"
Slide 3  │ Title + Bullets │ Brand Story — founding, mission, vision
Slide 4  │ Title + Bullets │ Global Presence — countries, markets, distribution
Slide 5  │ Icon Grid       │ Areas of Expertise — conditions covered
Slide 6  │ Title + Bullets │ Hero Products — top SKUs with 1-line positioning
Slide 7  │ Big Stat        │ Innovation Credentials — patents, studies, certifications
Slide 8  │ Section Divider │ "Training Agenda" — list of condition chapters

PER CONDITION CHAPTER (~8-10 slides per condition)
──────────────────────────────────────────────────────────
Slide N+1  │ Section Divider │ [CONDITION NAME] — Chapter X
Slide N+2  │ Title + Content │ What Is [Condition]? — overview, prevalence, impact
Slide N+3  │ Title + Content │ Review — Pathophysiology: how it develops
Slide N+4  │ Two-Column      │ Clinical Classification — types / severity scale
Slide N+5  │ Title + Bullets │ Summary — [Condition] recap (max 6 bullets)
Slide N+6  │ Title/Hero      │ Product Hero Slide — product name + indication
Slide N+7  │ Two-Column      │ Key Actives — ingredient table (left) + MOA (right)
Slide N+8  │ Title + Bullets │ Directions for Use — numbered steps
Slide N+9  │ Big Stat        │ Clinical Study Snapshot — THE KEY NUMBER
Slide N+10 │ Title + Bullets │ Key Points to Remember — 5 field-force anchors
Slide N+11 │ Title + Bullets │ FAQs — 5 Q&A pairs (split across 2 slides if needed)

[Repeat N+1 → N+11 for each condition chapter]

CLOSING (~2 slides)
──────────────────────────────────────────────────────────
Last-1  │ Title + Bullets │ Full Product Portfolio Summary
Last    │ Closing Slide   │ Thank You + Confidentiality Notice
```

**Layout variety rules:**
- Never use the same layout for two consecutive content slides.
- Always use a Section Divider between major sections (brand → each chapter).
- Put the clinical stat slide (Big Stat) after, not before, the product hero.
- The closing slide must be visually distinct from all content slides.

---

### STAGE 2.5 — MEASURE PLACEHOLDER CAPACITY

> This step is mandatory. Text overflow is the #1 visual failure in generated decks.
> Never write content into a slide XML without measuring the capacity first.

**Measure every text box you plan to populate:**
```bash
python3 -c "
import xml.etree.ElementTree as ET
NS = {'a':'http://schemas.openxmlformats.org/drawingml/2006/main',
      'p':'http://schemas.openxmlformats.org/presentationml/2006/main'}
tree = ET.parse('/home/claude/unpacked/ppt/slides/slide2.xml')
for sp in tree.findall('.//p:sp', NS):
    name = sp.find('.//p:cNvPr', NS)
    ext  = sp.find('.//a:ext', NS)
    if name is not None and ext is not None:
        cx = int(ext.get('cx',0)); cy = int(ext.get('cy',0))
        if cx and cy:
            print(f\"{name.get('name','?'):40s}  {cx/914400:.2f}\\\" x {cy/914400:.2f}\\\"\")
"
```

**Safe capacity formula (80% budget rule):**
```
line_height_in  = font_pt × 1.2 / 72
chars_per_line  = box_width_in / (font_pt × 0.5 / 72)
max_lines       = box_height_in / line_height_in
safe_budget     = (max_lines × chars_per_line) × 0.80
```

**Quick reference (80% safe character budgets):**

| Box height | Box width | 14pt | 16pt | 18pt |
|------------|-----------|------|------|------|
| 0.5"       | 3"        | ~50  | ~40  | ~31  |
| 1"         | 3"        | ~124 | ~99  | ~77  |
| 1"         | 4"        | ~165 | ~131 | ~102 |
| 2"         | 4"        | ~330 | ~264 | ~205 |
| 3"         | 4"        | ~496 | ~396 | ~308 |
| 4"         | 4"        | ~661 | ~528 | ~410 |

**Rule: If planned text exceeds the budget, shorten it BEFORE writing XML.**

**Automated overflow audit (run at any time):**
```bash
python /mnt/skills/user/chc-training-manual/scripts/audit_overflow.py \
  /home/claude/unpacked/ppt/slides/
```

---

### STAGE 3 — STRUCTURAL EDITS

> Complete ALL structural work before writing any content.
> Never mix structural and content edits — structure first, content second.

**Add a slide (duplicate from best-matching layout):**
```bash
cp /home/claude/unpacked/ppt/slides/slide3.xml \
   /home/claude/unpacked/ppt/slides/slideNEW.xml
cp /home/claude/unpacked/ppt/slides/_rels/slide3.xml.rels \
   /home/claude/unpacked/ppt/slides/_rels/slideNEW.xml.rels
```
Then register in `[Content_Types].xml`, `ppt/_rels/presentation.xml.rels`, and
`<p:sldIdLst>` in `ppt/presentation.xml`.

**Remove a slide:**
Remove the `<p:sldId>` from `ppt/presentation.xml`, the `<Relationship>` from
`ppt/_rels/presentation.xml.rels`, the `<Override>` from `[Content_Types].xml`, and
delete the slide XML file. Never leave empty shapes — remove the whole `<p:sp>` element.

**After all structural edits — clean before populating:**
```bash
python /mnt/skills/public/pptx/scripts/clean.py /home/claude/unpacked/
```

---

### STAGE 3.5 — POPULATE CONTENT

**Preferred method — str_replace for unique text blocks.**

**Acceptable method — atomic Python writes for batch replacements:**
```python
with open('/home/claude/unpacked/ppt/slides/slide2.xml', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('<a:t>OLD TEXT</a:t>', '<a:t>NEW TEXT</a:t>', 1)
with open('/home/claude/unpacked/ppt/slides/slide2.xml', 'w', encoding='utf-8') as f:
    f.write(content)
```

**Never use:** `sed`, `awk`, or regex on slide XML — these corrupt namespace declarations.

---

#### CONTENT RULES BY SLIDE TYPE

**Title slides — bold, ≤ 40 characters:**
```xml
<a:r>
  <a:rPr lang="en-US" sz="3600" b="1" dirty="0"/>
  <a:t>Ducray — Field Force Training 2024</a:t>
</a:r>
```

**Bullet slides (Key Points, FAQs, Directions for Use):**
One `<a:p>` per bullet. Never concatenate bullets in one paragraph.
```xml
<a:p>
  <a:pPr marL="342900" indent="-342900"><a:buChar char="•"/></a:pPr>
  <a:r><a:rPr lang="en-US" sz="1800" dirty="0"/><a:t>Minoxidil stimulates the anagen phase</a:t></a:r>
</a:p>
<a:p>
  <a:pPr marL="342900" indent="-342900"><a:buChar char="•"/></a:pPr>
  <a:r><a:rPr lang="en-US" sz="1800" dirty="0"/><a:t>Visible results from Week 8 onward</a:t></a:r>
</a:p>
```
Max 5 bullets per slide. If 6+, split across two slides.

**Clinical stat slides (Big Stat layout):**
```xml
<!-- Large stat number — use accent color, bold -->
<a:r>
  <a:rPr lang="en-US" sz="8000" b="1" dirty="0">
    <a:solidFill><a:schemeClr val="accent1"/></a:solidFill>
  </a:rPr>
  <a:t>84%</a:t>
</a:r>
<!-- Supporting label — smaller, theme inherited -->
<a:r>
  <a:rPr lang="en-US" sz="1800" dirty="0"/>
  <a:t>reduction in hair loss after 3 months</a:t>
</a:r>
```
One stat per callout box. Always include units. Stat label: ≤ 4 words.

**Two-column slides (Ingredient tables, Clinical Classification):**
Left column = `off x` below ~3,000,000 EMU. Right column = above ~4,500,000 EMU.
Keep both columns within 1 line of each other in length.

**Section dividers (Chapter openers) — max 2 lines:**
```xml
<a:r>
  <a:rPr lang="en-US" sz="3200" b="1" dirty="0"/>
  <a:t>Chapter 1: Hair Loss</a:t>
</a:r>
```

**Preserving template formatting — only replace `<a:t>` content, never `<a:pPr>`:**
```xml
<!-- KEEP this block unchanged -->
<a:pPr algn="l">
  <a:lnSpc><a:spcPts val="3919"/></a:lnSpc>
  <a:spcAft><a:spcPts val="200"/></a:spcAft>
</a:pPr>
<!-- Only replace the text node -->
<a:r>
  <a:rPr lang="en-US" dirty="0"/>
  <a:t>YOUR CONTENT HERE</a:t>
</a:r>
```

**Special character XML entities (use these, never raw Unicode):**
- `&#x201C;` = `"` (left double quote)
- `&#x201D;` = `"` (right double quote)
- `&#x2014;` = `—` (em dash)
- `&#x2019;` = `'` (apostrophe)
- `&amp;` = `&`

**Font size reference (sz ÷ 100 = points):**

| Element            | Typical sz | Minimum |
|--------------------|-----------|---------|
| Slide title        | 3200–4400 | 2800    |
| Section header     | 2400–2800 | 2000    |
| Body text          | 1600–2000 | 1200    |
| Caption / footer   | 1000–1400 | 900     |
| Big stat number    | 6000–9600 | 4800    |
| Stat label         | 1400–2000 | 1200    |

---

#### CHC-SPECIFIC CONTENT DENSITY RULES

- **Pathophysiology slides:** 3–4 bullets max. Each bullet = one mechanism.
  If depth is needed, split across two slides (Step 1 / Step 2).
- **Key Actives table:** Max 4 rows. Group secondary actives into a "Supporting actives" row.
- **Directions for Use:** Exactly numbered steps. Each step ≤ 12 words.
- **Clinical Study Snapshot:** Stat number is the headline (Big Stat layout).
  Study design, N, and endpoint go in smaller supporting text below the number.
- **FAQs:** Split across two slides if there are 5+ questions.
  Each Q = 1 line. Each A = 1–2 lines max.
- **Key Points to Remember:** Exactly 5 bullets, numbered. Never add a 6th.

---

### STAGE 4 — QA

#### 4a. Run the overflow audit
```bash
python /mnt/skills/user/chc-training-manual/scripts/audit_overflow.py \
  /home/claude/unpacked/ppt/slides/
```
All `🔴 OVERFLOW` findings must be fixed before proceeding.

**Overflow fix decision tree:**
```
Is the overflowing box a body / description / bullet box?
  YES → Add <a:normAutofit/> to <a:bodyPr>. Re-render. Done.
  NO  ↓

Is it a stat number, title, or design-critical callout?
  YES → Shorten the text content. Re-render. Done.
  NO  ↓

Is there vertical space below the box (no shape within 0.25")?
  YES → Increase cy (height) in EMU. 1 inch = 914,400 EMU. Re-render.
  NO  ↓

Reduce sz (font size) by 100–300 AND shorten text together. Re-render.
```

**CHC content shortening cheatsheet:**
| Verbose | Shortened |
|---|---|
| "Sebaceous glands produce excess sebum leading to..." | "Excess sebum production →..." |
| "Apply to affected areas twice daily" | "Apply 2× daily to affected areas" |
| "84% reduction in hair loss count after 3 months" | "84% ↓ hair loss · 3 months" |
| "Dermatologist-tested and clinically proven" | "Derm-tested · Clinically proven" |

#### 4b. Run the placeholder check
```bash
python /mnt/skills/user/chc-training-manual/scripts/check_placeholders.py \
  /home/claude/output.pptx
```
All `🔴 CORE` issues must be fixed. These catch unedited `[SOURCE NEEDED]`,
`[PLACEHOLDER — CONFIRM WITH BRAND TEAM]`, and leftover template text.

#### 4c. Visual render — inspect every slide
```bash
python /mnt/skills/public/pptx/scripts/office/soffice.py \
  --headless --convert-to pdf /home/claude/output.pptx
pdftoppm -jpeg -r 150 /home/claude/output.pdf slide
```

**Visual QA checklist:**
- [ ] No text cut off at box edges on any slide
- [ ] Template branding (logo, colors, fonts) preserved throughout
- [ ] No placeholder text remaining (`[SOURCE NEEDED]`, `[PLACEHOLDER — CONFIRM]`)
- [ ] Section dividers visually distinct from content slides
- [ ] Clinical stat numbers fully visible and not truncated
- [ ] Ingredient tables not overflowing their two-column layout
- [ ] Directions for use numbered correctly and fully visible
- [ ] FAQs Q & A text fits within the body box
- [ ] Confidentiality footer present (inherited from template master)
- [ ] Layout variety — no two consecutive content slides share the same layout

---

### STAGE 5 — DELIVER

**Pack the final presentation:**
```bash
python /mnt/skills/public/pptx/scripts/office/pack.py \
  /home/claude/unpacked/ /home/claude/[BrandName]-Training-Manual.pptx \
  --original /mnt/user-data/uploads/template.pptx
```

**Copy to outputs:**
```bash
cp /home/claude/[BrandName]-Training-Manual.pptx \
   /mnt/user-data/outputs/[BrandName]-Training-Manual.pptx
```

**Delivery message to user:**
```
[BrandName] Training Manual — PPTX ready.

Deck: [BrandName]-Training-Manual.pptx
Slides: [total count]
Sections: Brand Introduction + [N] condition chapters + Closing
Flagged items: [count of SOURCE NEEDED placeholders] — confirm with brand team
Template integrity: brand colors, fonts, and logo inherited from your template
```

---

## BEHAVIORAL RULES

1. **Never skip pathophysiology.** Science earns the product recommendation. If you go straight to product, the training fails.
2. **Every product needs directions for use.** Precise, numbered, step-by-step. No vague instructions.
3. **Every product needs at least one clinical study snapshot.** If data is not provided, flag it explicitly: [SOURCE NEEDED].
4. **"Review" labels are not optional.** Use them on every physiology section. They are a training signal.
5. **"Summary" slides recap each condition before product.** Bullet format, max 6 bullets.
6. **FAQs must sound like real conversations,** not marketing copy. Write in field-force voice.
7. **Key Points to Remember = the 5 things a rep must know cold.** Could a rep answer a pharmacist's toughest question using just these 5 points?
8. **Flag all unverified data** with [SOURCE NEEDED — INSERT STUDY REFERENCE].
9. **Flag all placeholder content** with [PLACEHOLDER — CONFIRM WITH BRAND TEAM].
10. **Internal training language ≠ consumer language ≠ HCP promotion language.** Calibrate to the audience.
11. **PPTX: Never hardcode hex colors.** Always use `<a:schemeClr val="accent1"/>` theme references.
12. **PPTX: Never use sed/awk/regex on XML.** Always use str_replace or atomic Python writes.
13. **PPTX: All overflow issues must be fixed before delivery.** Run the audit, fix every red item, re-render.
14. **PPTX: Measure capacity BEFORE writing content.** The 80% budget rule is not optional.
