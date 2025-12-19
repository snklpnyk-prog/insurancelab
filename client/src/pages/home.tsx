import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Shield,
  Users,
  Briefcase,
  Car,
  Home as HomeIcon,
  Activity,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Zap,
  TrendingUp,
  CheckCircle,
  Share2,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assets
import heroBg from "@assets/generated_images/insurance_consultation_with_happy_family.png";
import aboutImg from "@assets/generated_images/insurancebaout.png";
import whyUsImg from "@assets/generated_images/insurancewhychooseus.png";
import ctaBg from "@assets/generated_images/abstract_royal_blue_background.png";
import blog1 from "@assets/generated_images/home_insurance_concept.png";
import blog2 from "@assets/generated_images/business_growth_analysis.png";
import blog3 from "@assets/generated_images/car_insurance_assistance.png";
import serviceHome from "@assets/generated_images/luxury_home_interior_design.png";
import serviceHealth from "@assets/generated_images/professional_health_insurance_concept.png";
import serviceBusiness from "@assets/generated_images/modern_business_office_building.png";
import serviceCar from "@assets/generated_images/premium_luxury_car_photography.png";
import personalinsurance from "@assets/generated_images/insurance_four.avif";
import businessinsurance from "@assets/generated_images/businessinsurance.jpg";
import investment from "@assets/generated_images/investment-5318530_1280.jpg";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const whatsappNumber = "+917303177489";
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

export default function Home() {
  const [blogSlideIndex, setBlogSlideIndex] = useState(0);
  const [, setLocation] = useLocation();

  const shareOnSocial = (platform: string, title: string, url: string) => {
    let shareUrl = "";
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
      <Header isTransparent={true} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Insurance Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-2 mb-2 mt-5"
            >
              <span className="h-1 w-10 bg-secondary inline-block rounded-full"></span>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                Welcome to Insurance Lab
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-2"
            >
              Comprehensive insurance solutions for every{" "}
              <span className="text-secondary">stage of life</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed"
            >
              We provide scientific risk assessment and tailored protection
              plans for families and businesses. Your future, secured by our
              expertise.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 rounded-full h-14 text-lg shadow-lg hover:shadow-secondary/50 transition-all cursor-pointer"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                GET STARTED
              </Button>
              <a href="#services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary hover:bg-white hover:text-primary font-bold px-8 rounded-full h-14 text-lg bg-white/10 backdrop-blur-sm w-full"
                >
                  <ArrowRight className="w-5 h-5 mr-2" /> EXPLORE NOW
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex gap-8 border-t border-white/20 pt-4 pb-4"
            >
              <div>
                <h4 className="text-3xl font-bold text-white">25k+</h4>
                <p className="text-slate-300 text-sm">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">98%</h4>
                <p className="text-slate-300 text-sm">Satisfaction Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="About Us"
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block z-10 border-l-4 border-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Founded by</p>
                    <p className="font-bold text-primary">Anshul Purohit</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Our mission is to turn uncertainty into confidence through
                  scientific risk management."
                </p>
              </div>
              <div className="absolute top-10 -left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-secondary inline-block rounded-full"></span>
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                  About Company
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Comprehensive Insurance <br /> Solutions for Every Need
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At Insurance Lab, we blend industry expertise with data-driven
                insights to provide protection that actually works when you need
                it most.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Scientific Risk Assessment Models",
                  "24/7 Claims Advocacy & Support",
                  "Tailored B2B & B2C Solutions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-6 items-center">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg shadow-lg">
                  More About Us
                </Button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center text-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">
                      Call Anytime
                    </p>
                    <p className="font-bold text-primary text-lg">
                      +91 73031 77489
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Comprehensive Insurance Services
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: HomeIcon,
                title: "Home Insurance",
                desc: "Protect your sanctuary with comprehensive coverage against damage and theft.",
                image: serviceHome,
              },
              {
                icon: Activity,
                title: "Life Insurance",
                desc: "Secure your family's financial future with our flexible term and whole life plans.",
                image: serviceHealth,
              },
              {
                icon: Briefcase,
                title: "Business Insurance",
                desc: "Safeguard your enterprise with liability, property, and employee coverage.",
                image: serviceBusiness,
              },
              {
                icon: Car,
                title: "Car Insurance",
                desc: "Drive with confidence knowing you're protected against accidents and liabilities.",
                image: serviceCar,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-secondary"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-4">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-primary uppercase group-hover:translate-x-2 transition-transform"
                    data-testid={`link-service-details-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Read More{" "}
                    <ArrowRight size={16} className="text-secondary" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Service Sections */}
          <div className="space-y-20">
            {/* Personal Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-4">
                    Personal Insurance
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Comprehensive protection for every stage of your life. From
                    health coverage to personal accident insurance, we ensure
                    you and your loved ones are always protected.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Health Insurance Plans",
                      "Personal Accident Coverage",
                      "Travel Insurance",
                      "Critical Illness Protection",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-secondary" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold cursor-pointer"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    Get Quote
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl h-80 flex items-center justify-center">
                  {/* <Users size={120} className="text-primary/30" /> */}
                  <img
                    src={personalinsurance}
                    alt="personal insurance"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Business Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/10 rounded-2xl h-80 flex items-center justify-center">
                  <img
                    src={businessinsurance}
                    alt="personal insurance"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4">
                    Business Insurance
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Enterprise-level advisory and protection for your business.
                    Secure your operations with comprehensive coverage tailored
                    to your industry.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "General Liability Coverage",
                      "Professional Indemnity",
                      "Employee Benefits",
                      "Property & Asset Protection",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-secondary" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold cursor-pointer"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    Talk to Business Expert
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Investments & Loans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-4">
                    Investments & Loans
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Grow your wealth with our investment advisory services.
                    Access expert guidance on mutual funds, crypto investments,
                    and loan assistance tailored to your goals.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Mutual Fund Advisory",
                      "Crypto Investment Guidance",
                      "Domain Investing",
                      "Loan Assistance Programs",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-secondary" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold cursor-pointer"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    Get Started
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl h-80 flex items-center justify-center">
                  <img
                    src={investment}
                    alt="personal insurance"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Claim Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <h3 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
                Claim Services - Fast & Hassle-Free
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    num: "1",
                    title: "File Claim",
                    desc: "Submit your claim details through our easy online platform",
                  },
                  {
                    num: "2",
                    title: "Assessment",
                    desc: "Our experts review and verify your claim quickly",
                  },
                  {
                    num: "3",
                    title: "Settlement",
                    desc: "Receive your settlement amount within 24-48 hours",
                  },
                ].map((step) => (
                  <div key={step.num} className="text-center">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="font-bold text-primary mb-3">
                    Success Case Study
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Customer recovered ₹5 Lakhs in claim settlement within 48
                    hours with our expert advocacy.
                  </p>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-secondary fill-secondary" />
                    <span className="text-sm font-bold text-primary">
                      Highly Satisfied
                    </span>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="font-bold text-primary mb-3">
                    Another Success Story
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Business recovered ₹20 Lakhs through our comprehensive claim
                    advocacy services.
                  </p>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-secondary fill-secondary" />
                    <span className="text-sm font-bold text-primary">
                      Highly Satisfied
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold cursor-pointer"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  File a Claim Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-secondary inline-block rounded-full"></span>
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Why you should choose our <br /> insurance policies
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We don't just sell policies; we build relationships based on
                trust, transparency, and scientific risk analysis.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "100% Safe Money",
                    desc: "Your investments and premiums are backed by top-tier security.",
                  },
                  {
                    icon: Clock,
                    title: "Fast Claim Process",
                    desc: "We settle claims faster than the industry average with less paperwork.",
                  },
                  {
                    icon: Users,
                    title: "Expert Support",
                    desc: "Dedicated advisors available to guide you through every step.",
                  },
                  {
                    icon: Star,
                    title: "Top Rated",
                    desc: "Consistently rated 5-stars by our satisfied clients.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-10 bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full shadow-lg">
                Discover More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={whyUsImg} alt="Team Discussion" className="w-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-secondary/10 rounded-3xl -z-10"></div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] text-center hidden md:block">
                <div className="text-4xl font-extrabold text-secondary mb-1">
                  20+
                </div>
                <p className="text-primary font-bold text-sm">
                  Years of Experience
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                Frequently asked questions
              </h2>
              <p className="text-slate-600 mb-8">
                Can't find the answer you're looking for? Reach out to our
                customer support team.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  "What types of insurance do you offer?",
                  "How do I file a claim?",
                  "Can I customize my policy?",
                  "What is the cancellation policy?",
                ].map((q, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white border-none rounded-xl shadow-sm px-4"
                  >
                    <AccordionTrigger className="font-bold text-primary hover:text-secondary hover:no-underline py-4 text-left">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 pb-4">
                      We offer a comprehensive range of policies including home,
                      life, auto, and business insurance tailored to your
                      specific needs.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Still have questions?
                </h3>
                <p className="opacity-80 mb-8">
                  Our experts are ready to assist you with any inquiries you may
                  have about our coverage options.
                </p>

                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
                  />
                  <Input
                    placeholder="Email Address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
                  />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section with Slider */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Blog
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Latest Insurance News and Tips
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${blogSlideIndex * 100}%)`,
                }}
              >
                {[
                  {
                    id: 1,
                    img: blog1,
                    title: "10 Tips to Lower Your Home Insurance Premium",
                    date: "Dec 12, 2025",
                  },
                  {
                    id: 2,
                    img: blog2,
                    title: "Why Business Liability Coverage is Essential",
                    date: "Dec 10, 2025",
                  },
                  {
                    id: 3,
                    img: blog3,
                    title: "Understanding the Claims Process After an Accident",
                    date: "Dec 05, 2025",
                  },
                ].map((post) => (
                  <div
                    key={post.id}
                    className="w-full md:w-1/2 lg:w-1/3 px-2 flex-shrink-0"
                  >
                    <div
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group h-full"
                      data-testid={`card-blog-${post.id}`}
                    >
                      <div className="h-56 overflow-hidden relative">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          data-testid={`img-blog-${post.id}`}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Users size={12} /> Admin
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-4 leading-snug">
                          {post.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <Link href={`/blog/${post.id}`}>
                            <a
                              className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
                              data-testid={`link-read-more-blog-${post.id}`}
                            >
                              Read More <ArrowRight size={14} />
                            </a>
                          </Link>
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                shareOnSocial(
                                  "facebook",
                                  post.title,
                                  window.location.href,
                                )
                              }
                              className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                              data-testid={`button-share-facebook-${post.id}`}
                            >
                              <Facebook size={14} />
                            </button>
                            <button
                              onClick={() =>
                                shareOnSocial(
                                  "twitter",
                                  post.title,
                                  window.location.href,
                                )
                              }
                              className="w-7 h-7 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                              data-testid={`button-share-twitter-${post.id}`}
                            >
                              <Share2 size={14} />
                            </button>
                            <button
                              onClick={() =>
                                shareOnSocial(
                                  "linkedin",
                                  post.title,
                                  window.location.href,
                                )
                              }
                              className="w-7 h-7 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                              data-testid={`button-share-linkedin-${post.id}`}
                            >
                              <Linkedin size={14} />
                            </button>
                            <button
                              onClick={() =>
                                shareOnSocial(
                                  "whatsapp",
                                  post.title,
                                  window.location.href,
                                )
                              }
                              className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                              data-testid={`button-share-whatsapp-${post.id}`}
                            >
                              <Share2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setBlogSlideIndex(Math.max(0, blogSlideIndex - 1))
                }
                disabled={blogSlideIndex === 0}
                className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-blog-prev"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setBlogSlideIndex(i)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      blogSlideIndex === i ? "bg-secondary" : "bg-slate-300",
                    )}
                    data-testid={`button-blog-dot-${i}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setBlogSlideIndex(Math.min(2, blogSlideIndex + 1))
                }
                disabled={blogSlideIndex === 2}
                className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-blog-next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IRDAI Certification Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="w-40 h-40 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-secondary relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
                <Award
                  size={64}
                  className="text-secondary mb-2"
                  data-testid="icon-certification"
                />
                <p className="text-sm font-bold text-primary text-center px-2">
                  Certified
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                  Trust & Credibility
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 leading-tight">
                IRDAI Certified Insurance Provider
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Insurance Lab is officially certified by the Insurance
                Regulatory and Development Authority of India (IRDAI). This
                certification ensures that all our insurance products and
                services meet the highest standards of quality, compliance, and
                customer protection established by India's insurance regulator.
              </p>
              <div className="space-y-3">
                {[
                  "100% Regulatory Compliant",
                  "Customer Protection Guaranteed",
                  "Transparent Pricing & Policies",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white">
                <Mail size={32} />
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold">
                  Stay informed with our newsletter
                </h3>
                <p className="text-slate-300">
                  Get the latest news and offers directly to your inbox.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
              <Input
                placeholder="Your Email Address"
                className="bg-white h-12 rounded-lg border-none text-slate-800 md:w-80 w-full"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-lg px-6 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
