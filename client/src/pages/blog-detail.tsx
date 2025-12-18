import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, User, Facebook, Share2, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blog1 from "@assets/generated_images/home_insurance_concept.png";
import blog2 from "@assets/generated_images/business_insurance_meeting.png";
import blog3 from "@assets/generated_images/car_insurance_protection.png";

const whatsappUrl = "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

const blogPostsData: Record<string, any> = {
  "1": {
    title: "10 Tips to Lower Your Home Insurance Premium",
    date: "Dec 12, 2025",
    author: "Admin",
    category: "Home Insurance",
    image: blog1,
    content: `
      <h2>10 Tips to Lower Your Home Insurance Premium</h2>
      
      <p>Your home insurance is crucial for protecting your most valuable asset, but it doesn't have to break the bank. Here are 10 proven tips to lower your premiums while maintaining comprehensive coverage.</p>

      <h3>1. Increase Your Deductible</h3>
      <p>One of the most effective ways to lower your premium is to increase your deductible—the amount you pay out of pocket when you file a claim. By choosing a higher deductible (say $1,500 instead of $500), you can significantly reduce your monthly payments.</p>

      <h3>2. Bundle Your Policies</h3>
      <p>Combining your home and auto insurance with the same provider often gets you a substantial discount. Many insurers offer 10-25% discounts when you bundle multiple policies.</p>

      <h3>3. Install Safety Features</h3>
      <p>Smoke detectors, burglar alarms, and fire extinguishers aren't just good for safety—they can reduce your premiums by 5-15%. Smart home security systems are especially attractive to insurers.</p>

      <h3>4. Improve Your Home's Condition</h3>
      <p>Regular maintenance like roof repairs, updating electrical systems, and fixing plumbing issues can lower your rates. Insurers want to know your home is well-maintained and less prone to damage.</p>

      <h3>5. Maintain a Good Credit Score</h3>
      <p>In many states, insurers use credit scores to determine premiums. Working to improve your credit score can directly translate to lower insurance costs.</p>

      <h3>6. Ask About Discounts</h3>
      <p>Don't hesitate to ask your insurance provider about available discounts. Common ones include loyalty discounts, early payment discounts, and claims-free discounts.</p>

      <h3>7. Pay Your Premium Annually</h3>
      <p>Paying your entire annual premium at once, rather than monthly, often results in a discount of 2-5%.</p>

      <h3>8. Review Your Coverage Regularly</h3>
      <p>Your insurance needs change over time. Regularly reviewing your policy ensures you're not over-insured on items you don't need.</p>

      <h3>9. Consider Your Location</h3>
      <p>If you live in an area prone to natural disasters, it may affect your rates. Some areas offer special discounts for homes in safer neighborhoods.</p>

      <h3>10. Stay with the Same Insurer</h3>
      <p>Many insurers reward loyalty with better rates. Before switching providers, ask about loyalty discounts that might make staying more affordable.</p>

      <h2>Conclusion</h2>
      <p>Lowering your home insurance premium doesn't mean compromising on coverage. By implementing these strategies, you can find the perfect balance between affordability and comprehensive protection. Contact Insurance Lab today to review your policy and find additional savings.</p>
    `
  },
  "2": {
    title: "Why Business Liability Coverage is Essential",
    date: "Dec 10, 2025",
    author: "Admin",
    category: "Business",
    image: blog2,
    content: `
      <h2>Why Business Liability Coverage is Essential</h2>
      
      <p>Every business, regardless of size, faces the risk of lawsuits due to injuries, property damage, or other accidents. Business liability insurance is your financial shield against these potentially devastating claims.</p>

      <h3>What is Business Liability Insurance?</h3>
      <p>Business liability insurance protects your company if you're held responsible for injuring someone or damaging their property. It covers legal fees, medical expenses, and settlement costs.</p>

      <h3>The Real Cost of Not Having Coverage</h3>
      <p>Without liability insurance, a single lawsuit could bankrupt your business. Medical bills, legal fees, and settlements can easily reach thousands or millions of rupees. One incident could end your business entirely.</p>

      <h3>Types of Business Liability Coverage</h3>
      <p><strong>General Liability:</strong> Covers bodily injury and property damage claims.</p>
      <p><strong>Professional Liability:</strong> Protects service-based businesses against errors or omissions.</p>
      <p><strong>Product Liability:</strong> Covers injuries caused by your products.</p>

      <h3>Why It's Non-Negotiable</h3>
      <p>Many clients and partners require proof of liability insurance before doing business with you. Banks and landlords often make it a condition of loans and leases. Having coverage isn't optional—it's essential for credibility and legal compliance.</p>

      <h3>How Much Coverage Do You Need?</h3>
      <p>The amount depends on your industry, business size, and risk level. Most businesses should carry at least ₹10 lakhs to ₹1 crore in coverage. Work with Insurance Lab to determine the right amount for your specific needs.</p>

      <h2>Conclusion</h2>
      <p>Business liability insurance is an investment in your company's future. It protects your assets, your reputation, and your ability to continue operating. Don't leave your business exposed—get proper coverage today.</p>
    `
  },
  "3": {
    title: "Understanding the Claims Process After an Accident",
    date: "Dec 05, 2025",
    author: "Admin",
    category: "Claims",
    image: blog3,
    content: `
      <h2>Understanding the Claims Process After an Accident</h2>
      
      <p>Filing an insurance claim after an accident can feel overwhelming. Understanding the process step-by-step can help you navigate it smoothly and get the compensation you deserve.</p>

      <h3>Step 1: Ensure Safety First</h3>
      <p>If you're in a vehicle accident, move to a safe location if possible. Turn on hazard lights and set up warning triangles. Check for injuries and call emergency services if needed. Your safety is the priority.</p>

      <h3>Step 2: Document Everything</h3>
      <p>Take photographs of the accident scene from multiple angles. Document vehicle damage, road conditions, and any visible injuries. If possible, get contact information from witnesses. This evidence is crucial for your claim.</p>

      <h3>Step 3: Report to Police</h3>
      <p>For accidents involving significant damage or injuries, file a police report. Get the report number and keep a copy. This official documentation strengthens your claim.</p>

      <h3>Step 4: Contact Your Insurance Provider</h3>
      <p>Report the accident to your insurance company as soon as possible. Most insurers have 24/7 hotlines for accident reporting. Provide accurate details without admitting fault.</p>

      <h3>Step 5: File Your Claim</h3>
      <p>Your insurer will provide a claim form. Fill it out completely and accurately, attaching all documentation—photos, police report, witness statements, and repair estimates.</p>

      <h3>Step 6: Work with the Claims Adjuster</h3>
      <p>An adjuster will assess your damage and determine the payout. Cooperate fully, but don't accept an offer if you feel it's unfair. You can request reconsideration.</p>

      <h3>Step 7: Receive Your Settlement</h3>
      <p>Once approved, you'll receive compensation according to your policy. This typically happens within 24-48 hours at Insurance Lab.</p>

      <h2>Pro Tips for a Smooth Claims Process</h2>
      <p><strong>Keep Records:</strong> Maintain copies of all communications with your insurer.</p>
      <p><strong>Be Honest:</strong> Provide accurate information. Fraud can void your policy.</p>
      <p><strong>Follow Up:</strong> Don't hesitate to contact your adjuster for updates.</p>

      <h2>Conclusion</h2>
      <p>While accidents are stressful, understanding the claims process can reduce anxiety and ensure you get fair compensation. At Insurance Lab, we're committed to making claims settlement quick and hassle-free. Our average claim settlement time is just 24-48 hours.</p>
    `
  },
  "4": {
    title: "Life Insurance: Term vs Whole Life - Which is Right for You?",
    date: "Dec 01, 2025",
    author: "Admin",
    category: "Life Insurance",
    image: blog1,
    content: `
      <h2>Life Insurance: Term vs Whole Life - Which is Right for You?</h2>
      
      <p>Choosing between term and whole life insurance can be confusing. Both have distinct advantages and limitations. Let's break down the differences to help you decide which is right for your situation.</p>

      <h3>What is Term Life Insurance?</h3>
      <p>Term life insurance provides coverage for a specific period—typically 10, 20, or 30 years. If you die during the term, your beneficiaries receive the death benefit. If you survive, the policy expires with no payout.</p>

      <h3>Advantages of Term Insurance</h3>
      <p><strong>Affordability:</strong> Term premiums are significantly lower than whole life.</p>
      <p><strong>Simplicity:</strong> It's straightforward—coverage for a set period.</p>
      <p><strong>High Coverage Amount:</strong> You can get substantial coverage for a small premium.</p>

      <h3>What is Whole Life Insurance?</h3>
      <p>Whole life insurance provides lifetime coverage. As long as you pay premiums, your beneficiaries will receive the death benefit whenever you die. It also builds cash value over time.</p>

      <h3>Advantages of Whole Life Insurance</h3>
      <p><strong>Lifetime Protection:</strong> Coverage lasts your entire life.</p>
      <p><strong>Cash Value:</strong> You can borrow against the policy or surrender it for cash.</p>
      <p><strong>Fixed Premiums:</strong> Your rates never increase.</p>

      <h3>Which Should You Choose?</h3>
      <p><strong>Choose Term If:</strong> You want affordable coverage for a specific period, like until your kids are independent or your mortgage is paid off. You have a limited budget and want maximum coverage.</p>
      <p><strong>Choose Whole Life If:</strong> You want permanent protection. You want to build cash value. You can afford higher premiums.</p>

      <h3>The Bottom Line</h3>
      <p>Many financial experts recommend starting with term insurance for primary coverage due to its affordability. You can then supplement with whole life for additional protection if your budget allows.</p>

      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all answer. Your choice depends on your age, health, income, and family situation. At Insurance Lab, our experts can help you evaluate both options and find the perfect fit. Contact us for a free consultation today.</p>
    `
  },
  "5": {
    title: "Top 5 Mistakes to Avoid When Buying Car Insurance",
    date: "Nov 28, 2025",
    author: "Admin",
    category: "Car Insurance",
    image: blog2,
    content: `
      <h2>Top 5 Mistakes to Avoid When Buying Car Insurance</h2>
      
      <p>Buying car insurance is a necessary expense, but many drivers make costly mistakes that result in inadequate coverage or unnecessarily high premiums. Here are the top 5 mistakes to avoid.</p>

      <h3>Mistake 1: Choosing Only the Minimum Coverage</h3>
      <p>While minimum liability coverage is legally required, it often isn't enough. A serious accident can exceed state minimums, leaving you personally liable for the difference. Choose coverage limits that match your assets and risk.</p>

      <h3>Mistake 2: Ignoring Deductible Options</h3>
      <p>Your deductible is what you pay before insurance kicks in. While high deductibles reduce premiums, make sure you can afford them if you need to file a claim. Balance affordability with financial security.</p>

      <h3>Mistake 3: Not Comparing Quotes</h3>
      <p>Insurance rates vary significantly between providers. Not shopping around could cost you hundreds of rupees annually. Always get quotes from multiple insurers before deciding.</p>

      <h3>Mistake 4: Forgetting to Ask About Discounts</h3>
      <p>Many drivers pay full price when discounts are available. Ask about safe driver discounts, bundling discounts, good student discounts, and safety feature discounts. These can save you 20-40%.</p>

      <h3>Mistake 5: Not Reviewing Your Policy Regularly</h3>
      <p>Your insurance needs change over time. Reviewing annually ensures you have appropriate coverage. You might find better rates or realize you need additional coverage.</p>

      <h3>Additional Tips</h3>
      <p><strong>Be Accurate:</strong> Provide correct information when applying. Misrepresenting details can lead to claim denial.</p>
      <p><strong>Maintain Good Credit:</strong> Credit scores affect premiums in many states.</p>
      <p><strong>Drive Safely:</strong> Accidents and violations increase your rates significantly.</p>

      <h2>Conclusion</h2>
      <p>Car insurance doesn't have to be complicated or expensive. By avoiding these common mistakes and working with a trusted provider like Insurance Lab, you can secure the right coverage at a fair price. We're here to guide you through every step of the process.</p>
    `
  },
  "6": {
    title: "The Importance of Regular Policy Reviews",
    date: "Nov 25, 2025",
    author: "Admin",
    category: "General",
    image: blog3,
    content: `
      <h2>The Importance of Regular Policy Reviews</h2>
      
      <p>Many people buy insurance and forget about it until they need to file a claim. But your insurance needs change, and what was perfect five years ago might not be adequate today. Regular policy reviews are essential for optimal protection.</p>

      <h3>How Life Changes Affect Your Insurance Needs</h3>
      <p><strong>Marriage or Divorce:</strong> Your family structure changes, affecting coverage needs.</p>
      <p><strong>Birth of Children:</strong> You'll want more life insurance and updated beneficiaries.</p>
      <p><strong>Home Improvements:</strong> Renovations increase property value and may require increased coverage.</p>
      <p><strong>Job Changes:</strong> New employment might affect your risk profile and coverage needs.</p>
      <p><strong>Vehicle Purchases:</strong> New cars need appropriate coverage.</p>

      <h3>Why Annual Reviews Matter</h3>
      <p><strong>Stay Adequately Protected:</strong> Ensure your coverage matches your current situation.</p>
      <p><strong>Find New Discounts:</strong> Insurers regularly introduce new discounts you might qualify for.</p>
      <p><strong>Reduce Costs:</strong> Your premiums might be lower with a different deductible or updated information.</p>
      <p><strong>Avoid Gaps:</strong> Identify coverage areas you might be missing.</p>

      <h3>What to Check During a Review</h3>
      <p><strong>Coverage Limits:</strong> Are they still appropriate for your situation?</p>
      <p><strong>Deductibles:</strong> Can you afford them if you file a claim?</p>
      <p><strong>Add-Ons:</strong> Do you need additional coverage like umbrella policies?</p>
      <p><strong>Premium Changes:</strong> Have your rates increased? Is it time to shop around?</p>

      <h3>When to Review Your Policy</h3>
      <p>Review annually around your policy renewal date. Additionally, review whenever you experience major life changes like marriage, having children, buying a home, or purchasing a new vehicle.</p>

      <h2>Conclusion</h2>
      <p>Insurance isn't a "set it and forget it" product. Your protection needs evolve as your life changes. Regular reviews ensure you're always optimally covered. At Insurance Lab, our advisors are ready to help you review your policies and make adjustments as needed. Schedule your free review today.</p>
    `
  }
};

export default function BlogDetail() {
  const params = useParams();
  const blogId = params.id as string;
  const post = blogPostsData[blogId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <a className="text-secondary font-bold hover:underline">Back to Blog</a>
          </Link>
        </div>
      </div>
    );
  }

  const shareOnSocial = (platform: string) => {
    let shareUrl = "";
    const url = window.location.href;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(post.title + " " + url)}`;
        break;
    }
    if (shareUrl) window.open(shareUrl, "_blank");
  };

  return (
    <div className="min-h-screen font-sans text-slate-600">
      <Header />

      {/* Article */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Back Button */}
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-secondary font-bold mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Back to Blog
            </a>
          </Link>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden mb-12 h-96"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-sm mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-slate-500">
              <span className="flex items-center gap-2">
                <Clock size={16} /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} /> {post.author}
              </span>
            </div>
          </motion.div>

          {/* Social Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-4 mb-12 pb-12 border-b"
          >
            <span className="text-sm font-bold text-slate-500">Share:</span>
            <button
              onClick={() => shareOnSocial("facebook")}
              className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook size={18} />
            </button>
            <button
              onClick={() => shareOnSocial("twitter")}
              className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={() => shareOnSocial("linkedin")}
              className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              <Linkedin size={18} />
            </button>
            <button
              onClick={() => shareOnSocial("whatsapp")}
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <Share2 size={18} />
            </button>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-slate-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-20 pt-12 border-t"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Protect Your Future?</h3>
              <p className="text-slate-600 mb-6">
                Based on this article, you might benefit from our comprehensive insurance solutions. Contact us today for a free consultation.
              </p>
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3 rounded-full"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Your Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
