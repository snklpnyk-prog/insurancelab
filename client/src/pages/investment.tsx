import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  TrendingUp,
  PieChart,
  Landmark,
  Bitcoin,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import investHeroImg from "@assets/generated_images/investment_and_financial_growth_concept.png";

const whatsappUrl =
  "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20investment%20options.";

export default function Investment() {
  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Diversify. Grow. <br />
                <span className="text-secondary">Secure Your Future.</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-xl">
                Whether you're a conservative saver or an aggressive wealth
                creator, choosing the right investment option is key to meeting
                your goals. Explore our curated range of investment
                opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Meet an Advisor
                </Button>
                {/* <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-6 rounded-lg text-lg"
                >
                  Explore Options
                </Button> */}
              </div>

              <div className="mt-8 flex flex-col gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary" />
                  <span>Risk assessment & goal-based planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary" />
                  <span>SEBI-registered advisors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary" />
                  <span>Transparent charges & apt tracking tools</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              {/* Placeholder for the investment hero image if generated */}
              <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-secondary/20 to-white/10 backdrop-blur-3xl absolute -z-10 blur-3xl"></div>
              <img
                src={investHeroImg}
                alt="Investment Growth"
                className="w-full rounded-2xl shadow-2xl border border-white/10"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1000")
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Investment Options
            </h2>
            <p className="text-lg text-slate-600">
              Choose from diversified instruments tailored to your risk profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mutual Funds */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <PieChart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Mutual Funds
              </h3>
              <p className="text-slate-600 mb-6">
                Professionally managed diversified portfolios with SIP and
                tax-saving ELSS options.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>{" "}
                  Options across equity, debt, hybrid
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> SIP
                  (Systematic Investment Plan)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>{" "}
                  Tax-saving ELSS under Section 80C
                </li>
              </ul>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6"
                onClick={() => {
                  window.open(
                    "https://wa.me/917303177489?text=Hello, I am interested in investing in Mutual Funds. Please guide me.",
                    "_blank",
                  );
                }}
              >
                Invest in Mutual Funds
              </Button>
            </motion.div>

            {/* Crypto */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Bitcoin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Crypto</h3>
              <p className="text-slate-600 mb-6">
                High-return potential in a fast-growing digital economy. Invest
                responsibly.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>{" "}
                  Access Bitcoin, Ethereum, Solana
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>{" "}
                  24/7 decentralized markets
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>{" "}
                  High-risk allocation
                </li>
              </ul>

              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6"
                onClick={() => {
                  window.open(
                    "https://wa.me/917303177489?text=Hello, I am interested in investing in Mutual Funds. Please guide me.",
                    "_blank",
                  );
                }}
              >
                Explore Crypto
              </Button>
            </motion.div>

            {/* Domain */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Landmark size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Domain Name
              </h3>
              <p className="text-slate-600 mb-6">
                Invest in high-potential digital real estate with premium resale
                and leasing options.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> A
                  domain is your digital identity
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>{" "}
                  Strong brand identity with low cost
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>{" "}
                  Secure your Brand Name
                </li>
              </ul>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6"
                onClick={() => {
                  window.open(
                    "https://wa.me/917303177489?text=Hello, I am interested in investing in Mutual Funds. Please guide me.",
                    "_blank",
                  );
                }}
              >
                Browse Domains
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Loans & Credit Solutions
                </h2>
                <p className="text-lg text-slate-200 mb-8">
                  Smart financing for your goals — home, education, business, or
                  personal needs. We help compare offers, optimize interest and
                  tenure, and navigate documentation with trusted banking
                  partners.
                </p>
                <Button
                  className="bg-white text-primary hover:bg-slate-100 font-bold px-8 py-6 rounded-lg text-lg"
                  onClick={() => {
                    window.open(
                      "https://wa.me/917303177489?text=Hello, I am interested in investing in Mutual Funds. Please guide me.",
                      "_blank",
                    );
                  }}
                >
                  Check Loan Eligibility
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Home Loans", icon: "🏠" },
                  { label: "Education", icon: "🎓" },
                  { label: "Business", icon: "💼" },
                  { label: "Personal", icon: "👤" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors cursor-default"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">
            What our clients say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Insurance Lab helped me pick ELSS and a balanced fund that fit my tax and growth goals. Super smooth.",
                author: "Riya S., Mumbai",
                title: "Clear guidance for my first SIP",
              },
              {
                text: "They compared multiple banks and saved me 1.2% on interest with a shorter tenure.",
                author: "Arjun K., Bengaluru",
                title: "Got the best rate for my education loan",
              },
              {
                text: "I bought two brandable .in domains and flipped one within 3 months. Great tips from the team.",
                author: "Neha P., Pune",
                title: "Domain investing made simple",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <div className="text-4xl text-secondary opacity-30 absolute top-4 right-6">
                  "
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">
                  "{item.title}"
                </h3>
                <p className="text-slate-600 mb-6 italic">{item.text}</p>
                <div className="font-bold text-secondary border-t pt-4 border-slate-100">
                  {item.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
