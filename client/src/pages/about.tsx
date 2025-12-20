import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Shield, Zap, Target, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImg from "@assets/generated_images/insurancebaout.png";
import whyUsImg from "@assets/generated_images/team_of_professionals_discussing.png";

const whatsappUrl =
  "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

export default function About() {
  return (
    <div className="min-h-screen font-sans text-slate-600">
      <Header />

      {/* Hero Section */}
      <section className="pt-22 pb-10 bg-primary text-white ">
        <div className="container mx-auto px-4 md:px-20 text-center py-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 ml-20">
              About Insurance Lab
            </h1>
            <p className="text-xl text-slate-200 mb-8 ml-20">
              Your trusted partner in comprehensive insurance solutions and
              financial protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={aboutImg}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Founded on the principle that insurance should be simple,
                transparent, and truly protective, Insurance Lab emerged from a
                vision to revolutionize the insurance industry.
              </p>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Our founder, Anshul Purohit, spent years studying risk
                management and insurance patterns. He realized that most people
                felt overwhelmed and confused by insurance policies. This
                sparked the creation of Insurance Lab—a company dedicated to
                turning uncertainty into confidence.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Today, we serve over 25,000 satisfied customers with a 98%
                satisfaction rate, providing scientific risk assessment and
                tailored protection plans for families and businesses across
                India.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full font-bold">
                Our Mission
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Mission & Values
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Security",
                desc: "We prioritize your safety and financial security above all else. Every policy is designed with meticulous care.",
              },
              {
                icon: Target,
                title: "Precision",
                desc: "Scientific risk assessment ensures you get exactly the coverage you need—no more, no less.",
              },
              {
                icon: Zap,
                title: "Speed",
                desc: "Fast claim processing and quick responses. We believe in getting things done when you need them most.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Anshul Purohit",
                role: "Founder & CEO",
                bio: "20+ years of insurance expertise",
              },
              {
                name: "Priya Singh",
                role: "Chief Operations Officer",
                bio: "Expert in claim management and customer service",
              },
              {
                name: "Rahul Sharma",
                role: "Chief Financial Officer",
                bio: "Financial advisor and risk analyst",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={64} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-bold mb-2">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Our Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "25K+", label: "Happy Customers" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "₹500Cr+", label: "Claims Settled" },
              { number: "20+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-heading font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-heading font-bold text-primary mb-16 text-center">
            Why Choose Insurance Lab?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Scientific Approach",
                desc: "We use data-driven models to assess risk accurately.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges. You know exactly what you're paying for.",
              },
              {
                title: "24/7 Support",
                desc: "Our team is always available to assist you.",
              },
              {
                title: "Fast Claims",
                desc: "Settle claims within 24-48 hours, not weeks.",
              },
              {
                title: "Customized Plans",
                desc: "Every policy is tailored to your specific needs.",
              },
              {
                title: "Expert Advisors",
                desc: "Work with certified insurance professionals.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Protect Your Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Insurance Lab for
            their protection.
          </p>
          <Button
            className="bg-white text-primary hover:bg-slate-100 px-8 py-6 rounded-full font-bold text-lg"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
