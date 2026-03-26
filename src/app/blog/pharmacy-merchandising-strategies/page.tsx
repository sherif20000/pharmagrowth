import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title:
    "Pharmacy Merchandising Strategies That Drive Sell-Out: A Field Guide for Pharma Brands",
  description:
    "A comprehensive field guide to pharmacy merchandising for pharma brands in KSA and GCC. Covers planogram strategy, shelf placement hierarchy, POSM, digital shelf optimization, and a practical audit checklist from 20+ years in pharma.",
  openGraph: {
    title:
      "Pharmacy Merchandising Strategies That Drive Sell-Out: A Field Guide for Pharma Brands",
    description:
      "A comprehensive field guide to pharmacy merchandising for pharma brands. Covers planogram strategy, shelf placement, POSM, digital shelf, and a practical audit checklist.",
    type: "article",
    authors: ["Sherif Al-Kady"],
  },
  keywords: [
    "pharmacy merchandising",
    "pharma shelf strategy",
    "planogram pharmaceutical",
    "pharmacy POSM",
    "merchandising KSA pharmacy",
    "pharmacy sell-out strategy",
    "shelf placement hierarchy",
    "gondola end-cap strategy",
    "e-pharmacy merchandising",
    "pharmacy visual merchandising",
  ],
};

export default function PharmacyMerchandisingStrategiesArticle() {
  return (
    <ArticleLayout
      title="Pharmacy Merchandising Strategies That Drive Sell-Out: A Field Guide for Pharma Brands"
      description="A comprehensive field guide to pharmacy merchandising for pharma brands in KSA and GCC. Covers planogram strategy, shelf placement hierarchy, POSM, digital shelf optimization, and a practical audit checklist from 20+ years in pharma."
      author="Sherif Al-Kady, MBA"
      date="March 23, 2026"
      readTime="14 min read"
      category="Merchandising"
      slug="pharmacy-merchandising-strategies"
      publishedDate="2026-03-23"
      faqItems={[
        {
          question: "What is a pharmacy merchandising strategy?",
          answer: "A pharmacy merchandising strategy is a systematic plan for maximizing product visibility, shelf presence, and sell-out performance in pharmacy retail environments. It covers planogram design, shelf placement negotiation, point-of-sale material deployment, promotional display management, and digital shelf optimization for e-pharmacy platforms.",
        },
        {
          question: "What is the shelf placement hierarchy in a pharmacy?",
          answer: "Pharmacy shelf placement follows a vertical hierarchy where eye-level shelves (levels 2-3, approximately 90-160cm from the floor) are the most valuable. Eye-level placement generates the highest conversion rates. Brands typically negotiate for these premium positions through category management proposals, JBPs, or paid shelf fees with major pharmacy chains.",
        },
        {
          question: "How do you audit pharmacy merchandising performance?",
          answer: "A pharmacy merchandising audit checks five key areas: planogram compliance (is the product in the agreed position?), number of facings vs target, POSM presence and condition, price tag accuracy, and stock availability. Best practice is to conduct monthly audits through field teams and track compliance rates by store and region.",
        },
        {
          question: "What POSM materials work best in KSA pharmacies?",
          answer: "In KSA pharmacies, the most effective POSM includes shelf talkers with Arabic and English text, counter display units for high-velocity OTC products, floor-standing units for campaign periods, and digital screens in premium pharmacy chains. Materials must comply with SFDA guidelines and not include prohibited claims.",
        },
      ]}
    >
      <p>
        There is a hard truth that most pharma brand managers eventually learn:
        your product can have the best clinical data, the strongest brand equity,
        and the most compelling advertising &mdash; and still lose at the shelf.
        The last three feet of the purchase journey, the space between the
        shopper&rsquo;s hand and the pharmacy shelf, is where brands are made or
        broken. And yet, merchandising remains one of the most underinvested and
        poorly understood levers in pharmaceutical commercial strategy.
      </p>
      <p>
        Over more than 20 years of building consumer healthcare and
        dermocosmetic brands across the GCC, I have seen merchandising done
        brilliantly and I have seen it done catastrophically. I have watched a
        mid-tier sunscreen brand outsell the category leader simply because it
        owned the right 60 centimeters of shelf space at eye level in Nahdi. I
        have also watched premium brands with massive advertising budgets collect
        dust on bottom shelves because nobody on the team understood planogram
        negotiation.
      </p>
      <p>
        This guide covers everything a pharma brand team needs to know about
        pharmacy merchandising in 2026 &mdash; from the fundamentals of shelf
        placement hierarchy to the emerging world of digital shelf optimization
        on e-pharmacy platforms. Whether you are a brand manager, a trade
        marketing lead, or a commercial director, you will walk away with
        frameworks you can deploy this quarter.
      </p>

      <hr />

      <h2>What Merchandising Really Means in the Pharmacy Context</h2>
      <p>
        Let me start by clearing up a misconception. When pharma people hear
        &ldquo;merchandising,&rdquo; they often think of promotional displays
        and shelf talkers. That is part of it, but pharmacy merchandising is far
        broader than that.
      </p>
      <p>
        In the pharmacy context, merchandising is the entire discipline of
        optimizing how your products are presented, positioned, and promoted
        within the retail pharmacy environment &mdash; both physical and digital
        &mdash; to maximize sell-out. It encompasses shelf placement, planogram
        strategy, point-of-sale materials, category adjacency, visual
        presentation, stock availability, pricing display, and increasingly,
        digital shelf optimization on e-pharmacy platforms.
      </p>
      <p>
        The reason merchandising matters so disproportionately in pharmacy is
        that the purchase decision in a pharmacy is fundamentally different from
        a grocery store or a department store. In pharmacy retail, you have three
        types of shoppers:
      </p>
      <ul>
        <li>
          <strong>Prescription-directed shoppers:</strong> They arrive with a
          specific product in mind because a physician prescribed it. Even here,
          merchandising matters &mdash; the pharmacist may recommend an
          alternative if the prescribed product is not visible or available, and
          the shopper may add complementary products (a moisturizer alongside a
          prescribed acne treatment, for example).
        </li>
        <li>
          <strong>Category-directed shoppers:</strong> They know they need a
          product from a category (a sunscreen, a pain reliever, a vitamin
          supplement) but have not decided on a specific brand. This is where
          merchandising has the single greatest impact on sell-out. The brand
          that is most visible, most accessible, and most persuasively presented
          wins.
        </li>
        <li>
          <strong>Impulse shoppers:</strong> They did not plan to buy the product
          but are influenced by in-store visibility, promotions, or pharmacist
          recommendations. Checkout-adjacent placement and end-cap displays
          drive this behavior.
        </li>
      </ul>
      <p>
        Effective pharmacy merchandising addresses all three shopper types
        simultaneously. It ensures your products are findable for the directed
        shopper, compelling for the category browser, and visible for the impulse
        buyer.
      </p>

      <hr />

      <h2>Shelf Placement Hierarchy: The Physics of Sell-Out</h2>
      <p>
        Not all shelf positions are created equal. Decades of retail research
        &mdash; and my own experience tracking sell-out data across hundreds of
        pharmacy doors in Saudi Arabia &mdash; confirm a clear hierarchy of shelf
        effectiveness. Understanding this hierarchy is foundational to any
        merchandising strategy.
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Shelf Zone</th>
              <th>Height Range</th>
              <th>Sell-Out Impact</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eye Level (&ldquo;Buy Level&rdquo;)</td>
              <td>120&ndash;160 cm from floor</td>
              <td>Highest &mdash; baseline index 100</td>
              <td>Hero SKUs, premium brands, new launches</td>
            </tr>
            <tr>
              <td>Hand Level (just below eye)</td>
              <td>90&ndash;120 cm from floor</td>
              <td>High &mdash; index 80&ndash;90</td>
              <td>Strong secondary SKUs, mid-price brands</td>
            </tr>
            <tr>
              <td>Top Shelf (above eye level)</td>
              <td>160&ndash;200 cm from floor</td>
              <td>Moderate &mdash; index 50&ndash;65</td>
              <td>Established brands with strong awareness, large packs</td>
            </tr>
            <tr>
              <td>Floor Level (bottom shelf)</td>
              <td>0&ndash;60 cm from floor</td>
              <td>Lowest &mdash; index 30&ndash;45</td>
              <td>Bulk packs, economy brands, low-margin SKUs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The data is unambiguous: eye-level placement can deliver 2&ndash;3 times
        the sell-out of floor-level placement for the same product. This is not
        opinion &mdash; it is observable in POS data across every major pharmacy
        chain in the Kingdom.
      </p>

      <h3>Practical Implications</h3>
      <ul>
        <li>
          <strong>Negotiate eye-level placement for hero SKUs.</strong> Your
          top-selling product, or the product you are investing the most in
          building, should occupy eye-level space. This is worth paying a premium
          for in trade terms.
        </li>
        <li>
          <strong>Vertical blocking beats horizontal spreading.</strong> Owning a
          vertical column of shelf space (from hand level to eye level) creates a
          stronger visual block than scattering products horizontally across a
          shelf. The human eye scans vertically within categories more often than
          it scans horizontally.
        </li>
        <li>
          <strong>Facings matter more than depth.</strong> Having three product
          facings (the number of units visible from the front) is more valuable
          than having ten units deep on a single facing. Visibility drives
          trial; depth prevents stock-outs but does not drive conversion.
        </li>
        <li>
          <strong>Floor level is not a death sentence &mdash; if you manage it.</strong>{" "}
          For brands with lower trade spend budgets, floor-level placement can
          still work if you compensate with strong POSM (shelf talkers, floor
          stickers) and higher-than-average product packaging visibility.
        </li>
      </ul>

      <hr />

      <h2>Planogram Strategy for Pharma Brands</h2>
      <p>
        A planogram is a visual diagram that dictates exactly where every product
        sits on a pharmacy shelf. In major chains like Nahdi, Al Dawaa, and
        Whites, planograms are centrally managed and updated quarterly. For
        pharma brands, influencing planogram decisions is one of the highest-ROI
        activities in trade marketing.
      </p>

      <h3>How Planogram Decisions Get Made</h3>
      <p>
        Understanding the decision-making process is essential. In most KSA
        pharmacy chains, planogram decisions are driven by a combination of:
      </p>
      <ol>
        <li>
          <strong>Category sales velocity:</strong> Products with higher
          sell-out per linear centimeter earn more shelf space. This is the
          single most important factor.
        </li>
        <li>
          <strong>Trade terms and listing fees:</strong> Brands that invest in
          trade terms (listing fees, shelf rental, promotional support) receive
          priority placement. This is the commercial reality of modern pharmacy
          retail.
        </li>
        <li>
          <strong>Category management agreements:</strong> Some retailers
          appoint category captains &mdash; leading brands that help manage
          planograms for an entire category. If your competitor is the category
          captain for skincare at a major chain, you are at a structural
          disadvantage.
        </li>
        <li>
          <strong>New product launch programs:</strong> Retailers allocate
          temporary shelf space for new launches, often as part of a launch
          package that includes introductory promotions and in-store visibility.
        </li>
        <li>
          <strong>Seasonal adjustments:</strong> Planograms shift for Ramadan,
          summer (sunscreen), Hajj season, and back-to-school periods.
          Anticipating these shifts and negotiating seasonal placement in
          advance is critical.
        </li>
      </ol>

      <h3>Winning the Planogram Negotiation</h3>
      <p>
        I have sat across the table from category managers at every major
        pharmacy chain in the Kingdom. Here is what works:
      </p>
      <ul>
        <li>
          <strong>Lead with data.</strong> Come armed with sell-out data, market
          share trends, and category growth rates. Category managers respond to
          evidence that your product drives category growth, not just brand
          growth.
        </li>
        <li>
          <strong>Present a category story, not a brand pitch.</strong> The most
          effective planogram proposals demonstrate how your placement
          recommendation benefits the entire category, not just your brand.
          Retailers think in categories; you should too.
        </li>
        <li>
          <strong>Propose, don&rsquo;t demand.</strong> Bring a visual planogram
          proposal that shows the retailer exactly what you are recommending. A
          well-designed planogram mockup communicates professionalism and makes
          the category manager&rsquo;s job easier.
        </li>
        <li>
          <strong>Bundle placement with promotional investment.</strong> Link
          your shelf placement request to a promotional calendar that drives
          foot traffic and category sell-out. Retailers want partners who
          invest in driving sales, not just occupying shelf space.
        </li>
      </ul>

      <hr />

      <h2>Gondola End-Cap Strategy</h2>
      <p>
        End-caps &mdash; the shelving units at the ends of gondola aisles &mdash;
        are the most valuable real estate in a pharmacy. They command
        disproportionate shopper attention because they are visible from the
        main traffic flow of the store, unlike products tucked within aisle
        shelves.
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Placement Type</th>
              <th>Avg. Sell-Out Lift</th>
              <th>Cost Level</th>
              <th>Ideal Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gondola end-cap (primary aisle)</td>
              <td>150&ndash;300% above base</td>
              <td>High</td>
              <td>2&ndash;4 weeks per cycle</td>
            </tr>
            <tr>
              <td>Secondary display (free-standing)</td>
              <td>80&ndash;150% above base</td>
              <td>Medium&ndash;High</td>
              <td>2&ndash;6 weeks</td>
            </tr>
            <tr>
              <td>Counter/checkout display</td>
              <td>50&ndash;120% above base</td>
              <td>Medium</td>
              <td>Ongoing rotation</td>
            </tr>
            <tr>
              <td>Window display (external)</td>
              <td>30&ndash;60% above base</td>
              <td>Medium</td>
              <td>2&ndash;4 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>When to Use End-Caps</h3>
      <ul>
        <li>
          <strong>New product launches:</strong> The first four weeks after
          launch are critical for building trial. An end-cap during this window
          multiplies awareness and converts foot traffic into first purchases.
        </li>
        <li>
          <strong>Seasonal peaks:</strong> Sunscreen in summer, cold and flu
          products in winter, vitamins during Ramadan. Timing your end-cap
          investment to coincide with peak demand maximizes return.
        </li>
        <li>
          <strong>Promotional campaigns:</strong> If you are running a buy-one-
          get-one or a discounted bundle, an end-cap makes the promotion
          impossible to miss.
        </li>
        <li>
          <strong>Competitive defense:</strong> When a competitor launches a new
          product in your category, securing end-cap space prevents them from
          dominating in-store visibility during their launch window.
        </li>
      </ul>

      <h3>End-Cap Best Practices</h3>
      <p>
        An end-cap is not just a shelf with more products on it. It should be
        treated as a mini billboard. The most effective end-caps I have seen in
        GCC pharmacies follow these principles:
      </p>
      <ul>
        <li>
          <strong>Single message.</strong> One product, one benefit, one call to
          action. Do not clutter an end-cap with your entire product range.
        </li>
        <li>
          <strong>Visual impact from three meters.</strong> The header card and
          product arrangement should be legible and compelling from at least
          three meters away. If a shopper has to get close to understand what
          the display is about, you have lost most of the traffic.
        </li>
        <li>
          <strong>Stock density.</strong> An end-cap that looks half-empty
          signals low demand. Replenishment discipline is essential &mdash; check
          end-cap stock daily during active campaigns.
        </li>
        <li>
          <strong>Price communication.</strong> Always include clear price
          signage. In consumer healthcare, price is a top-three purchase driver
          at the shelf.
        </li>
      </ul>

      <hr />

      <h2>Category Adjacency: The Science of Shelf Neighbors</h2>
      <p>
        Category adjacency &mdash; the practice of placing complementary product
        categories near each other &mdash; is a merchandising lever that many
        pharma brands overlook entirely. The principle is straightforward:
        shoppers buying in one category are more likely to purchase from an
        adjacent, related category.
      </p>
      <p>
        Here are the adjacency pairings that consistently drive cross-selling in
        GCC pharmacy retail:
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Primary Category</th>
              <th>Best Adjacent Category</th>
              <th>Cross-Sell Logic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunscreen</td>
              <td>After-sun care / moisturizers</td>
              <td>Treatment completion mindset</td>
            </tr>
            <tr>
              <td>Acne treatments (Rx &amp; OTC)</td>
              <td>Gentle cleansers, non-comedogenic moisturizers</td>
              <td>Regimen building</td>
            </tr>
            <tr>
              <td>Oral care (toothpaste)</td>
              <td>Mouthwash, whitening products</td>
              <td>Category extension</td>
            </tr>
            <tr>
              <td>Pain relief (oral analgesics)</td>
              <td>Topical pain relief, heat patches</td>
              <td>Multi-modal treatment</td>
            </tr>
            <tr>
              <td>Vitamins &amp; supplements</td>
              <td>Probiotics, immunity products</td>
              <td>Wellness mindset bundling</td>
            </tr>
            <tr>
              <td>Baby care (diapers, formula)</td>
              <td>Baby skincare, teething products</td>
              <td>Life-stage bundling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        If your brand operates in a category with natural adjacencies, advocate
        for placement near those complementary categories in your planogram
        proposals. I have seen adjacency-driven cross-selling add 8&ndash;15%
        incremental sell-out for skincare brands placed adjacent to
        dermatological Rx products.
      </p>

      <hr />

      <h2>
        POSM: Point-of-Sale Materials That Actually Work
      </h2>
      <p>
        Point-of-sale materials &mdash; shelf talkers, wobblers, counter
        displays, floor stickers, header cards, dispensers, and brochure holders
        &mdash; are the workhorses of in-store communication. But not all POSM
        is created equal. Most of it, frankly, is wasted money.
      </p>
      <p>
        After years of testing POSM effectiveness across pharmacy chains in the
        Kingdom, here is what I have found:
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>POSM Type</th>
              <th>Effectiveness Rating</th>
              <th>Cost</th>
              <th>Best Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shelf talker (perpendicular to shelf edge)</td>
              <td>High</td>
              <td>Low</td>
              <td>Price promotion, new launch flag</td>
            </tr>
            <tr>
              <td>Wobbler</td>
              <td>High</td>
              <td>Low</td>
              <td>Drawing attention in crowded shelf sets</td>
            </tr>
            <tr>
              <td>End-cap header card</td>
              <td>High</td>
              <td>Medium</td>
              <td>Brand messaging on promotional displays</td>
            </tr>
            <tr>
              <td>Counter display unit</td>
              <td>Medium&ndash;High</td>
              <td>Medium</td>
              <td>Impulse categories near checkout</td>
            </tr>
            <tr>
              <td>Floor sticker / floor graphic</td>
              <td>Medium</td>
              <td>Medium</td>
              <td>Guiding traffic to a specific shelf section</td>
            </tr>
            <tr>
              <td>Hanging mobile / ceiling dangler</td>
              <td>Low&ndash;Medium</td>
              <td>Low</td>
              <td>General awareness in large stores</td>
            </tr>
            <tr>
              <td>Brochure holder</td>
              <td>Low</td>
              <td>Low</td>
              <td>Educational content for considered purchases</td>
            </tr>
            <tr>
              <td>Digital screen (in-store)</td>
              <td>Varies widely</td>
              <td>High</td>
              <td>Brand storytelling, seasonal campaigns</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>POSM Design Principles</h3>
      <ul>
        <li>
          <strong>Three-second rule.</strong> A shopper glances at POSM for
          roughly three seconds. If your message cannot be understood in three
          seconds, it fails. One headline, one visual, one call to action.
        </li>
        <li>
          <strong>Bilingual execution.</strong> In KSA, all POSM must be in
          Arabic and English. The Arabic must be the primary language, not a
          smaller translation tucked into a corner. I have seen brands lose
          significant sell-out by treating Arabic as secondary on their in-store
          materials.
        </li>
        <li>
          <strong>Brand consistency.</strong> POSM should be immediately
          recognizable as belonging to your brand. Use consistent colors,
          typography, and visual identity. Shoppers who have seen your digital
          advertising should instantly connect the in-store material to the
          brand they recognize.
        </li>
        <li>
          <strong>Durability matters.</strong> Flimsy POSM that curls, fades, or
          falls down within a week damages brand perception. Invest in materials
          that maintain their appearance for the duration of the campaign.
        </li>
      </ul>

      <div className="takeaway">
        <p>
          <strong>Actionable takeaway:</strong> Audit your current POSM across
          your top 20 pharmacy doors. Score each piece on visibility, message
          clarity, bilingual quality, and physical condition. Replace anything
          scoring below 3 out of 5 immediately &mdash; damaged POSM does more
          harm than no POSM.
        </p>
      </div>

      <hr />

      <h2>The Digital Shelf: Merchandising for E-Pharmacy</h2>
      <p>
        The most significant shift in pharmacy merchandising over the past three
        years is the emergence of the digital shelf. E-pharmacy platforms like
        Nahdi Online, the Al Dawaa app, Amazon Pharmacy (UAE), and emerging
        platforms across the GCC have created a parallel merchandising
        environment that most pharma brands are severely underinvesting in.
      </p>
      <p>
        In the physical store, shelf position is the primary driver of
        visibility. On the digital shelf, it is search ranking, product listing
        quality, and visual content. The principles are analogous, but the
        execution is entirely different.
      </p>

      <h3>Digital Shelf Optimization Framework</h3>
      <ol>
        <li>
          <strong>Product title optimization.</strong> Your product title on an
          e-pharmacy listing is the equivalent of your shelf position in a
          physical store. It should include the brand name, the product variant,
          the key benefit, and the size/quantity &mdash; all structured for both
          search discoverability and shopper clarity. For example:{" "}
          <em>
            &ldquo;BrandName Sunscreen SPF 50+ &mdash; Lightweight, Non-Greasy,
            Water-Resistant &mdash; 100ml&rdquo;
          </em>{" "}
          is significantly more effective than{" "}
          <em>&ldquo;BrandName Sun Fluid 100ml.&rdquo;</em>
        </li>
        <li>
          <strong>Product images.</strong> Invest in high-quality product
          photography. The minimum standard is: one hero shot on white
          background, one lifestyle/usage image, one back-of-pack shot showing
          ingredients, and one texture/swatch shot for skincare. E-pharmacy
          shoppers cannot touch the product &mdash; images must compensate for
          the lack of tactile information.
        </li>
        <li>
          <strong>Product descriptions.</strong> Write descriptions that balance
          SEO keywords with genuine consumer benefit language. Avoid copying the
          physical packaging text verbatim &mdash; digital descriptions should be
          longer, more detailed, and structured with bullet points for
          scannability.
        </li>
        <li>
          <strong>Ratings and reviews.</strong> Products with ratings below 4.0
          stars or fewer than 10 reviews suffer significantly lower conversion
          rates. Actively encourage satisfied customers to leave reviews,
          respond to negative reviews with empathy and solutions, and monitor
          review sentiment weekly.
        </li>
        <li>
          <strong>Sponsored placement.</strong> Most major e-pharmacy platforms
          now offer sponsored listing options. Treat these as the digital
          equivalent of end-cap rental &mdash; use them for launches, seasonal
          peaks, and competitive defense.
        </li>
      </ol>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Digital Shelf Element</th>
              <th>Physical Shelf Equivalent</th>
              <th>Impact on Conversion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Search ranking (page 1 vs. page 2+)</td>
              <td>Eye level vs. floor level</td>
              <td>Products on page 1 capture 80%+ of clicks</td>
            </tr>
            <tr>
              <td>Product title quality</td>
              <td>Packaging front panel</td>
              <td>Optimized titles increase CTR by 20&ndash;35%</td>
            </tr>
            <tr>
              <td>Product images (quantity &amp; quality)</td>
              <td>Product visibility / facings</td>
              <td>4+ images increase conversion by 25&ndash;40%</td>
            </tr>
            <tr>
              <td>Ratings &amp; reviews</td>
              <td>Word of mouth / pharmacist recommendation</td>
              <td>Products with 4.5+ stars convert 2x vs. 3.5 stars</td>
            </tr>
            <tr>
              <td>Sponsored listing</td>
              <td>End-cap / secondary display</td>
              <td>Top-of-search placement increases visibility 5&ndash;10x</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="takeaway">
        <p>
          <strong>Actionable takeaway:</strong> Audit your product listings on
          Nahdi Online and Al Dawaa today. Score each listing on title quality,
          image count and quality, description completeness, and review
          rating/count. Compare against your top competitor in each category.
          Fix the gaps within 30 days.
        </p>
      </div>

      <hr />

      <h2>Visual Merchandising Best Practices for Pharmacy</h2>
      <p>
        Visual merchandising in a pharmacy is not about making the store look
        pretty. It is about creating a visual hierarchy that guides the
        shopper&rsquo;s eye, communicates value, and reduces the cognitive effort
        required to make a purchase decision.
      </p>

      <h3>Color Blocking</h3>
      <p>
        Grouping products by packaging color within a category creates visual
        coherence and makes your brand range easier to identify on a crowded
        shelf. If your brand&rsquo;s packaging uses a distinctive color palette
        (as most dermocosmetic brands do), color blocking amplifies its shelf
        presence.
      </p>

      <h3>Hierarchy of Attention</h3>
      <p>
        Within your allocated shelf space, arrange products to create a clear
        visual hierarchy:
      </p>
      <ul>
        <li>
          <strong>Lead SKU at eye level, center-facing.</strong> This is your
          hero product or your highest-margin item.
        </li>
        <li>
          <strong>Range extension products flanking the lead SKU.</strong>{" "}
          Shoppers who pick up your hero product should naturally see the
          complementary items beside it.
        </li>
        <li>
          <strong>Larger pack sizes on lower shelves.</strong> They are
          physically heavier and shoppers expect them there.
        </li>
        <li>
          <strong>Travel/trial sizes at checkout or eye level.</strong> Small
          sizes drive trial and impulse purchase.
        </li>
      </ul>

      <h3>Lighting and Cleanliness</h3>
      <p>
        This is pharmacy-specific: the clinical, clean aesthetic of a pharmacy
        means that dusty shelves, faded labels, and poorly lit sections
        communicate neglect. Brands that invest in keeping their shelf space
        immaculate outperform those that do not, especially in premium
        categories like dermocosmetics and clinical skincare.
      </p>

      <hr />

      <h2>Measuring Merchandising Impact on Sell-Out</h2>
      <p>
        One of the biggest frustrations in pharmacy merchandising is that most
        teams cannot connect their merchandising investments to sell-out results.
        They know they spent a certain amount on shelf rental, POSM, and
        end-caps, but they cannot tell you the ROI. Here is how to fix that.
      </p>

      <h3>Key Metrics to Track</h3>
      <ul>
        <li>
          <strong>Sell-out per linear centimeter.</strong> This is the gold
          standard metric for shelf productivity. Calculate it by dividing total
          sell-out value by the total shelf space (in centimeters) allocated to
          your brand. Track it monthly and compare against category average and
          competitors.
        </li>
        <li>
          <strong>Share of shelf vs. share of sales.</strong> If your share of
          shelf space is 15% but your share of category sales is only 8%, you
          have a productivity problem &mdash; your shelf space is not working
          hard enough. Conversely, if your share of sales exceeds your share of
          shelf, you have a strong argument for requesting more space.
        </li>
        <li>
          <strong>End-cap sell-out lift.</strong> Measure sell-out during the
          end-cap period compared to the same period without end-cap support.
          This gives you a clean read on the incremental value of end-cap
          investment.
        </li>
        <li>
          <strong>POSM compliance rate.</strong> What percentage of the POSM you
          distributed to stores is actually displayed correctly? Industry
          average compliance in KSA pharmacy retail is between 40&ndash;60%.
          Top-performing brands achieve 75&ndash;85% through dedicated field
          teams and regular audits.
        </li>
        <li>
          <strong>Out-of-stock rate.</strong> The best merchandising strategy in
          the world is worthless if the product is not on the shelf. Track
          out-of-stock rates weekly at store level. In KSA pharmacy retail, the
          acceptable OOS rate is below 3%. Anything above 5% is a revenue
          emergency.
        </li>
      </ul>

      <h3>Building a Merchandising Dashboard</h3>
      <p>
        I recommend building a simple monthly merchandising dashboard that
        tracks these five metrics across your top 20 doors. It does not need to
        be sophisticated &mdash; a well-structured spreadsheet updated monthly
        by your field team is sufficient to start. The key is consistency: the
        value of this data compounds over time as you build a historical view of
        what works and what does not.
      </p>

      <hr />

      <h2>Common Merchandising Mistakes</h2>
      <p>
        I have audited pharmacy merchandising for dozens of brands across the
        GCC. The same mistakes come up repeatedly, and they are all avoidable.
      </p>

      <h3>1. Treating Merchandising as a One-Time Activity</h3>
      <p>
        Too many brands negotiate shelf space at the annual listing meeting and
        then ignore merchandising for the rest of the year. Merchandising is a
        continuous discipline. Planograms shift, competitors move in, POSM
        degrades, and seasonal opportunities arise. Without regular store
        visits and ongoing attention, even the best initial placement erodes.
      </p>

      <h3>2. Ignoring the Pharmacist</h3>
      <p>
        In KSA and across the GCC, the pharmacist is the single most
        influential person in the pharmacy purchase journey. A pharmacist&rsquo;s
        recommendation can override shelf placement, advertising, and even
        physician preference in many categories. Brands that invest in
        pharmacist education, relationship building, and sampling programs
        consistently outperform those that rely on shelf presence alone.
      </p>

      <h3>3. Spreading POSM Too Thin</h3>
      <p>
        Distributing a small quantity of POSM across hundreds of doors results
        in weak execution everywhere. It is far more effective to concentrate
        your POSM investment in your top 20&ndash;30% of doors (by volume) and
        ensure perfect execution in those stores, than to spread it thinly
        across the entire network.
      </p>

      <h3>4. Neglecting Stock Replenishment</h3>
      <p>
        A beautifully merchandised shelf that is 40% out of stock communicates
        failure. Coordinate merchandising campaigns with supply chain to ensure
        adequate stock depth at store level. The most embarrassing moment in
        pharma trade marketing is launching an end-cap campaign only to run out
        of product on day three.
      </p>

      <h3>5. No Measurement Discipline</h3>
      <p>
        If you cannot measure it, you cannot improve it. The absence of
        consistent sell-out tracking at the store level makes it impossible to
        evaluate merchandising ROI or optimize future investments. Build the
        measurement infrastructure first; scale the investment second.
      </p>

      <h3>6. Copy-Pasting Physical Strategies to Digital</h3>
      <p>
        The digital shelf follows different rules. Brands that treat their
        e-pharmacy listings as digital replicas of their physical packaging
        miss the unique optimization opportunities &mdash; search keywords,
        rich content, ratings management &mdash; that drive digital sell-out.
        Physical and digital merchandising strategies should be complementary
        but distinct.
      </p>

      <hr />

      <h2>Pharmacy Merchandising Audit Checklist</h2>
      <p>
        Use this checklist to conduct a structured merchandising audit across
        your pharmacy network. I recommend running this audit quarterly for your
        top 20 doors and bi-annually for the broader network.
      </p>

      <h3>Shelf Presence</h3>
      <ul>
        <li>Are hero SKUs placed at eye level (120&ndash;160 cm)?</li>
        <li>Do we have the agreed number of facings per SKU?</li>
        <li>Is vertical brand blocking maintained?</li>
        <li>Are products properly fronted (pulled to the shelf edge)?</li>
        <li>Is shelf space proportionate to our market share in the category?</li>
      </ul>

      <h3>Stock and Availability</h3>
      <ul>
        <li>Are all listed SKUs in stock and on shelf?</li>
        <li>Is stock depth adequate (minimum 2 weeks of cover)?</li>
        <li>Are there any expired or near-expiry products on shelf?</li>
        <li>Is the FIFO (first in, first out) rotation being followed?</li>
      </ul>

      <h3>POSM and Visibility</h3>
      <ul>
        <li>Is all planned POSM in place and in good condition?</li>
        <li>Are shelf talkers/wobblers current (not from a past campaign)?</li>
        <li>Is POSM bilingual (Arabic primary, English secondary)?</li>
        <li>Are price labels accurate and clearly displayed?</li>
        <li>Is any competitor POSM encroaching on our allocated space?</li>
      </ul>

      <h3>End-Caps and Secondary Displays</h3>
      <ul>
        <li>Is the end-cap/display fully stocked and visually impactful?</li>
        <li>Is the promotional message clear from three meters away?</li>
        <li>Is pricing prominently displayed on the display?</li>
        <li>Is the display duration within the agreed campaign window?</li>
      </ul>

      <h3>Digital Shelf (E-Pharmacy)</h3>
      <ul>
        <li>
          Do all product listings have optimized titles with brand, variant,
          benefit, and size?
        </li>
        <li>Do all listings have 4+ high-quality product images?</li>
        <li>Are product descriptions complete, keyword-rich, and bilingual?</li>
        <li>Is the average rating above 4.0 with at least 10 reviews?</li>
        <li>
          Are sponsored placement campaigns active during key selling windows?
        </li>
      </ul>

      <h3>Competitive Landscape</h3>
      <ul>
        <li>What shelf position do our top 3 competitors occupy?</li>
        <li>Are competitors running end-cap or secondary displays?</li>
        <li>Have competitors introduced new POSM or in-store activations?</li>
        <li>Are competitor pricing/promotions more prominent than ours?</li>
      </ul>

      <div className="takeaway">
        <p>
          <strong>Actionable takeaway:</strong> Print this checklist and take it
          into your top 10 pharmacy doors this week. Score each element on a
          1&ndash;5 scale. The resulting heatmap will tell you exactly where your
          merchandising execution is strong and where it needs immediate
          attention. For teams looking to build their trade marketing
          capabilities, the{" "}
          <Link href="/community">PharmaGrowth community</Link> is where pharma
          professionals share best practices, templates, and real-world results.
        </p>
      </div>

      <hr />

      <h2>Frequently Asked Questions</h2>

      <h3 className="faq-question">
        What is pharmacy merchandising?
      </h3>
      <p>
        Pharmacy merchandising is the discipline of optimizing how pharmaceutical
        and consumer healthcare products are presented, positioned, and promoted
        within the retail pharmacy environment &mdash; both physical shelves and
        digital platforms &mdash; to maximize sell-out. It encompasses shelf
        placement strategy, planogram management, point-of-sale materials,
        category adjacency planning, and digital shelf optimization on
        e-pharmacy platforms.
      </p>

      <h3 className="faq-question">
        How does shelf placement affect pharmaceutical sell-out?
      </h3>
      <p>
        Shelf placement has a dramatic impact on sell-out. Products placed at eye
        level (120&ndash;160 cm from the floor) consistently sell 2&ndash;3 times
        more than identical products placed at floor level. This effect is
        amplified in pharmacy retail where shoppers are often browsing categories
        rather than seeking specific brands, making visibility the primary driver
        of purchase consideration.
      </p>

      <h3 className="faq-question">
        What is a planogram and why does it matter for pharma brands?
      </h3>
      <p>
        A planogram is a visual diagram that dictates where every product sits on
        a pharmacy shelf. Major pharmacy chains in KSA like Nahdi and Al Dawaa
        manage planograms centrally and update them quarterly. For pharma brands,
        influencing planogram decisions through data-driven proposals and trade
        investment is one of the highest-ROI activities in trade marketing,
        directly affecting visibility, accessibility, and sell-out performance.
      </p>

      <h3 className="faq-question">
        What POSM works best in KSA pharmacy retail?
      </h3>
      <p>
        In KSA pharmacy retail, the most effective POSM types are shelf talkers
        (perpendicular to the shelf edge for maximum visibility), wobblers
        (motion draws attention in crowded shelf sets), and end-cap header cards.
        All POSM must be bilingual with Arabic as the primary language. The
        three-second rule applies: if the message cannot be understood in three
        seconds, it will not work.
      </p>

      <h3 className="faq-question">
        How should pharma brands approach e-pharmacy merchandising?
      </h3>
      <p>
        E-pharmacy merchandising requires optimizing five elements: product
        titles (with brand name, variant, benefit, and size), product images (at
        least four high-quality shots), product descriptions (keyword-rich and
        bilingual), ratings and reviews (actively managed, targeting 4.0+ stars),
        and sponsored placement (for launches and seasonal peaks). Brands should
        treat e-pharmacy listings with the same strategic rigor they apply to
        physical shelf space.
      </p>

      <hr />

      <h2>Conclusion</h2>
      <p>
        Pharmacy merchandising is not glamorous. It does not generate the
        excitement of a new product launch or a viral social media campaign. But
        it is, consistently, one of the highest-ROI activities available to
        pharma brand teams. The brands that win at the shelf &mdash; and
        increasingly, on the digital shelf &mdash; are the ones that treat
        merchandising as a strategic discipline rather than a tactical
        afterthought.
      </p>
      <p>
        The frameworks in this guide are drawn from real execution across
        hundreds of pharmacy doors in KSA and the broader GCC. They work. But
        they only work if you commit to the discipline of consistent execution,
        measurement, and optimization.
      </p>
      <p>
        Start with the audit checklist. Walk your top 10 stores this week.
        Build the measurement infrastructure this month. And watch what happens
        to your sell-out numbers over the next quarter.
      </p>
      <p>
        If you are serious about building your trade marketing and merchandising
        capabilities, I invite you to join the{" "}
        <Link href="/community">PharmaGrowth community</Link>. It is where
        pharma commercial teams across the MENA region share strategies, access
        proven frameworks, and get direct feedback on their merchandising
        challenges.
      </p>

      <hr />

      <p>
        <em>
          Sherif Al-Kady is a pharmaceutical marketing strategist with 20+ years
          of experience building consumer healthcare and dermocosmetic brands
          across the GCC and MENA region. He is the founder of PharmaGrowth, a
          platform dedicated to helping pharma marketers grow their brands and
          careers through commercial excellence.
        </em>
      </p>
    </ArticleLayout>
  );
}
