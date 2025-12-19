import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, UserCheck, MessageCircle, HeartHandshake, HeadphonesIcon, FileText, CheckCircle2, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import claimsHeroImg from "@assets/generated_images/insurance_claims_support_concept.png"; 

const whatsappUrl = "https://wa.me/917303177489?text=Hello%20Insurance%20Lab,%20I%20need%20help%20with%20a%20claim.";

export default function Claims() {
  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-secondary/30">
                24/7 Claim Support
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Built on trust, <br/>transparency, and efficiency.
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-xl">
                We understand that claims often arise during challenging times. Our goal is to make the process as smooth and stress-free as possible.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                 <div className="text-center md:text-left">
                   <div className="text-3xl font-bold text-secondary mb-1">2h</div>
                   <div className="text-sm text-slate-300">Avg. first response</div>
                 </div>
                 <div className="text-center md:text-left">
                   <div className="text-3xl font-bold text-secondary mb-1">95%+</div>
                   <div className="text-sm text-slate-300">Docs accepted first pass</div>
                 </div>
                 <div className="text-center md:text-left">
                   <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                   <div className="text-sm text-slate-300">Claims assisted</div>
                 </div>
              </div>

              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Claim Assistance
              </Button>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative"
            >
               <img src={claimsHeroImg} alt="Claim Support" className="w-full rounded-2xl shadow-2xl border-4 border-white/10" onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1556740758-90de2742e234?auto=format&fit=crop&q=80&w=1000"} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Fast Intimation", desc: "24–48h coordination with insurers" },
              { icon: UserCheck, title: "Dedicated Handler", desc: "Single point of contact till settlement" },
              { icon: MessageCircle, title: "Clear Updates", desc: "Proactive communication at each step" },
              { icon: HeartHandshake, title: "Fair Outcomes", desc: "Guidance to maximise eligible payout" },
              { icon: HeadphonesIcon, title: "24/7 Support", desc: "Help anytime you need it" },
              { icon: FileText, title: "Paperwork Review", desc: "Pre-check your documents" },
              { icon: ShieldCheck, title: "Personalised Support", desc: "Support tailored to your policy" },
              { icon: CheckCircle2, title: "Cashless Assistance", desc: "Help with network garages" }
            ].map((feature, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
               >
                 <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                   <feature.icon size={24} />
                 </div>
                 <h3 className="font-bold text-lg text-primary mb-2">{feature.title}</h3>
                 <p className="text-slate-600 text-sm">{feature.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">How the claim process works</h2>
            <p className="text-lg text-slate-600">A clear, step-by-step path — from incident to settlement.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
               {[
                 { step: "1", title: "Report & Document", desc: "Tell us what happened and share required documents. We'll validate and organise them for you." },
                 { step: "2", title: "File & Coordinate", desc: "We file the claim with the insurer and coordinate surveys, assessments, and queries." },
                 { step: "3", title: "Settle & Support", desc: "We follow through until settlement — keeping you informed and supported at every step." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-100 text-center relative group hover:border-secondary transition-colors">
                   <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white shadow-lg relative z-20 group-hover:bg-secondary transition-colors">
                     {item.step}
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                   <p className="text-slate-600">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Resolutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">Recent claim resolutions</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Health Hospitalization",
                desc: "Pre-auth within 2h, discharge and final bill cleared.",
                status: "Settled • Network hospital",
                color: "bg-blue-50 text-blue-700 border-blue-200"
              },
              {
                category: "Business – Fire Damage",
                desc: "Assessment in 72h, loss verified, remediation approved, payout in 20 days.",
                status: "Settled • Reimbursement",
                color: "bg-orange-50 text-orange-700 border-orange-200"
              },
              {
                category: "Motor – Accident Damage",
                desc: "Assessment in 24h, repair estimate approved, cashless garage service initiated.",
                status: "Settled • Cashless",
                color: "bg-green-50 text-green-700 border-green-200"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${item.color} border`}>
                  {item.category}
                </div>
                <p className="text-slate-700 font-medium mb-4">{item.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-primary border-t pt-4 border-slate-100">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {item.status}
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
