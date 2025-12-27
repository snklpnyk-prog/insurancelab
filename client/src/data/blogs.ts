export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Health Insurance Plans in Indore for 2025",
    slug: "top-10-health-insurance-plans-indore-2025",
    excerpt: "Discover the best health insurance plans available in Indore with cashless facilities at top hospitals. Compare features, premiums, and benefits.",
    date: "January 15, 2025",
    author: "Anshul Purohit",
    category: "Health Insurance",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Finding the Best Health Insurance in Indore</h2>
      <p>Indore, the cleanest city in India, is also a hub for medical excellence. With top-tier hospitals like Bombay Hospital, Choithram, and Medanta, having the right health insurance policy is crucial to access quality healthcare without financial stress.</p>
      
      <h3>Why You Need Health Insurance in 2025?</h3>
      <p>Medical inflation is rising at 14% annually. A simple hospitalization can cost upwards of ₹2 Lakhs. Health insurance ensures your savings remain intact.</p>

      <h3>Top Features to Look For:</h3>
      <ul>
        <li><strong>Cashless Network:</strong> Ensure the insurer covers major Indore hospitals.</li>
        <li><strong>No Claim Bonus:</strong> Look for policies that increase your cover for claim-free years.</li>
        <li><strong>Restoration Benefit:</strong> Refills your sum insured if exhausted during the year.</li>
      </ul>

      <h3>Best Plans for Families</h3>
      <p>We have curated a list of the top 10 health plans perfect for families in Madhya Pradesh, balancing affordable premiums with comprehensive coverage. Contact Insurance Lab for a personalized comparison.</p>
    `
  },
  {
    id: "2",
    title: "Why Term Insurance is a Must-Have for Every Earner",
    slug: "why-term-insurance-is-must-have",
    excerpt: "Term insurance is the purest form of financial protection. Learn why every breadwinner needs a term plan to secure their family's future.",
    date: "January 12, 2025",
    author: "Anshul Purohit",
    category: "Life Insurance",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>The Importance of Term Insurance</h2>
      <p>If you have dependents, you need term insurance. It's that simple. Term insurance provides a large life cover at a very low premium, ensuring your family's lifestyle is protected if you aren't around.</p>

      <h3>High Cover, Low Premium</h3>
      <p>For a 30-year-old, a ₹1 Crore cover can cost as little as ₹10,000 per year. That's less than ₹1,000 a month for complete peace of mind.</p>

      <h3>Tax Benefits</h3>
      <p>Premiums paid are eligible for tax deductions under Section 80C of the Income Tax Act, giving you dual benefits of protection and tax saving.</p>
    `
  },
  {
    id: "3",
    title: "How to Choose the Best Car Insurance in Madhya Pradesh",
    slug: "choose-best-car-insurance-mp",
    excerpt: "Navigating motor insurance options? Here is a guide to selecting the right comprehensive car insurance policy for MP roads.",
    date: "January 10, 2025",
    author: "Anshul Purohit",
    category: "Motor Insurance",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Driving in MP? Get the Right Cover</h2>
      <p>Roads in Madhya Pradesh can be unpredictable. From bumper-to-bumper city traffic in Indore to highway drives, your car needs robust protection.</p>

      <h3>Third-Party vs Comprehensive</h3>
      <p>While Third-Party insurance is mandatory by law, it only covers damages to others. Comprehensive insurance covers YOUR car against accidents, theft, fire, and natural calamities.</p>

      <h3>Essential Add-ons</h3>
      <ul>
        <li><strong>Zero Depreciation:</strong> Get full claim amount without depreciation deduction on parts.</li>
        <li><strong>Roadside Assistance:</strong> 24/7 help for breakdowns, flat tires, or battery issues.</li>
        <li><strong>Engine Protection:</strong> Critical for protection against waterlogging damage during monsoons.</li>
      </ul>
    `
  },
  {
    id: "4",
    title: "Business Insurance 101: Protecting Your Startup in Indore",
    slug: "business-insurance-startup-indore",
    excerpt: "Startups face unique risks. Learn about essential business insurance covers like Liability, Fire, and Group Health for your enterprise.",
    date: "January 08, 2025",
    author: "Anshul Purohit",
    category: "Business Insurance",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Securing Your Business Ambitions</h2>
      <p>Indore is becoming a startup hub. But with growth comes risk. Business insurance is not an expense; it's an investment in continuity.</p>

      <h3>Must-Have Policies for Startups</h3>
      <ul>
        <li><strong>Director's & Officers (D&O) Liability:</strong> Protects founders against personal liability claims.</li>
        <li><strong>Cyber Liability:</strong> Essential for tech companies handling customer data.</li>
        <li><strong>Office Package Policy:</strong> Covers assets, furniture, and electronics against fire and burglary.</li>
      </ul>
    `
  },
  {
    id: "5",
    title: "The Ultimate Guide to NRI Investment in India",
    slug: "nri-investment-guide-india",
    excerpt: "NRIs looking to invest in India have excellent options. From Mutual Funds to Real Estate, explore high-growth investment avenues.",
    date: "January 05, 2025",
    author: "Anshul Purohit",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>India's Growth Story: An Opportunity for NRIs</h2>
      <p>With India's economy projected to be the third largest by 2030, NRIs have a golden opportunity to participate in this growth story.</p>

      <h3>Investment Avenues</h3>
      <ul>
        <li><strong>NRE/NRO Accounts:</strong> The foundation of NRI banking.</li>
        <li><strong>Mutual Funds:</strong> High returns through SIPs in Indian equity markets.</li>
        <li><strong>Real Estate:</strong> Investing in developing tier-2 cities like Indore offers high appreciation potential.</li>
      </ul>

      <p>At Insurance Lab, we specialize in helping NRIs manage their Indian portfolios with full compliance and expert advice.</p>
    `
  },
  {
    id: "6",
    title: "Cashless Hospitalization: How It Works & Best Hospitals",
    slug: "cashless-hospitalization-indore",
    excerpt: "Understand the cashless claim process. A list of top network hospitals in Indore for smooth medical treatment.",
    date: "January 03, 2025",
    author: "Anshul Purohit",
    category: "Health Insurance",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>What is Cashless Hospitalization?</h2>
      <p>Cashless hospitalization means the insurance company settles the hospital bill directly. You don't have to pay from your pocket and wait for reimbursement.</p>

      <h3>How to Avail Cashless Treatment?</h3>
      <ol>
        <li>Visit a Network Hospital.</li>
        <li>Show your Health Card at the TPA desk.</li>
        <li>Submit the pre-authorization form.</li>
        <li>Once approved, the insurer pays the hospital.</li>
      </ol>

      <h3>Top Network Hospitals in Indore</h3>
      <p>Most major insurers have tie-ups with Bombay Hospital, Choithram, Medanta, and CHL Apollo in Indore.</p>
    `
  },
  {
    id: "7",
    title: "Life Insurance vs. Term Insurance: Which One Do You Need?",
    slug: "life-vs-term-insurance",
    excerpt: "Confused between endowment plans and term plans? We break down the differences to help you choose the right life cover.",
    date: "January 01, 2025",
    author: "Anshul Purohit",
    category: "Life Insurance",
    image: "https://images.unsplash.com/photo-1526304640152-d46196bfc4d8?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Understanding Life Insurance Products</h2>
      <p>Many people confuse investment with insurance. Let's clarify the two main types of life insurance.</p>

      <h3>Term Insurance</h3>
      <p><strong>Pure Protection.</strong> You pay a premium for a specific term. If you pass away, your family gets the sum assured. If you survive, you get nothing (unless it's a Return of Premium plan). It offers the highest cover for the lowest cost.</p>

      <h3>Endowment / Money Back Plans</h3>
      <p><strong>Insurance + Savings.</strong> A part of your premium goes towards life cover, and the rest is invested. You get a lump sum on maturity. These plans help in disciplined savings but offer lower life cover.</p>
    `
  },
  {
    id: "8",
    title: "Home Insurance: Protecting Your Property from Unexpected Risks",
    slug: "home-insurance-protection",
    excerpt: "Your home is your biggest asset. Learn how home insurance protects structure and contents against fire, theft, and natural calamities.",
    date: "December 28, 2024",
    author: "Anshul Purohit",
    category: "Home Insurance",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Don't Leave Your Home Unprotected</h2>
      <p>We often insure our cars but neglect our most valuable asset—our home. Home insurance is surprisingly affordable and covers immense risks.</p>

      <h3>What Does It Cover?</h3>
      <ul>
        <li><strong>Structure:</strong> Rebuilding costs in case of fire, earthquake, or flood.</li>
        <li><strong>Contents:</strong> Protection for jewelry, electronics, and furniture against burglary and damage.</li>
      </ul>

      <p>Secure your peace of mind for less than the cost of a family dinner per month.</p>
    `
  },
  {
    id: "9",
    title: "Tax Benefits of Buying Health Insurance Under Section 80D",
    slug: "tax-benefits-health-insurance-80d",
    excerpt: "Save taxes while securing your health. Detailed guide on Section 80D deductions for self, family, and parents.",
    date: "December 25, 2024",
    author: "Anshul Purohit",
    category: "Health Insurance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Health is Wealth, and Tax Savings Too!</h2>
      <p>The Income Tax Act encourages you to buy health insurance by offering deductions on premiums paid.</p>

      <h3>Deduction Limits</h3>
      <ul>
        <li><strong>For Self & Family:</strong> Up to ₹25,000 (₹50,000 if senior citizen).</li>
        <li><strong>For Parents:</strong> Additional up to ₹25,000 (₹50,000 if senior citizen).</li>
      </ul>

      <p>This means you can claim a total deduction of up to ₹1 Lakh if you pay for yourself and your senior citizen parents.</p>
    `
  },
  {
    id: "10",
    title: "The Importance of Personal Accident Cover for Daily Commuters",
    slug: "personal-accident-cover-importance",
    excerpt: "Accidents are unpredictable. Why a personal accident policy is essential for anyone who travels daily for work.",
    date: "December 22, 2024",
    author: "Anshul Purohit",
    category: "Personal Accident",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Beyond Standard Health Insurance</h2>
      <p>Health insurance pays for hospitalization, but what about income loss if an accident leaves you disabled? That's where Personal Accident (PA) cover comes in.</p>

      <h3>Key Benefits of PA Cover</h3>
      <ul>
        <li><strong>Accidental Death Benefit:</strong> Lump sum payout to nominees.</li>
        <li><strong>Permanent Total Disability:</strong> Payout if you can never work again.</li>
        <li><strong>Temporary Total Disability:</strong> Weekly cash allowance while you recover from fractures or injuries.</li>
      </ul>

      <p>It's a low-cost, high-value safety net for every commuter.</p>
    `
  }
];
