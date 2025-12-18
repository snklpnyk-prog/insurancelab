import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/Insurancelablogo-removebg-preview_1766038794097.png";

const whatsappNumber = "+917303177489";
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello%20Insurance%20Lab,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

interface HeaderProps {
  isTransparent?: boolean;
}

export default function Header({ isTransparent = false }: HeaderProps) {
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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || !isTransparent
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-3"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Insurance Lab" className="h-10 w-auto" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">
                Services
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-secondary transition-colors">
                Contact
              </a>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => window.open(whatsappUrl, "_blank")}
              data-testid="button-get-quote"
            >
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu
                size={28}
                className={isScrolled ? "text-primary" : "text-primary"}
              />
            )}
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
                <Link href="/">
                  <a
                    className="text-primary font-bold py-2 border-b border-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className="text-primary font-bold py-2 border-b border-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </Link>
                <Link href="/services">
                  <a
                    className="text-primary font-bold py-2 border-b border-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                </Link>
                <Link href="/blog">
                  <a
                    className="text-primary font-bold py-2 border-b border-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    className="text-primary font-bold py-2 border-b border-slate-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </Link>
                <Button
                  className="bg-secondary text-white w-full mt-2 cursor-pointer"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  data-testid="button-mobile-quote"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
