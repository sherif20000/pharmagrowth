import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title:
    "Merchandising for Consumer Healthcare: How to Win at the Pharmacy Shelf",
  description:
    "A practical guide to merchandising consumer healthcare products in KSA and GCC pharmacies. Covers shelf placement science, planogram strategy, POSM, Nahdi and Al-Dawaa standards, digital shelf, audits, and category management from 20+ years of pharma experience.",
  openGraph: {
    title:
      "Merchandising for Consumer Healthcare: How to Win at the Pharmacy Shelf",
    description:
      "A practical guide to merchandising consumer healthcare products in KSA and GCC pharmacies. Covers shelf placement, planogram strategy, POSM, digital shelf, and category management.",
    type: "article",
    authors: ["Sherif Al-Kady"],
  },
  keywords: [
    "consumer healthcare merchandising",
    "pharmacy shelf strategy",
    "merchandising KSA pharmacy",
    "planogram consumer healthcare",
    "pharmacy POSM strategy",
    "Nahdi merchandising standards",
    "Al-Dawaa pharmacy merchandising",
    "digital shelf pharma",
    "pharmacy category management",
    "OTC merchandising GCC",
  ],
};

export default function MerchandisingArticle() {
  return (
    <ArticleLayout
      title="Merchandising for Consumer Healthcare: How to Win at the Pharmacy Shelf"
      description="A practical guide to merchandising consumer healthcare products in KSA and GCC pharmacies. Covers shelf placement science, planogram strategy, POSM, Nahdi and Al-Dawaa standards, digital shelf, audits, and category management from 20+ years of pharma experience."
      author="Sherif Al-Kady, MBA"
      date="March 23, 2026"
      readTime="13 min read"
      category="Merchandising"
      slug="merchandising-consumer-healthcare"
      publishedDate="2026-03-23"
      heroImage="/images/blog-hero-merchandising-chc.png"
      heroImageAlt="Consumer healthcare products on pharmacy shelf showing merchandising strategy"
      faqItems={[
        {
          question: "What is pharmacy merchandising for consumer healthcare brands?",
          answer: "Pharmacy merchandising for consumer healthcare brands encompasses all activities that influence product visibility and purchase at the pharmacy shelf — including planogram design, shelf placement negotiation, POSM installation, digital shelf management, and category management partnerships with pharmacy chains.",
        },
        {
          question: "How important is shelf placement for OTC product sales?",
          answer: "Shelf placement is critical for OTC products. Studies consistently show that 70% of pharmacy purchase decisions are made or changed at the shelf. Eye-level placement (shelf levels 2-3) drives 30-40% more sales than floor-level placement. Being off-shelf for even one day in a high-traffic pharmacy can cost significant revenue.",
        },
        {
          question: "What is a planogram and why does it matter for pharma brands?",
          answer: "A planogram is a visual diagram that prescribes exactly where each product should be placed on a pharmacy shelf — including the number of facings, shelf level, and adjacency to competitors. Brands that provide pharmacy chains with planogram proposals backed by sales data typically achieve better placement and compliance than those who don't.",
        },
        {
          question: "How do Nahdi and Al-Dawaa handle merchandising for OTC brands?",
          answer: "Nahdi and Al-Dawaa both have national planogram standards that brands must negotiate through their key account teams. Access to premium shelf positions, end-caps, and secondary displays typically requires a formal joint business plan (JBP) agreement, inclusion in their planogram review cycle, and in some cases, shared category management responsibilities.",
        },
      ]}
    >
      <p>
        Here is a number that should keep every consumer healthcare brand
        manager up at night: roughly 70% of purchase decisions in a pharmacy
        are made or changed at the shelf. Not during the TV commercial. Not
        when the patient Googled the brand at home. At the shelf &mdash; in
        those final three seconds when a hand reaches out and picks one
        product over another.
      </p>
      <p>
        I have spent more than 20 years building consumer healthcare brands
        across Saudi Arabia, the UAE, Egypt, and the broader MENA region. I
        have launched OTC products, scaled dermocosmetic portfolios, and
        managed oral care brands through every kind of pharmacy channel
        imaginable &mdash; from independent pharmacies in Cairo to Nahdi
        flagships in Riyadh. And if there is one lesson I keep coming back to,
        it is this: the brands that win at the shelf are not always the ones
        with the biggest advertising budgets. They are the ones that treat
        merchandising as a strategic discipline, not a logistical afterthought.
      </p>
      <p>
        This article is the guide I wish someone had handed me 15 years ago.
        It covers the science behind shelf placement, the art of in-store
        visibility, the mechanics of planogram negotiation, and the emerging
        world of digital shelf optimization &mdash; all through the lens of
        consumer healthcare in the KSA and GCC pharmacy context.
      </p>

      {/* Merchandising Key Stats */}
      <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
        {[
          { value: "70%", label: "Of pharmacy purchases decided or changed at the shelf" },
          { value: "30–40%", label: "More sales at eye-level vs. floor-level placement" },
          { value: "3×", label: "Faster sell-out for brands with consistent POSM vs. none" },
          { value: "15%", label: "Average revenue lift from a compliant planogram rollout" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-accent-500 mb-1">{stat.value}</p>
            <p className="text-xs text-navy-400 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>

      <hr />

      <h2>Table of Contents</h2>
      <ul>
        <li>Why Merchandising Matters More in Pharma Than You Think</li>
        <li>The Science of Pharmacy Shelf Placement</li>
        <li>Planogram Strategy for Consumer Healthcare</li>
        <li>In-Store Visibility Tools That Actually Work</li>
        <li>Merchandising in KSA Pharmacy Chains</li>
        <li>Digital Merchandising and the E-Pharmacy Shelf</li>
        <li>Merchandising Audits and Compliance</li>
        <li>Category Management and the Retailer Relationship</li>
        <li>Frequently Asked Questions</li>
      </ul>

      <hr />

      <h2>Why Merchandising Matters More in Pharma Than You Think</h2>
      <p>
        Most pharmaceutical companies invest heavily in three areas: medical
        detailing to physicians, digital advertising to consumers, and trade
        promotions to pharmacies. Merchandising &mdash; the discipline of
        optimizing how products appear, perform, and sell within the retail
        environment &mdash; gets treated as a line item inside the trade
        marketing budget. A shelf talker here, a counter display there, maybe
        a gondola header if the budget allows.
      </p>
      <p>
        That is a strategic mistake, and I have watched it cost brands millions
        in lost sell-out over the years.
      </p>
      <p>
        Consumer healthcare sits in a unique position within the pharmaceutical
        industry. Unlike prescription drugs, where the physician&rsquo;s script
        largely determines what gets dispensed, consumer healthcare products
        &mdash; OTC medications, dermocosmetics, oral care, vitamins, and
        supplements &mdash; compete for attention at the point of purchase.
        The shopper walks into Nahdi looking for a sunscreen and faces 15
        options. The patient asks the pharmacist for something for a sore
        throat and the pharmacist scans the shelf behind the counter. In both
        cases, merchandising determines which brand gets picked.
      </p>
      <p>
        Here is why merchandising deserves more strategic attention than most
        pharma companies give it:
      </p>
      <ul>
        <li>
          <strong>The pharmacist recommendation is influenced by visibility.</strong>{" "}
          Pharmacists in KSA are incredibly busy. When a patient asks for a
          recommendation, the pharmacist&rsquo;s eyes scan the shelf behind
          them. The product that is at eye level, well-stocked, and clearly
          labeled gets recommended more often. I have seen this pattern
          hundreds of times during store visits.
        </li>
        <li>
          <strong>Category-directed shoppers choose based on shelf position.</strong>{" "}
          A shopper who enters the pharmacy knowing they need a moisturizer but
          without a brand in mind will pick from what they can see most easily.
          Eye-level placement and clear brand blocking are the single biggest
          drivers of conversion for these shoppers.
        </li>
        <li>
          <strong>Impulse purchases are a massive revenue lever.</strong>{" "}
          Lip care, hand sanitizers, travel-size products, vitamins &mdash;
          these categories thrive on impulse. Counter displays and checkout
          adjacency drive this behavior, and it requires deliberate
          merchandising investment.
        </li>
        <li>
          <strong>Advertising without merchandising is wasted money.</strong>{" "}
          I have seen brands spend millions on digital campaigns driving
          consumers to pharmacies, only for those consumers to find the product
          out of stock, buried on a bottom shelf, or hidden behind a
          competitor&rsquo;s display. Every riyal spent on advertising is
          amplified or wasted by what happens at the shelf.
        </li>
      </ul>

      <hr />

      <h2>The Science of Pharmacy Shelf Placement</h2>
      <p>
        Shelf placement is not guesswork. There is a well-documented body of
        retail science behind where products should sit, and the principles
        apply with particular force in pharmacy retail. Let me break down
        the key concepts every consumer healthcare marketer needs to
        internalize.
      </p>

      <h3>Eye Level Is Buy Level</h3>
      <p>
        This is the oldest rule in retail merchandising, and it remains the
        most important. Products placed at eye level &mdash; typically between
        120 and 160 centimeters from the floor &mdash; consistently outsell
        products placed above or below that zone by a factor of two to three
        times. In pharmacy retail, this effect is even more pronounced because
        shoppers are often browsing categories rather than searching for a
        specific brand.
      </p>
      <p>
        Eye level is relative, and this matters in the KSA market. The average
        adult height in Saudi Arabia differs between men and women, and the
        shopper demographic varies by category. A children&rsquo;s vitamin
        brand needs to consider the parent&rsquo;s eye level, not the
        child&rsquo;s. A dermocosmetic brand targeting women aged 25 to 40
        should optimize for a slightly different sightline than an oral care
        brand targeting families.
      </p>

      <h3>The Hot Zones</h3>
      <p>
        Every pharmacy shelf has hot zones and dead zones. Understanding these
        is essential for negotiating placement within a planogram.
      </p>
      <ul>
        <li>
          <strong>Prime zone (eye level, 120&ndash;160 cm):</strong> Highest
          conversion. Reserve this for your hero SKUs &mdash; the products
          that drive the most revenue and have the highest margin for the
          retailer. This is non-negotiable.
        </li>
        <li>
          <strong>Touch zone (waist level, 80&ndash;120 cm):</strong> Second
          best position. Shoppers can see and reach these products easily.
          Good for your second-tier SKUs or complementary products.
        </li>
        <li>
          <strong>Stretch zone (above eye level, 160&ndash;200 cm):</strong>{" "}
          Lower conversion. Products here are visible but harder to reach.
          Use this for larger pack sizes or products with strong brand
          recognition that shoppers will actively search for.
        </li>
        <li>
          <strong>Stoop zone (below 80 cm):</strong> The worst position on
          the shelf. Products here are virtually invisible to standing
          shoppers. Unfortunately, this is where many brands end up when they
          do not negotiate effectively. I always tell my teams: if your hero
          SKU is in the stoop zone, you have a merchandising emergency.
        </li>
      </ul>

      <h3>Category Adjacency</h3>
      <p>
        Where your category sits relative to other categories matters
        enormously. Smart adjacency drives cross-selling and increases basket
        size. In pharmacy retail, effective adjacencies include:
      </p>
      <ul>
        <li>
          Sunscreen placed adjacent to after-sun care and moisturizers
        </li>
        <li>
          Oral care (toothpaste, mouthwash, whitening) placed as a
          consolidated block rather than scattered across aisles
        </li>
        <li>
          Baby skincare adjacent to baby health and nutrition products
        </li>
        <li>
          Pain relief adjacent to cold and flu products during winter seasons
        </li>
        <li>
          Dermocosmetic cleansers adjacent to treatment products (acne,
          anti-aging, pigmentation)
        </li>
      </ul>
      <p>
        In KSA pharmacy chains, category adjacency is typically controlled by
        the chain&rsquo;s category management team. As a brand, your ability
        to influence this depends on the strength of your category story and
        your willingness to share data that supports the adjacency you are
        proposing.
      </p>

      <h3>Facing and Share of Shelf</h3>
      <p>
        A facing is a single front-facing unit of your product on the shelf.
        The more facings you have, the more visible your brand is, and the
        more likely a shopper is to pick it up. Research consistently shows
        that there is a nearly linear relationship between share of shelf
        (the percentage of facings in a category that belong to your brand)
        and share of sales &mdash; up to a point of diminishing returns.
      </p>
      <p>
        The practical implication is clear: you should be tracking your share
        of shelf in key accounts as rigorously as you track your market share.
        If your share of shelf is significantly below your share of market, you
        are leaving sell-out on the table. If it is significantly above, you
        may be over-investing in shelf space relative to consumer pull.
      </p>

      <hr />

      <h2>Planogram Strategy for Consumer Healthcare</h2>
      <p>
        A planogram is the visual schematic that dictates exactly where every
        product sits on a pharmacy shelf. In major KSA pharmacy chains like
        Nahdi and Al-Dawaa, planograms are centrally managed and tightly
        controlled. The category management team at the chain decides the
        planogram, and individual store managers have limited authority to
        deviate from it.
      </p>
      <p>
        This means that planogram negotiation is one of the highest-stakes
        activities in consumer healthcare merchandising. Getting your product
        into a favorable planogram position &mdash; and keeping it there
        &mdash; directly drives sell-out. Here is how I approach it.
      </p>

      <h3>Building the Category Story</h3>
      <p>
        The single most effective way to influence a planogram is to present a
        compelling category story backed by data. Pharmacy chain buyers and
        category managers are not persuaded by brand-level arguments like
        &ldquo;our product is innovative&rdquo; or &ldquo;we have strong
        brand awareness.&rdquo; They care about category growth, basket size,
        and margin per linear centimeter of shelf space.
      </p>
      <p>
        A strong category story answers three questions:
      </p>
      <ul>
        <li>
          <strong>How is this category growing, and what is driving that
          growth?</strong> Use IQVIA, Nielsen, or your own sell-out data to
          show the category trend and the segments within it that are
          accelerating.
        </li>
        <li>
          <strong>How should the shelf reflect the way consumers shop this
          category?</strong> If consumers shop by skin type rather than by
          brand, the shelf should be organized by skin type. If they shop by
          benefit (whitening, sensitivity, cavity protection in oral care),
          the shelf should reflect those benefit segments.
        </li>
        <li>
          <strong>What is the optimal assortment and placement to maximize
          category revenue per shelf meter?</strong> This is where you bring
          hard numbers &mdash; showing the retailer that your proposed
          planogram drives more revenue per linear meter than the current one.
        </li>
      </ul>

      <h3>OTC and Self-Care Products</h3>
      <p>
        For OTC medications &mdash; pain relief, cold and flu, digestive
        health, allergy &mdash; the planogram strategy differs from beauty
        and personal care. OTC shoppers are often in a distress purchase
        mindset. They need the product now, and they need to find it quickly.
      </p>
      <p>
        The optimal OTC planogram organizes by condition or need state, not
        by brand. A shopper looking for a headache remedy should find all
        headache options in one clear section, with the most common dosage
        forms at eye level. Within that section, your brand&rsquo;s goal is
        to have the most facings, the strongest shelf presence, and the most
        visible packaging.
      </p>

      <h3>Dermocosmetics</h3>
      <p>
        Dermocosmetics is one of the fastest-growing segments in GCC pharmacy
        retail, and the planogram strategy here is fundamentally different from
        OTC. Dermocosmetic shoppers are typically browsing, comparing, and
        evaluating. They spend more time at the shelf. They read packaging.
        They compare ingredients.
      </p>
      <p>
        The optimal dermocosmetic planogram creates a branded destination
        within the pharmacy. This is why you see brands like La Roche-Posay,
        Bioderma, Avene, and CeraVe investing heavily in branded bays and
        gondola sections within Nahdi and Al-Dawaa. The goal is to create a
        mini-boutique experience within the pharmacy &mdash; a branded space
        where the entire range is visible, organized by routine (cleanse,
        treat, moisturize, protect), and supported by educational materials.
      </p>

      <h3>Oral Care</h3>
      <p>
        Oral care merchandising has its own dynamics. The category is typically
        organized into toothpaste, toothbrushes, mouthwash, and specialty
        products (whitening strips, interdental brushes, sensitive care). The
        challenge in oral care is that it is a high-frequency, low-engagement
        purchase &mdash; shoppers tend to grab what they know quickly.
      </p>
      <p>
        The winning planogram strategy for oral care focuses on brand blocking
        &mdash; grouping all your brand&rsquo;s variants together so they
        create a visual block on the shelf that catches the eye. In my
        experience, a well-executed brand block for an oral care brand can
        increase sell-out by 15 to 25 percent versus a scattered placement
        where your variants are interspersed with competitors.
      </p>

      <hr />

      {/* Shelf Position Sales Impact Chart */}
      <div className="not-prose my-8 rounded-2xl border border-white/10 bg-navy-900/60 p-6">
        <p className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1">Shelf Science</p>
        <h3 className="text-white font-bold text-lg mb-5">Sales Impact by Pharmacy Shelf Position</h3>
        <div className="space-y-3">
          {[
            { position: "Eye Level (Shelf 2–3)", index: 100, label: "Baseline — best performance" },
            { position: "Reach Level (Shelf 4)", index: 85, label: "Strong — still good visibility" },
            { position: "Waist Level (Shelf 1)", index: 72, label: "Acceptable — needs POSM support" },
            { position: "Floor Level (Bottom)", index: 55, label: "Weak — significant lost sales" },
            { position: "Counter Display", index: 130, label: "Premium — highest impulse purchase rate" },
            { position: "End Cap / Gondola", index: 145, label: "Best-in-store — negotiated placement" },
          ].map((item) => (
            <div key={item.position} className="flex items-center gap-3">
              <div className="w-44 shrink-0">
                <span className="text-sm text-navy-300 block">{item.position}</span>
                <span className="text-xs text-navy-500">{item.label}</span>
              </div>
              <div className="flex-1 bg-white/5 rounded-full h-2.5 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${Math.min(item.index / 1.5, 100)}%`, backgroundColor: item.index >= 100 ? "#00d4b8" : item.index >= 70 ? "#f59e0b" : "#ef4444" }} />
              </div>
              <span className="text-sm font-semibold text-white w-16 text-right">Index {item.index}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-navy-500 mt-4">Sales index relative to eye-level baseline (100) — based on KSA pharmacy audit data across OTC categories</p>
      </div>

      <h2>In-Store Visibility Tools That Actually Work</h2>
      <p>
        Point-of-sale materials &mdash; POSM &mdash; are the workhorses of
        pharmacy merchandising. But not all POSM is created equal. I have seen
        millions of riyals wasted on materials that pharmacies refuse to
        display, that shoppers ignore, or that fall apart within a week. Here
        is what actually works in the KSA pharmacy environment.
      </p>

      <h3>Gondola Headers and End Caps</h3>
      <p>
        Gondola headers sit at the top of the shelf unit and are visible from
        across the pharmacy. End caps &mdash; the displays at the end of an
        aisle &mdash; are among the highest-traffic, highest-conversion
        positions in any retail environment. In pharmacy, end caps are
        typically reserved for promotional displays, new product launches, or
        seasonal campaigns.
      </p>
      <p>
        Securing an end-cap position in a major KSA pharmacy chain like Nahdi
        requires advance planning, trade investment, and a compelling
        promotional mechanic. The ROI is significant &mdash; I have seen end-cap
        displays drive 3 to 5 times the sell-out rate of standard shelf
        placement during the campaign period. But the investment is also
        significant, so you need to be strategic about which SKUs and which
        campaigns get end-cap treatment.
      </p>

      <h3>Shelf Strips and Shelf Talkers</h3>
      <p>
        Shelf strips run along the edge of the shelf and carry your branding
        and key messages. Shelf talkers are the perpendicular tags that stick
        out from the shelf edge and catch the shopper&rsquo;s eye as they walk
        down the aisle.
      </p>
      <p>
        The three-second rule applies here: if the message on your shelf
        talker cannot be understood in three seconds, it will not work. I have
        reviewed hundreds of shelf talker designs over the years, and the most
        common mistake is trying to communicate too much. The best shelf
        talkers communicate a single message &mdash; a price point, a key
        benefit, a promotional offer &mdash; in large, readable text with
        strong visual contrast.
      </p>
      <p>
        In KSA, all POSM must be bilingual, with Arabic as the primary
        language. This is not optional &mdash; it is a regulatory and
        commercial requirement. Arabic-first design is essential.
      </p>

      <h3>Wobblers</h3>
      <p>
        Wobblers are the small, flexible tags that are attached to the shelf
        edge and wobble gently with air movement, catching the shopper&rsquo;s
        peripheral vision. They are inexpensive, easy to deploy, and
        surprisingly effective for drawing attention to a specific SKU or
        promotion.
      </p>
      <p>
        I recommend wobblers for two specific use cases: new product launches
        (drawing attention to a product the shopper has not seen before) and
        promotional pricing (highlighting a limited-time offer). Keep the
        design simple &mdash; product image, one benefit line, and the price
        or promotion mechanic.
      </p>

      <h3>Counter Displays</h3>
      <p>
        Counter displays sit on the pharmacy counter, right next to the cash
        register. This is prime real estate for impulse purchases &mdash; lip
        care, hand sanitizers, travel-size products, and seasonal items. In
        KSA pharmacies, the counter area is also where the pharmacist dispenses
        prescription products, so it has built-in foot traffic.
      </p>
      <p>
        The challenge with counter displays is space. Pharmacy counters are
        small, and chains are very selective about what they allow. To secure
        counter placement, you need a product with high turnover, strong
        margin for the retailer, and a compact, well-designed display unit
        that the pharmacy staff will actually maintain.
      </p>

      <h3>Floor-Standing Displays and Dump Bins</h3>
      <p>
        For major promotional campaigns or new product launches, floor-standing
        displays and dump bins create a physical presence that cannot be
        ignored. These are especially effective during Ramadan promotions,
        back-to-school campaigns, and summer sun-care pushes in the GCC.
      </p>
      <p>
        The key to effective floor-standing displays is durability and
        restockability. I have seen beautiful display units that were empty
        within two days because the pharmacy staff did not know how to
        restock them, or the design made restocking difficult. Always design
        your floor displays with the store staff in mind &mdash; they are the
        ones who will maintain it.
      </p>

      <hr />

      <h2>Merchandising in KSA Pharmacy Chains</h2>
      <p>
        The Saudi pharmacy retail landscape is dominated by organized chains,
        with Nahdi and Al-Dawaa controlling the majority of pharmacy retail
        revenue. Understanding the specific merchandising requirements and
        standards of these chains is essential for any consumer healthcare
        brand operating in KSA.
      </p>

      <h3>Nahdi Merchandising Standards</h3>
      <p>
        Nahdi is the largest pharmacy chain in Saudi Arabia and one of the
        most sophisticated retail operations in the Middle East. Their
        merchandising standards are rigorous, and they take planogram
        compliance extremely seriously.
      </p>
      <p>
        Key aspects of merchandising for Nahdi include:
      </p>
      <ul>
        <li>
          <strong>Centralized planogram management:</strong> Planograms are
          designed and enforced by Nahdi&rsquo;s category management team.
          Brand teams influence planograms through the buyer and category
          manager, not through individual store managers.
        </li>
        <li>
          <strong>Branded bay opportunities:</strong> Nahdi offers branded
          bay spaces for dermocosmetic and premium consumer healthcare
          brands. These are dedicated shelf sections that carry your branding,
          organized by your recommended product routine. Securing a branded
          bay is a significant investment but delivers exceptional visibility
          and sell-out performance.
        </li>
        <li>
          <strong>POSM approval process:</strong> All POSM must be submitted
          for approval before deployment. Nahdi has specific guidelines on
          materials, dimensions, messaging, and placement. Non-compliant
          materials will be removed by store staff.
        </li>
        <li>
          <strong>Digital integration:</strong> Nahdi has been a leader in
          integrating physical and digital merchandising. Their Nuhdeek loyalty
          app features product recommendations, promotions, and digital
          shelf content that complements the in-store experience. Brands that
          invest in both physical and digital merchandising within the Nahdi
          ecosystem see significantly stronger sell-out results.
        </li>
        <li>
          <strong>Seasonal and promotional windows:</strong> Nahdi has
          defined promotional windows throughout the year &mdash; Ramadan,
          summer, back-to-school, and national holidays. Planning your
          merchandising calendar around these windows is essential.
        </li>
      </ul>

      <h3>Al-Dawaa Merchandising Requirements</h3>
      <p>
        Al-Dawaa is the second-largest pharmacy chain in KSA and has a
        significant presence in cities and towns across the Kingdom. Their
        merchandising approach differs from Nahdi in several important ways.
      </p>
      <ul>
        <li>
          <strong>Store format variation:</strong> Al-Dawaa has more variation
          in store formats compared to Nahdi, which means planogram execution
          can vary more between locations. Brand teams need to account for
          different fixture configurations and shelf dimensions.
        </li>
        <li>
          <strong>Pharmacist-driven recommendations:</strong> Al-Dawaa places
          significant emphasis on pharmacist training and recommendations.
          Merchandising strategies that support the pharmacist &mdash; such as
          behind-the-counter displays, pharmacist reference guides, and
          sampling programs &mdash; tend to perform well.
        </li>
        <li>
          <strong>Trade investment structure:</strong> The commercial model
          for securing premium merchandising space differs from Nahdi. Brand
          teams should work closely with their Al-Dawaa account manager to
          understand the investment requirements for end caps, branded
          sections, and promotional windows.
        </li>
        <li>
          <strong>Compliance monitoring:</strong> Like Nahdi, Al-Dawaa
          monitors planogram compliance, but the level of enforcement can
          vary by region. This makes field force execution and regular store
          visits even more important for brands operating in Al-Dawaa.
        </li>
      </ul>

      <h3>Independent Pharmacies</h3>
      <p>
        While organized chains dominate KSA pharmacy retail, independent
        pharmacies still represent a meaningful portion of the market,
        particularly in smaller cities and towns. Merchandising in
        independents is fundamentally different &mdash; there is no centralized
        planogram, and the pharmacy owner or manager makes all merchandising
        decisions.
      </p>
      <p>
        The key to winning in independent pharmacies is the relationship
        between your field force and the pharmacy staff. Your medical
        representatives and merchandisers need to build genuine relationships,
        understand the pharmacy&rsquo;s specific needs, and provide hands-on
        support with shelf organization, stock rotation, and POSM installation.
        In my experience, brands that invest in strong field force execution
        in independents can achieve disproportionate share of shelf and
        pharmacist recommendation rates.
      </p>

      <hr />

      <h2>Digital Merchandising and the E-Pharmacy Shelf</h2>
      <p>
        The pharmacy shelf is no longer just a physical thing. With the rapid
        growth of e-pharmacy platforms in KSA &mdash; including Nahdi Online,
        NahdiCare, and various marketplace platforms &mdash; digital
        merchandising has become an essential extension of your in-store
        strategy. The principles are related but the execution is entirely
        different.
      </p>

      <h3>Product Page Optimization</h3>
      <p>
        Your product page on an e-pharmacy platform is your digital shelf
        space. Every element of that page influences whether a shopper adds
        your product to their cart or scrolls past it. The key elements to
        optimize include:
      </p>
      <ul>
        <li>
          <strong>Product title:</strong> Include the brand name, product
          variant, key benefit, and pack size. Do not use vague or overly
          creative titles &mdash; shoppers on e-pharmacy platforms are
          searching by keyword, and your title needs to match their search
          intent.
        </li>
        <li>
          <strong>Product images:</strong> Use high-resolution images that
          show the product from multiple angles, include the packaging, and
          ideally show the product in context (a hand holding the sunscreen
          tube, the toothpaste on a brush). The primary image should be on a
          clean white background for consistency with platform standards.
        </li>
        <li>
          <strong>Product description:</strong> Lead with benefits, not
          features. The first two lines are critical because they appear
          before the shopper clicks &ldquo;read more.&rdquo; Include key
          ingredients, usage instructions, and the specific consumer need
          the product addresses.
        </li>
        <li>
          <strong>Reviews and ratings:</strong> Social proof is the
          digital equivalent of pharmacist recommendation. Actively manage
          your review strategy &mdash; encourage satisfied customers to
          leave reviews and respond professionally to negative feedback.
        </li>
      </ul>

      <h3>A+ Content and Enhanced Product Pages</h3>
      <p>
        On platforms that support it, A+ content &mdash; enhanced product
        descriptions with rich media, comparison charts, and brand
        storytelling &mdash; can significantly increase conversion rates.
        Think of A+ content as your digital branded bay. It is the space
        where you can tell a richer product story than a standard product
        listing allows.
      </p>
      <p>
        For consumer healthcare brands, effective A+ content typically
        includes before-and-after scenarios, ingredient breakdowns with
        plain-language explanations, usage routines showing how multiple
        products work together, and clinical or efficacy data presented
        in consumer-friendly formats.
      </p>

      <h3>Digital Shelf Monitoring</h3>
      <p>
        Just as you audit physical shelf placement, you need to monitor your
        digital shelf performance. Key metrics to track include:
      </p>
      <ul>
        <li>
          <strong>Search ranking:</strong> Where does your product appear
          when a shopper searches for your category? Are you on page one?
        </li>
        <li>
          <strong>Share of search:</strong> What percentage of search results
          in your category feature your brand versus competitors?
        </li>
        <li>
          <strong>Content compliance:</strong> Are your product images,
          descriptions, and pricing accurate and up to date across all
          platforms?
        </li>
        <li>
          <strong>Stock availability:</strong> An out-of-stock product on an
          e-pharmacy platform does not just lose one sale &mdash; it loses
          search ranking momentum and pushes shoppers to competitors.
        </li>
        <li>
          <strong>Rating and review velocity:</strong> How quickly are new
          reviews coming in, and what is the trend in your average rating?
        </li>
      </ul>

      <hr />

      <h2>Merchandising Audits and Compliance</h2>
      <p>
        A merchandising strategy is only as good as its execution. And in my
        experience, the gap between planned merchandising and actual in-store
        execution is the single biggest source of lost sell-out for consumer
        healthcare brands. The solution is rigorous, systematic merchandising
        audits.
      </p>

      <h3>What to Audit</h3>
      <p>
        A comprehensive merchandising audit should cover every element that
        affects how your products appear and perform at the shelf:
      </p>
      <ul>
        <li>
          <strong>Shelf placement compliance:</strong> Is your product in the
          planogram position that was agreed with the chain? Has it been
          moved, reduced, or replaced by a competitor?
        </li>
        <li>
          <strong>Share of shelf:</strong> Count your facings versus
          competitors. Calculate your share of shelf and compare it to your
          target and your share of market.
        </li>
        <li>
          <strong>Stock availability:</strong> Are all SKUs in stock? Are
          there any out-of-stock gaps? Out-of-stock is the most expensive
          problem in merchandising because it directly converts to lost
          sales.
        </li>
        <li>
          <strong>POSM presence and condition:</strong> Are your shelf
          talkers, wobblers, and display units in place? Are they clean,
          intact, and current? Outdated or damaged POSM does more harm than
          no POSM at all.
        </li>
        <li>
          <strong>Price compliance:</strong> Is the displayed price correct?
          In KSA, pricing errors can create consumer complaints and
          regulatory issues.
        </li>
        <li>
          <strong>Competitor activity:</strong> What are your competitors
          doing at the shelf? Have they introduced new POSM, changed their
          shelf position, or launched a promotional display?
        </li>
      </ul>

      <h3>Photo Audits and Technology</h3>
      <p>
        The days of clipboard-based merchandising audits are numbered.
        Modern merchandising audit technology uses smartphone-based photo
        capture with image recognition to automate shelf analysis. Your field
        force takes a photo of the shelf, and the system automatically
        identifies products, counts facings, detects out-of-stocks, and
        measures share of shelf.
      </p>
      <p>
        Tools like Trax, Planorama, and various regional solutions have
        transformed how consumer healthcare brands monitor merchandising
        execution. The investment in these tools pays for itself quickly
        through improved compliance rates, faster identification of problems,
        and better data for planogram negotiations.
      </p>
      <p>
        I strongly recommend that every consumer healthcare brand operating
        in KSA pharmacies implements a photo audit system for their top
        accounts. The data it generates becomes the foundation for better
        trade negotiations, more effective field force management, and
        ultimately, stronger sell-out performance.
      </p>

      <h3>Field Force Execution</h3>
      <p>
        Your field force &mdash; whether they are your own employees or a
        third-party merchandising team &mdash; are the human beings who
        execute your merchandising strategy in every store, every day. The
        quality of your field force execution is the single biggest
        determinant of whether your carefully designed planograms, POSM, and
        display strategies actually translate into sell-out.
      </p>
      <p>
        Key elements of effective field force execution include:
      </p>
      <ul>
        <li>
          <strong>Clear merchandising standards:</strong> Your field team
          needs a visual guide showing exactly what &ldquo;good&rdquo; looks
          like for every store format and every category.
        </li>
        <li>
          <strong>Regular store visit schedules:</strong> Top accounts should
          be visited weekly. Secondary accounts fortnightly. The visit
          schedule should be non-negotiable.
        </li>
        <li>
          <strong>Real-time reporting:</strong> Field force should report
          audit findings, out-of-stocks, and competitive activity in real
          time, not in a weekly Excel report that arrives three days late.
        </li>
        <li>
          <strong>Training and development:</strong> Merchandisers need to
          understand not just the mechanics of shelf arrangement but the
          commercial rationale behind it. They should be able to explain to
          a store manager why a particular arrangement drives more category
          revenue.
        </li>
      </ul>

      <hr />

      <h2>Category Management and the Retailer Relationship</h2>
      <p>
        The most effective approach to pharmacy merchandising is not
        transactional &mdash; it is strategic. And the framework for that
        strategic approach is category management. When you move from
        &ldquo;selling your brand into a pharmacy chain&rdquo; to
        &ldquo;partnering with the chain to grow the category,&rdquo; the
        entire dynamic shifts in your favor.
      </p>

      <h3>What Category Management Means in Pharmacy</h3>
      <p>
        Category management is the process of managing product categories as
        strategic business units within the retail environment. Instead of
        each brand fighting for its own shelf space, category management
        takes a holistic view: what is the optimal assortment, pricing,
        placement, and promotion strategy that maximizes category revenue
        and profitability for the retailer?
      </p>
      <p>
        The brand that positions itself as the category captain &mdash; the
        trusted partner who brings data, insights, and recommendations to
        the retailer &mdash; gains disproportionate influence over planograms,
        assortment decisions, and promotional calendars. In KSA pharmacy
        retail, becoming the category captain for your segment is one of the
        most valuable strategic positions a consumer healthcare brand can
        achieve.
      </p>

      <h3>Building the Retailer Relationship</h3>
      <p>
        The relationship between a consumer healthcare brand and a pharmacy
        chain is built on trust, data, and mutual value creation. Here are
        the principles I have followed throughout my career:
      </p>
      <ul>
        <li>
          <strong>Lead with data, not with asks.</strong> Before you ask the
          buyer for better shelf space, bring them insights they do not have.
          Show them category trends, shopper behavior data, and competitive
          benchmarks. Be the brand that makes the buyer smarter.
        </li>
        <li>
          <strong>Think about their P&amp;L, not just yours.</strong> Every
          proposal you make should clearly articulate the benefit to the
          retailer &mdash; in terms of category revenue, margin, or traffic.
          The buyer&rsquo;s job is to maximize their category&rsquo;s
          performance, not to help your brand grow.
        </li>
        <li>
          <strong>Deliver on your commitments.</strong> If you promise a
          promotional campaign, deliver it on time and in full. If you commit
          to a sell-out target, report on it honestly. Reliability is the
          foundation of the retailer relationship.
        </li>
        <li>
          <strong>Invest in joint business planning.</strong> The best
          brand-retailer relationships are anchored by annual joint business
          plans that align both parties on objectives, investments, and
          metrics. This creates a framework for ongoing collaboration rather
          than transactional negotiation.
        </li>
      </ul>

      <h3>The Category Review Process</h3>
      <p>
        Most major pharmacy chains in KSA conduct formal category reviews on a
        quarterly or semi-annual basis. These reviews are your opportunity to
        present data, propose planogram changes, and negotiate merchandising
        investments. Preparing for a category review is not a one-week project
        &mdash; it is an ongoing process of data collection, analysis, and
        story building.
      </p>
      <p>
        The brands that win category reviews are the ones that arrive with a
        clear, data-backed narrative about where the category is headed, what
        the retailer should do about it, and how the brand will invest to
        support the recommended changes. Walk in with a PowerPoint full of
        brand claims and you will lose. Walk in with a category growth story
        supported by sell-out data and shopper insights, and you will
        influence the planogram.
      </p>

      <hr />

      <h2>Putting It All Together</h2>
      <p>
        Merchandising for consumer healthcare is not one discipline &mdash;
        it is the intersection of retail science, trade negotiation, creative
        design, digital optimization, and relentless field execution. The
        brands that treat it as a strategic function and invest in the people,
        tools, and processes to do it well are the ones that consistently
        win at the pharmacy shelf.
      </p>
      <p>
        If I could leave you with three principles from two decades of doing
        this work, they would be:
      </p>
      <ul>
        <li>
          <strong>Obsess over the basics.</strong> Eye-level placement, stock
          availability, clean POSM, and accurate pricing. Get these right
          in every store, every day, and you will outperform most of your
          competitors.
        </li>
        <li>
          <strong>Win the planogram.</strong> The planogram is the single most
          important document in pharmacy merchandising. Invest in the
          category management capability to influence it.
        </li>
        <li>
          <strong>Measure and audit relentlessly.</strong> You cannot improve
          what you do not measure. Implement photo audits, track share of
          shelf, and hold your field force accountable for execution quality.
        </li>
      </ul>
      <p>
        The{" "}
        <Link href="/community">PharmaGrowth community</Link> is where
        pharma and consumer healthcare professionals across the MENA region
        share merchandising strategies, planogram templates, and real-world
        results from their markets. If you are serious about building your
        merchandising capabilities, I invite you to join us. And for those
        who want hands-on guidance on their specific merchandising challenges,
        our{" "}
        <Link href="/coaching">coaching program</Link> provides personalized
        support from practitioners who have built brands in KSA pharmacies
        from the ground up.
      </p>

      <hr />

      <h2>Frequently Asked Questions</h2>

      <h3 className="faq-question">
        What is consumer healthcare merchandising?
      </h3>
      <p>
        Consumer healthcare merchandising is the discipline of optimizing how
        OTC medications, dermocosmetics, oral care products, vitamins, and
        supplements are presented, positioned, and promoted within the
        pharmacy retail environment &mdash; both physical and digital. It
        encompasses shelf placement strategy, planogram management,
        point-of-sale materials, category adjacency, visual merchandising,
        stock management, and digital shelf optimization on e-pharmacy
        platforms. The goal is to maximize product visibility, shopper
        conversion, and sell-out performance at the point of purchase.
      </p>

      <h3 className="faq-question">
        How do I get better shelf placement in Nahdi or Al-Dawaa?
      </h3>
      <p>
        Better shelf placement in major KSA pharmacy chains is achieved
        through data-driven category management, not through ad-hoc requests
        to store managers. Build a compelling category story backed by
        sell-out data that shows how your proposed planogram drives more
        revenue per shelf meter for the retailer. Present this during formal
        category reviews and joint business planning sessions. Invest in the
        trade terms that support premium placement, and ensure your field
        force monitors compliance rigorously. The brands that position
        themselves as category growth partners &mdash; not just product
        suppliers &mdash; get the best shelf positions.
      </p>

      <h3 className="faq-question">
        What POSM materials are most effective in KSA pharmacies?
      </h3>
      <p>
        The most effective POSM in KSA pharmacies includes shelf talkers
        (perpendicular to the shelf edge for maximum aisle visibility),
        wobblers for new launches and promotions, counter displays for
        impulse-purchase categories, and branded bay installations for
        dermocosmetic brands. All materials must be bilingual with Arabic as
        the primary language. The three-second rule applies universally: if
        the message cannot be understood in three seconds, it will not work.
        Floor-standing displays and end caps deliver the highest ROI but
        require significant trade investment and advance planning.
      </p>

      <h3 className="faq-question">
        How does digital shelf optimization differ from physical merchandising?
      </h3>
      <p>
        Digital shelf optimization on e-pharmacy platforms follows different
        mechanics than physical merchandising, even though the goal is the
        same: maximizing visibility and conversion. On the digital shelf, your
        product title and images replace your physical packaging as the
        primary attention driver. Search ranking replaces shelf position.
        Reviews and ratings replace pharmacist recommendation. Content quality
        (A+ content, product descriptions) replaces POSM. Stock availability
        affects not just immediate sales but long-term search ranking. Brands
        need a dedicated digital shelf strategy that runs parallel to their
        physical merchandising plan.
      </p>

      <h3 className="faq-question">
        How often should I audit merchandising execution in pharmacy stores?
      </h3>
      <p>
        Top-tier accounts &mdash; your highest-volume pharmacy locations in
        chains like Nahdi and Al-Dawaa &mdash; should be audited weekly. These
        are the stores that drive the majority of your sell-out and where
        execution gaps are most costly. Secondary accounts should be audited
        at least fortnightly. Every audit should cover planogram compliance,
        share of shelf, stock availability, POSM condition, price accuracy,
        and competitor activity. Implementing a photo-based audit system with
        image recognition technology dramatically improves audit quality,
        speed, and data reliability. The data from these audits should feed
        directly into your trade marketing decision-making and your
        conversations with retail buyers.
      </p>

      <hr />

      <p>
        <em>
          Sherif Al-Kady is a pharmaceutical marketing strategist with 20+
          years of experience building consumer healthcare and dermocosmetic
          brands across the GCC and MENA region. He is the founder of
          PharmaGrowth, a platform dedicated to helping pharma marketers grow
          their brands and careers through commercial excellence.
        </em>
      </p>
    </ArticleLayout>
  );
}
