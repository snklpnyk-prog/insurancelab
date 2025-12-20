import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Home as HomeIcon,
  Activity,
  Briefcase,
  Car,
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Shield,
  Building2,
  User,
  HardHat,
  Plane,
  Anchor,
  Flame,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import personalImg from "@assets/generated_images/couple-home-top.jpeg";
import businessImg from "@assets/generated_images/business_professional_insurance_concept.png";

const whatsappUrl =
  "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

export default function Services() {
  const [activeTab, setActiveTab] = useState("personal");

  const personalServices = [
    {
      title: "Motor Insurance",
      desc: "Cover your car or bike with cashless repairs and add-ons.",
      icon: Car,
    },
    {
      title: "Health Insurance",
      desc: "Plans for individuals and families with cashless hospitalization.",
      icon: Activity,
    },
    {
      title: "Life Insurance",
      desc: "Secure your family’s future with life coverage.",
      icon: User,
    },
    {
      title: "Term Insurance",
      desc: "Pure protection with high cover at affordable premiums.",
      icon: Shield,
    },
    {
      title: "Home Insurance",
      desc: "Protect your home and contents against loss and damage.",
      icon: HomeIcon,
    },
    {
      title: "Travel Insurance",
      desc: "Trip protection for delays, medical emergencies, and baggage.",
      icon: Plane,
    },
    {
      title: "Personal Accident",
      desc: "Financial protection against accidental injury or death.",
      icon: Zap,
    },
    { title: "Pet Insurance", desc: "Plans for pet protection.", icon: Heart },
  ];

  const businessServices = [
    {
      category: "Liability",
      desc: "Protect your business against third-party claims, errors, and managerial risks.",
      items: [
        {
          name: "Directors & Officers",
          detail: "Safeguards company directors against managerial liability.",
        },
        {
          name: "Professional Indemnity",
          detail: "Protects professionals against negligence claims.",
        },
        {
          name: "Commercial General Liability",
          detail: "Covers injury or property damage claims.",
        },
        {
          name: "Product Liability",
          detail: "Covers liability from products you manufacture or sell.",
        },
        {
          name: "Cyber Risk",
          detail: "Protection against cyber-attacks and data breaches.",
        },
        {
          name: "Workmen Compensation",
          detail: "Coverage for workplace injuries and employee safety.",
        },
      ],
    },
    {
      category: "Property & Assets",
      desc: "Insure buildings, contents, machinery and keep operations running after loss.",
      items: [
        {
          name: "Property Insurance",
          detail: "Covers physical business assets against risks.",
        },
        {
          name: "Fire Insurance",
          detail: "Protection against fire damage to buildings/assets.",
        },
        {
          name: "Fire Loss of Profit",
          detail: "Insures income loss due to fire damage.",
        },
        {
          name: "Machinery Breakdown",
          detail: "Protects against sudden breakdown of machinery.",
        },
        {
          name: "Office Package",
          detail: "Comprehensive protection for office and employees.",
        },
      ],
    },
    {
      category: "Engineering",
      desc: "Covers engineering projects, equipment and risks.",
      items: [
        {
          name: "Engineering Insurance",
          detail: "Protects infrastructure and construction projects.",
        },
      ],
    },
    {
      category: "Marine",
      desc: "Covers goods while they move—road, air, or sea.",
      items: [
        { name: "Marine Cargo", detail: "Insurance for goods shipped by sea." },
      ],
    },
    {
      category: "Manpower & Employee",
      desc: "Protect your workforce with employee-focused insurance.",
      items: [
        {
          name: "Group Health Insurance",
          detail: "Provides health cover for employees.",
        },
        {
          name: "Group Personal Accident",
          detail: "Coverage for accidental injuries to employees.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center py-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Personal & Business Insurance
            </h1>
            <p className="text-xl text-slate-200">
              Choose from our curated range of insurance solutions designed to
              fit your needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs
            defaultValue="personal"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-10 pb-10 pt-2 ">
              <TabsList className="grid w-full max-w-md grid-cols-2  -py-8  rounded-full">
                <TabsTrigger
                  value="personal"
                  className="rounded-full text-2xl py-3 data-[state=active]:bg-secondary data-[state=active]:text-white transition-all"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="rounded-full text-2xl py-3 data-[state=active]:bg-secondary data-[state=active]:text-white transition-all"
                >
                  Business
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Personal Insurance Content */}
            <TabsContent value="personal" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[400px]"
                >
                  <img
                    src={personalImg}
                    alt="Personal Insurance"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      Personal Insurance
                    </h2>
                    <p className="text-lg opacity-90">
                      Cover for you and your family—health, motor, life, term,
                      home, travel and more.
                    </p>
                  </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {personalServices.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                    >
                      <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                        <service.icon size={24} />
                      </div>
                      <h3 className="font-bold text-lg text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 rounded-lg text-lg"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Explore Personal Plans
                </Button>
              </div>
            </TabsContent>

            {/* Business Insurance Content */}
            <TabsContent value="business" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                <div className="space-y-8 order-2 lg:order-1">
                  {businessServices.map((group, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
                        {i === 0 && <Shield className="text-secondary" />}
                        {i === 1 && <Building2 className="text-secondary" />}
                        {i === 2 && <HardHat className="text-secondary" />}
                        {i === 3 && <Anchor className="text-secondary" />}
                        {i === 4 && <Users className="text-secondary" />}
                        {group.category}
                      </h3>
                      <p className="text-slate-600 mb-6">{group.desc}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        {group.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <CheckCircle
                              size={18}
                              className="text-secondary mt-1 shrink-0"
                            />
                            <div>
                              <div className="font-bold text-slate-800 text-sm">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-500">
                                {item.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="lg:sticky lg:top-24 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
                  >
                    <img
                      src={businessImg}
                      alt="Business Insurance"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                      <h2 className="text-3xl font-bold mb-2">
                        Business Insurance
                      </h2>
                      <p className="text-lg opacity-90">
                        Comprehensive cover for liability, property,
                        engineering, marine and manpower—tailored for SMEs and
                        enterprises.
                      </p>
                      <Button
                        className="mt-6 w-full bg-white text-primary hover:bg-slate-100 font-bold"
                        onClick={() => window.open(whatsappUrl, "_blank")}
                      >
                        Talk to an Expert
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 rounded-lg text-lg"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Explore Business Plans
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper component for Icon
function Heart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
