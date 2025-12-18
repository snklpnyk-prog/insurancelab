import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Clock, ArrowRight, Search, Facebook, Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blog1 from "@assets/generated_images/home_insurance_concept.png";
import blog2 from "@assets/generated_images/business_insurance_meeting.png";
import blog3 from "@assets/generated_images/car_insurance_protection.png";
import blog4 from "@assets/generated_images/life_insurance_family.png";
import blog5 from "@assets/generated_images/car_insurance_mistakes.png";
import blog6 from "@assets/generated_images/personal_health_insurance.png";

const whatsappUrl = "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Lower Your Home Insurance Premium",
    date: "Dec 12, 2025",
    author: "Admin",
    category: "Home Insurance",
    image: blog1,
    excerpt: "Learn practical ways to reduce your home insurance costs without compromising on coverage.",
    content: "Your home insurance is crucial, but it doesn't have to break the bank. Here are 10 proven tips to lower your premiums while maintaining comprehensive coverage..."
  },
  {
    id: 2,
    title: "Why Business Liability Coverage is Essential",
    date: "Dec 10, 2025",
    author: "Admin",
    category: "Business",
    image: blog2,
    excerpt: "Understanding why every business needs comprehensive liability insurance protection.",
    content: "Business liability coverage protects your company from financial losses due to injuries or property damage claims. It's not just legally required in many cases; it's essential for protecting your business assets..."
  },
  {
    id: 3,
    title: "Understanding the Claims Process After an Accident",
    date: "Dec 05, 2025",
    author: "Admin",
    category: "Claims",
    image: blog3,
    excerpt: "A complete guide to filing and processing insurance claims smoothly.",
    content: "When an accident happens, knowing how to file a claim quickly and efficiently is crucial. This guide walks you through every step of the claims process..."
  },
  {
    id: 4,
    title: "Life Insurance: Term vs Whole Life - Which is Right for You?",
    date: "Dec 01, 2025",
    author: "Admin",
    category: "Life Insurance",
    image: blog4,
    excerpt: "Comparing term and whole life insurance to help you make the right choice.",
    content: "The choice between term and whole life insurance can be confusing. Both have their pros and cons. Let's break down the differences to help you decide..."
  },
  {
    id: 5,
    title: "Top 5 Mistakes to Avoid When Buying Car Insurance",
    date: "Nov 28, 2025",
    author: "Admin",
    category: "Car Insurance",
    image: blog5,
    excerpt: "Common mistakes that cost drivers thousands in unnecessary expenses.",
    content: "Many drivers make costly mistakes when purchasing car insurance. Avoid these five common pitfalls to ensure you get the best coverage at the best price..."
  },
  {
    id: 6,
    title: "The Importance of Regular Policy Reviews",
    date: "Nov 25, 2025",
    author: "Admin",
    category: "General",
    image: blog6,
    excerpt: "Why reviewing your insurance policies annually is crucial for optimal protection.",
    content: "Your insurance needs change over time. Annual policy reviews ensure you have the right coverage as your life circumstances evolve..."
  }
];

export default function Blog() {
  const shareOnSocial = (platform: string, title: string) => {
    let shareUrl = "";
    const url = window.location.href;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`;
        break;
    }
    if (shareUrl) window.open(shareUrl, "_blank");
  };

  return (
    <div className="min-h-screen font-sans text-slate-600">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Insurance Blog</h1>
            <p className="text-xl text-slate-200">Expert insights, tips, and latest news about insurance and financial protection.</p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Search size={20} className="text-slate-400" />
            <Input 
              placeholder="Search articles..." 
              className="flex-1 h-12 rounded-lg border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${post.id}`}>
                      <a
                        className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
                        data-testid={`link-read-more-${post.id}`}
                      >
                        Read More <ArrowRight size={14} />
                      </a>
                    </Link>
                    <div className="flex gap-2">
                      <button
                        onClick={() => shareOnSocial("facebook", post.title)}
                        className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Facebook size={14} />
                      </button>
                      <button
                        onClick={() => shareOnSocial("twitter", post.title)}
                        className="w-7 h-7 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                      >
                        <Share2 size={14} />
                      </button>
                      <button
                        onClick={() => shareOnSocial("linkedin", post.title)}
                        className="w-7 h-7 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      >
                        <Linkedin size={14} />
                      </button>
                      <button
                        onClick={() => shareOnSocial("whatsapp", post.title)}
                        className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      >
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-slate-200">Get the latest insurance tips and financial advice delivered to your inbox.</p>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Your Email Address"
              className="bg-white h-12 rounded-lg border-none text-slate-800 flex-1"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-lg px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
