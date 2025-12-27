import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  CheckCircle,
  Shield,
  FileText,
  Clock,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GetQuote() {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    "Health Insurance",
    "Life Insurance",
    "Car Insurance",
    "Business Insurance",
    "Travel Insurance",
    "Investment Plans",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `*New Quote Request*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${selectedService || "Not specified"}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917303177489?text=${encodedText}`, "_blank");
  };

  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1 mb-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs">
                  Fast & Easy Process
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Get Your Free <span className="text-secondary">Insurance Quote</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Compare plans from top insurers and find the perfect coverage for your needs. Simple, transparent, and completely free.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            
            {/* Left Column: Value Props */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Insurance Lab?</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Trusted Partners</h4>
                      <p className="text-sm text-slate-500">We work with India's leading insurance providers to get you the best deals.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Custom Plans</h4>
                      <p className="text-sm text-slate-500">Tailored insurance solutions that match your specific requirements and budget.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Quick Support</h4>
                      <p className="text-sm text-slate-500">24/7 dedicated support for claims assistance and policy renewals.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="bg-primary/5 rounded-xl p-4">
                    <p className="text-sm font-medium text-primary italic">
                      "Insurance Lab helped me save 30% on my health insurance premium while getting better coverage."
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-8 h-8 rounded-full bg-slate-300"></div>
                      <span className="text-xs font-bold text-slate-600">Rahul Sharma, Indore</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 p-6">
                  <h2 className="text-2xl font-bold text-primary">Request a Quote</h2>
                  <p className="text-slate-500 text-sm mt-1">Fill out the form below and our experts will get back to you shortly.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Full Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Phone Number</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210" 
                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Email Address</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Insurance Type</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full h-12 px-4 border border-slate-200 rounded-lg flex items-center justify-between bg-slate-50 hover:bg-white hover:border-secondary transition-all text-left"
                      >
                        <span className={selectedService ? "text-slate-900" : "text-slate-400"}>
                          {selectedService || "Select insurance type..."}
                        </span>
                        <ChevronDown size={18} className={cn("transition-transform text-slate-400", isDropdownOpen && "rotate-180")} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => {
                                setSelectedService(service);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-4 py-3 text-left hover:bg-slate-50 hover:text-secondary transition-colors border-b border-slate-50 last:border-0 text-sm font-medium"
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your specific requirements..."
                      className="w-full h-32 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary focus:bg-white bg-slate-50 resize-none transition-all"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Get Insured in 3 Simple Steps
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Fill Details",
                desc: "Provide your basic details and requirements in the form above."
              },
              {
                step: "02",
                title: "Compare Quotes",
                desc: "Our experts will analyze your needs and provide the best quotes."
              },
              {
                step: "03",
                title: "Get Insured",
                desc: "Choose the best plan and get your policy instantly."
              }
            ].map((item, i) => (
              <div key={i} className="relative group text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-500 max-w-xs mx-auto">{item.desc}</p>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-2/3 w-2/3 h-0.5 bg-slate-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}