import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Check, Shield, Users, Briefcase, 
  Car, Home as HomeIcon, Activity, Phone, Mail, MapPin, 
  ArrowRight, Star, ChevronDown, Play, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Assets
import heroBg from "@assets/generated_images/insurance_consultation_with_happy_family.png";
import aboutImg from "@assets/generated_images/corporate_advisor_shaking_hands.png";
import whyUsImg from "@assets/generated_images/team_of_professionals_discussing.png";
import ctaBg from "@assets/generated_images/abstract_royal_blue_background.png";
import blog1 from "@assets/generated_images/home_insurance_concept.png";
import blog2 from "@assets/generated_images/business_growth_analysis.png";
import blog3 from "@assets/generated_images/car_insurance_assistance.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-600">
      {/* Sticky Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn("text-2xl font-heading font-bold leading-none", isScrolled ? "text-primary" : "text-white")}>
                Insurance Lab
              </span>
              <span className={cn("text-xs font-medium tracking-wider", isScrolled ? "text-slate-500" : "text-slate-200")}>
                YOUR SAFETY, OUR SCIENCE
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Pages", "Blog", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide hover:text-secondary transition-colors",
                  isScrolled ? "text-slate-700" : "text-slate-100"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-primary" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t absolute w-full left-0 top-full shadow-xl"
            >
              <div className="flex flex-col p-4 gap-4">
                {["Home", "About", "Services", "Pages", "Blog", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-primary font-bold py-2 border-b border-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button className="bg-secondary text-white w-full mt-2">GET A QUOTE</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Insurance Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-4">
              <span className="h-1 w-10 bg-secondary inline-block rounded-full"></span>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Welcome to Insurance Lab</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6">
              Comprehensive insurance solutions for every <span className="text-secondary">stage of life</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
              We provide scientific risk assessment and tailored protection plans for families and businesses. Your future, secured by our expertise.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 rounded-full h-14 text-lg shadow-lg hover:shadow-secondary/50 transition-all">
                GET STARTED
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary font-bold px-8 rounded-full h-14 text-lg bg-white/10 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2 fill-current" /> WATCH VIDEO
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex gap-8 border-t border-white/20 pt-8">
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
      <section id="about" className="py-20 md:py-32 bg-white">
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
                <img src={aboutImg} alt="About Us" className="w-full object-cover" />
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
                <p className="text-sm text-slate-600 italic">"Our mission is to turn uncertainty into confidence through scientific risk management."</p>
              </div>
              {/* Decorative elements */}
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
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">About Company</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Comprehensive Insurance <br /> Solutions for Every Need
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At Insurance Lab, we blend industry expertise with data-driven insights to provide protection that actually works when you need it most.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Scientific Risk Assessment Models",
                  "24/7 Claims Advocacy & Support",
                  "Tailored B2B & B2C Solutions"
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
                    <p className="text-xs text-slate-500 uppercase font-bold">Call Anytime</p>
                    <p className="font-bold text-primary text-lg">+1 (234) 567-890</p>
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
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Comprehensive Insurance Services
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: "Home Insurance", desc: "Protect your sanctuary with comprehensive coverage against damage and theft." },
              { icon: Activity, title: "Life Insurance", desc: "Secure your family's financial future with our flexible term and whole life plans." },
              { icon: Briefcase, title: "Business Insurance", desc: "Safeguard your enterprise with liability, property, and employee coverage." },
              { icon: Car, title: "Car Insurance", desc: "Drive with confidence knowing you're protected against accidents and liabilities." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-secondary relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon size={100} />
                </div>
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.desc}</p>
                <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary uppercase group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={16} className="text-secondary" />
                </a>
              </motion.div>
            ))}
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
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Why you should choose our <br /> insurance policies
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We don't just sell policies; we build relationships based on trust, transparency, and scientific risk analysis.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "100% Safe Money", desc: "Your investments and premiums are backed by top-tier security." },
                  { icon: Clock, title: "Fast Claim Process", desc: "We settle claims faster than the industry average with less paperwork." },
                  { icon: Users, title: "Expert Support", desc: "Dedicated advisors available to guide you through every step." },
                  { icon: Star, title: "Top Rated", desc: "Consistently rated 5-stars by our satisfied clients." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
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
                <div className="text-4xl font-extrabold text-secondary mb-1">20+</div>
                <p className="text-primary font-bold text-sm">Years of Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Insurance process easy steps to <br/> get covered
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

            {[
              { num: "01", title: "Choose Service", desc: "Select the insurance plan that fits your needs." },
              { num: "02", title: "Get A Quote", desc: "Receive a tailored quote instantly online." },
              { num: "03", title: "Meeting/Verify", desc: "Discuss with our experts to finalize details." },
              { num: "04", title: "Get Covered", desc: "Enjoy complete peace of mind immediately." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 border-4 border-slate-50 shadow-md group-hover:bg-secondary transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Features</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Discover our key Insurance features
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { val: "$500K+", label: "Safe Money", icon: Shield },
               { val: "2,500+", label: "Happy Clients", icon: Users },
               { val: "97%", label: "Success Rate", icon: Star },
               { val: "50+", label: "Team Members", icon: Briefcase },
             ].map((stat, i) => (
               <div key={i} className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                 <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                   <stat.icon size={32} />
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.val}</h3>
                 <p className="text-slate-500 font-medium">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <img src={aboutImg} alt="Advisor" className="rounded-l-full rounded-t-full border-8 border-white/20 shadow-2xl max-w-sm ml-auto md:ml-0" />
               <div className="absolute bottom-10 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg">
                 <Play className="fill-white w-6 h-6" />
               </div>
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                What matters most get your free insurance quote today!
              </h2>
              <p className="text-slate-200 text-lg mb-8 max-w-lg">
                Stop worrying about the "what ifs" and start living with confidence. Our team is ready to build the perfect safety net for you.
              </p>
              <Button className="bg-white text-primary hover:bg-slate-100 font-bold px-8 py-6 rounded-full text-lg">
                Get A Quote Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Pricing</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Insurance pricing plans affordable <br/> coverage for every budget
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Basic Plan", price: "$19", color: "bg-white", text: "text-primary", btn: "outline" },
              { name: "Standard Plan", price: "$49", color: "bg-primary text-white", text: "text-white", btn: "solid", popular: true },
              { name: "Premium Plan", price: "$89", color: "bg-white", text: "text-primary", btn: "outline" }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={cn(
                  "rounded-3xl p-8 shadow-xl relative transition-transform hover:-translate-y-2", 
                  plan.color,
                  plan.popular ? "scale-105 z-10 border-4 border-secondary" : "border border-slate-200"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="opacity-70">/month</span>
                </div>
                <h3 className={cn("text-xl font-bold mb-6", plan.text)}>{plan.name}</h3>
                
                <ul className="space-y-4 mb-8">
                  {["Medical Insurance", "Personal Accident", "Home Protection", "Vehicle Coverage"].map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={18} className={plan.popular ? "text-secondary" : "text-primary"} />
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn(
                    "w-full py-6 rounded-full font-bold",
                    plan.popular ? "bg-secondary hover:bg-secondary/90 text-white border-none" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">We're here to help, 24/7.</h2>
          <div className="flex justify-center -space-x-4 mb-8">
             {[1,2,3,4,5].map((i) => (
               <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Support" className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
          <div className="flex justify-center gap-8">
             <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                 <Phone size={18} />
               </div>
               <div className="text-left">
                 <p className="text-xs text-slate-500">Call Us</p>
                 <p className="font-bold text-primary">+1 (234) 567-89</p>
               </div>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                 <Mail size={18} />
               </div>
               <div className="text-left">
                 <p className="text-xs text-slate-500">Email Us</p>
                 <p className="font-bold text-primary">help@insurancelab.com</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-12">
             <div>
               <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">FAQ</span>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                 Frequently asked questions
               </h2>
               <p className="text-slate-600 mb-8">
                 Can't find the answer you're looking for? Reach out to our customer support team.
               </p>
               
               <Accordion type="single" collapsible className="w-full space-y-4">
                 {[
                   "What types of insurance do you offer?",
                   "How do I file a claim?",
                   "Can I customize my policy?",
                   "What is the cancellation policy?"
                 ].map((q, i) => (
                   <AccordionItem key={i} value={`item-${i}`} className="bg-white border-none rounded-xl shadow-sm px-4">
                     <AccordionTrigger className="font-bold text-primary hover:text-secondary hover:no-underline py-4 text-left">
                       {q}
                     </AccordionTrigger>
                     <AccordionContent className="text-slate-500 pb-4">
                       We offer a comprehensive range of policies including home, life, auto, and business insurance tailored to your specific needs.
                     </AccordionContent>
                   </AccordionItem>
                 ))}
               </Accordion>
             </div>
             
             <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                 <p className="opacity-80 mb-8">
                   Our experts are ready to assist you with any inquiries you may have about our coverage options.
                 </p>
                 
                 <form className="space-y-4">
                   <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl" />
                   <Input placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl" />
                   <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl">
                     Send Message
                   </Button>
                 </form>
               </div>
               
               {/* Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Testimonials</span>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                 Real stories, real trust hear from our satisfied clients
               </h2>
               <p className="text-slate-600 mb-8">
                 See what our customers have to say about their experience with Insurance Lab.
               </p>
               <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-full font-bold shadow-lg">
                 View All Reviews
               </Button>
             </div>
             
             <div className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="absolute top-8 right-8 text-secondary opacity-20">
                  <span className="text-9xl font-serif">"</span>
                </div>
                <p className="text-lg text-slate-600 italic mb-8 relative z-10">
                  "I was overwhelmed by the options until I found Insurance Lab. Anshul and his team made it incredibly clear which policy was right for my family business. The peace of mind is priceless."
                </p>
                <div className="flex items-center gap-4">
                   <img src="https://i.pravatar.cc/150?img=32" alt="Client" className="w-14 h-14 rounded-full" />
                   <div>
                     <h4 className="font-bold text-primary">Sarah Jenkins</h4>
                     <p className="text-sm text-secondary">Business Owner</p>
                   </div>
                </div>
                
                <div className="flex gap-2 mt-8 justify-end">
                   <Button size="icon" variant="outline" className="rounded-full border-slate-300 hover:bg-primary hover:text-white hover:border-primary">
                     <ArrowRight className="rotate-180" size={18} />
                   </Button>
                   <Button size="icon" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                     <ArrowRight size={18} />
                   </Button>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Blog</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Latest Insurance News and Tips
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: blog1, title: "10 Tips to Lower Your Home Insurance Premium", date: "Dec 12, 2025" },
              { img: blog2, title: "Why Business Liability Coverage is Essential", date: "Dec 10, 2025" },
              { img: blog3, title: "Understanding the Claims Process After an Accident", date: "Dec 05, 2025" }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="h-56 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Users size={12} /> Admin</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 leading-snug hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:underline mt-2">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
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
                <h3 className="text-2xl font-bold">Stay informed with our newsletter</h3>
                <p className="text-slate-300">Get the latest news and offers directly to your inbox.</p>
              </div>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input placeholder="Your Email Address" className="bg-white h-12 rounded-lg border-none text-slate-800 md:w-80" />
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-lg px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010647] text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-white">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xl font-heading font-bold text-white">Insurance Lab</span>
              </div>
              <p className="mb-6 leading-relaxed text-sm">
                Insurance Lab provides scientific risk assessment and tailored protection plans. Your safety is our science.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                {['facebook', 'twitter', 'linkedin', 'instagram'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/5 hover:bg-secondary rounded-full flex items-center justify-center transition-colors text-white">
                     <span className="capitalize sr-only">{social}</span>
                     {/* Using placeholders for social icons */}
                     <Users size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {["Home", "About Us", "Our Services", "Claims", "Terms & Conditions", "Privacy Policy"].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3 text-sm">
                {["Life Insurance", "Car Insurance", "Health Insurance", "House Insurance", "Business Insurance", "Travel Insurance"].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm">
                 <li className="flex items-start gap-3">
                   <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                   <span>123 Insurance Blvd, Financial District, New York, NY 10005</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Phone className="text-secondary shrink-0" size={18} />
                   <span>+1 (234) 567-890</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Mail className="text-secondary shrink-0" size={18} />
                   <span>contact@insurancelab.com</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Clock className="text-secondary shrink-0" size={18} />
                   <span>Mon - Fri: 09:00 - 18:00</span>
                 </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
             <p>&copy; 2025 Insurance Lab. All Rights Reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Use</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
