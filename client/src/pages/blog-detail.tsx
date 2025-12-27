import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, User, Facebook, Share2, Linkedin, ArrowLeft, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";

const whatsappUrl = "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

export default function BlogDetail() {
  const params = useParams();
  // Using 'id' from wouter params but treating it as slug based on App.tsx route
  const slug = params.id as string;
  const post = blogPosts.find((p) => p.slug === slug || p.id === slug);

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

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Insurance Lab",
            "logo": {
              "@type": "ImageObject",
              "url": "https://insurancelab.in/assets/Insurancelablogo-removebg-preview_1766038794097.png"
            }
          },
          "datePublished": post.date, // Note: Should ideally be ISO format
          "description": post.excerpt
        })}
      </script>

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
            className="rounded-2xl overflow-hidden mb-12 h-96 shadow-xl"
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">{post.title}</h1>
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
            className="flex items-center gap-4 mb-12 pb-12 border-b border-slate-100"
          >
            <span className="text-sm font-bold text-slate-500">Share:</span>
            <button
              onClick={() => shareOnSocial("facebook")}
              className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="Share on Facebook"
            >
              <Facebook size={18} />
            </button>
            <button
              onClick={() => shareOnSocial("twitter")}
              className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg"
              aria-label="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
            <button
              onClick={() => shareOnSocial("linkedin")}
              className="w-10 h-10 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <button
              onClick={() => shareOnSocial("whatsapp")}
              className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
              aria-label="Share on WhatsApp"
            >
              <Share2 size={18} />
            </button>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary prose-a:text-secondary prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-20 pt-12 border-t border-slate-100"
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/10 p-8 md:p-12 rounded-2xl text-center md:text-left md:flex items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Ready to Protect Your Future?</h3>
                <p className="text-slate-600 mb-6 md:mb-0">
                  Based on this article, you might benefit from our comprehensive insurance solutions.
                </p>
              </div>
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg shrink-0"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
