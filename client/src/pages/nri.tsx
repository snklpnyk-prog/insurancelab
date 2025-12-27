import { motion } from "framer-motion";
import { 
  Globe, 
  TrendingUp, 
  Heart, 
  Home, 
  FileText, 
  Phone, 
  ArrowRight, 
  Calendar 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assets
import heroBg from "@assets/generated_images/nri_connecting_with_roots.png";
import investmentImg from "@assets/generated_images/investment_in_india_concept.png";
import parentsImg from "@assets/generated_images/parental_health_care_in_india.png";
import propertyImg from "@assets/generated_images/luxury_home_interior_design.png"; // reusing existing asset

const services = [
  {
    title: "Investment in India",
    description: "Expert guidance on high-growth Indian mutual funds, pre-IPO opportunities, and PMS strategies tailored for NRI investors.",
    icon: TrendingUp,
    image: investmentImg,
    features: ["Mutual Funds & SIPs", "Portfolio Management", "Pre-IPO Stocks"]
  },
  {
    title: "Parental Health & Care",
    description: "Comprehensive health insurance and care coordination for your parents back home. We ensure they get the best medical attention.",
    icon: Heart,
    image: parentsImg,
    features: ["Senior Citizen Insurance", "Cashless Hospitalization", "Emergency Support"]
  },
  {
    title: "Property Management",
    description: "Complete real estate solutions from buying to managing rentals. We handle the paperwork while you enjoy the returns.",
    icon: Home,
    image: propertyImg,
    features: ["Property Purchase", "Tenant Management", "Legal Due Diligence"]
  },
  {
    title: "Tax & Compliance",
    description: "Navigating Indian tax laws can be complex. Our experts help you stay compliant with FEMA regulations and tax filing.",
    icon: FileText,
    image: null, // No image for this one, utilizing layout variation
    features: ["FEMA Compliance", "Tax Filing", "Repatriation Services"]
  }
];

export default function NRI() {
  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="NRI Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020a7f]/90 via-[#020a7f]/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe className="text-secondary" />
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                Global Indian Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
              Bridging the Distance to <span className="text-secondary">Your Roots</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Specialized financial and care solutions designed exclusively for Non-Resident Indians. 
              Manage your wealth and protect your family in India with confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 rounded-full h-14 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('schedule-meeting')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-12 bg-white -mt-10 relative z-20 container mx-auto px-4 md:px-6 rounded-t-3xl shadow-xl md:shadow-none md:bg-transparent md:p-0">
        <div className="md:bg-white md:rounded-3xl md:shadow-xl md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-4">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-slate-500 font-medium">NRI Families Served</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-primary mb-2">₹100Cr+</h3>
              <p className="text-slate-500 font-medium">Assets Under Management</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-primary mb-2">25+</h3>
              <p className="text-slate-500 font-medium">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Tailored Solutions for Global Indians
            </h2>
            <p className="text-slate-600">
              We understand the unique challenges of managing interests in India from abroad.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
              >
                <div className="flex-1 w-full">
                  {service.image ? (
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className="bg-primary text-white rounded-3xl p-12 aspect-[4/3] flex flex-col justify-center shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-20 bg-secondary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                      <service.icon size={64} className="mb-6 text-secondary" />
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-slate-200 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                          <ArrowRight size={14} />
                        </div>
                        <span className="font-semibold text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="schedule-meeting" className="py-20 bg-[#020a7f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Calendar className="text-secondary" size={20} />
              <span className="font-bold tracking-wide text-sm">BOOK A CONSULTATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Let's Discuss Your Financial Goals
            </h2>
            <p className="text-xl text-slate-300">
              Schedule a 1-on-1 virtual meeting with Anshul Purohit. 
              No commitment required - just expert advice.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto h-[700px]">
            <InlineWidget 
              url="https://calendly.com/insurancelabs2" 
              styles={{
                height: '100%',
                width: '100%'
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
