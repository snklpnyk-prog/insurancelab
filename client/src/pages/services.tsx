import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home as HomeIcon, Activity, Briefcase, Car, Users, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/Insurancelablogo-removebg-preview_1766038794097.png";
import homeImg from "@assets/generated_images/home_insurance_concept.png";
import lifeImg from "@assets/generated_images/life_insurance_family.png";
import businessImg from "@assets/generated_images/business_insurance_meeting.png";
import carImg from "@assets/generated_images/car_insurance_protection.png";
import personalImg from "@assets/generated_images/personal_health_insurance.png";
import investImg from "@assets/generated_images/investment_and_loans.png";

const whatsappUrl = "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

const services = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Home Insurance",
    shortDesc: "Protect your sanctuary",
    fullDesc: "Comprehensive home insurance coverage protecting your property against damage, theft, natural disasters, and more.",
    image: homeImg,
    features: ["Property damage coverage", "Theft & burglary protection", "Liability coverage", "Personal belongings insurance"]
  },
  {
    id: 2,
    icon: Activity,
    title: "Life Insurance",
    shortDesc: "Secure your family's future",
    fullDesc: "Flexible life insurance plans ensuring your loved ones are financially secure, with term and whole life options.",
    image: lifeImg,
    features: ["Term life insurance", "Whole life insurance", "Endowment plans", "Child education plans"]
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Business Insurance",
    shortDesc: "Safeguard your enterprise",
    fullDesc: "Enterprise-level insurance solutions for businesses of all sizes, from startups to large corporations.",
    image: businessImg,
    features: ["General liability", "Professional indemnity", "Employee benefits", "Property protection"]
  },
  {
    id: 4,
    icon: Car,
    title: "Car Insurance",
    shortDesc: "Drive with confidence",
    fullDesc: "Comprehensive auto insurance coverage for all vehicles, including third-party liability and own damage.",
    image: carImg,
    features: ["Liability coverage", "Own damage coverage", "Personal accident", "Add-on covers"]
  },
  {
    id: 5,
    icon: Users,
    title: "Personal Insurance",
    shortDesc: "Individual protection",
    fullDesc: "Comprehensive personal insurance covering health, travel, accidents, and critical illnesses.",
    image: personalImg,
    features: ["Health insurance", "Travel insurance", "Personal accident", "Critical illness cover"]
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Investments & Loans",
    shortDesc: "Grow your wealth",
    fullDesc: "Expert investment advisory and loan assistance services to help you build and manage your financial portfolio.",
    image: investImg,
    features: ["Mutual funds", "Crypto advisory", "Domain investing", "Loan assistance"]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans text-slate-600">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md py-3">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Insurance Lab" className="h-10 w-auto" />
            </a>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">About</a>
            </Link>
            <a href="/services" className="text-sm font-semibold uppercase tracking-wide text-secondary">Services</a>
            <Link href="/blog">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">Contact</a>
            </Link>
          </nav>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 rounded-full"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            GET A QUOTE
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-200">Comprehensive insurance and financial solutions tailored to your unique needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer border-b-4 border-transparent hover:border-secondary overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.shortDesc}</p>
                  <a href="#" className="flex items-center gap-2 text-secondary font-bold text-sm">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Details */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 p-12 rounded-2xl mb-20"
            >
              {services.map((service) => 
                service.id === selectedService && (
                  <div key={service.id}>
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-20 h-20 bg-secondary text-white rounded-2xl flex items-center justify-center shrink-0">
                        <service.icon size={40} />
                      </div>
                      <div>
                        <h2 className="text-4xl font-heading font-bold text-primary mb-4">{service.title}</h2>
                        <p className="text-lg text-slate-600">{service.fullDesc}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-6">Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle size={20} className="text-secondary shrink-0" />
                              <span className="text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-8 rounded-xl">
                        <h4 className="text-xl font-bold text-primary mb-4">Get Started</h4>
                        <p className="text-slate-600 mb-6">
                          Ready to protect yourself with {service.title.toLowerCase()}? Our experts are here to help you choose the perfect plan.
                        </p>
                        <Button 
                          className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 rounded-lg"
                          onClick={() => window.open(whatsappUrl, "_blank")}
                        >
                          Get a Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-heading font-bold text-primary text-center mb-16">Why Our Services Stand Out</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Customized Solutions", desc: "Each policy is tailored to your specific needs and budget." },
              { title: "Expert Guidance", desc: "Our certified advisors help you make informed decisions." },
              { title: "Fast Processing", desc: "Quick approval and claim settlement in 24-48 hours." },
              { title: "Transparent Pricing", desc: "No hidden charges. Complete clarity on all costs." },
              { title: "24/7 Support", desc: "Round-the-clock customer support when you need it." },
              { title: "Digital Convenience", desc: "Apply online and manage your policies on the go." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Get Protected?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Choose the right insurance plan for your needs today.</p>
          <Button 
            className="bg-white text-primary hover:bg-slate-100 px-8 py-6 rounded-full font-bold text-lg"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            Explore Plans Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010647] text-slate-300 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <img src={logo} alt="Insurance Lab" className="h-8 w-auto mx-auto mb-6" />
          <p>&copy; 2025 Insurance Lab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
