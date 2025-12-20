import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    "Personal Insurance",
    "Business Insurance",
    "Investments & Loans",
    "Claim Services",
    "Other",
  ];

  return (
    <div className="min-h-screen font-sans text-slate-600">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-200">
              We're here to help you with any questions or concerns about our
              insurance services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Contact Information
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Full Name
                  </label>
                  <Input placeholder="Your Name" className="h-12 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+91 XXXXXXXXXX"
                    className="h-12 rounded-lg"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Select Service
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-12 px-4 border border-slate-200 rounded-lg flex items-center justify-between bg-white hover:border-secondary transition-colors text-left"
                    >
                      <span
                        className={
                          selectedService ? "text-slate-900" : "text-slate-400"
                        }
                      >
                        {selectedService || "Choose a service..."}
                      </span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform",
                          isDropdownOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-20">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-slate-50 hover:text-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message..."
                    className="w-full h-32 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary resize-none"
                  ></textarea>
                </div>

                <Button
                  type="button"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-lg cursor-pointer"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                Contact Details
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Phone</h4>
                    <p className="text-slate-600">+91 73031 77489</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-slate-600">insurancelabs2@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Address</h4>
                    <p className="text-slate-600">
                      Address: Office No. 112, Regus Business Centre, Honda Big
                      Wing, Scheme No. 78, Indore, Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl">
                <h3 className="font-bold text-primary mb-4">Business Hours</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>{" "}
                    <span className="font-bold">09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>{" "}
                    <span className="font-bold">10:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>{" "}
                    <span className="font-bold">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-primary mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/profile.php?id=61584839527820",
                        "_blank",
                      )
                    }
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Facebook size={18} />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/insurancelabs_?igsh=YWhhYnEydDVrNjBp",
                        "_blank",
                      )
                    }
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Instagram size={18} />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "www.linkedin.com/in/anshul-p-444a8816",
                        "_blank",
                      )
                    }
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Personal Insurance",
                desc: "Individual coverage for all life stages",
              },
              {
                title: "Business Insurance",
                desc: "Enterprise-level protection and advisory",
              },
              {
                title: "Investments & Loans",
                desc: "Financial guidance and loan assistance",
              },
              {
                title: "Claim Services",
                desc: "Fast and efficient claim processing",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
