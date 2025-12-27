import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
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
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Insurance" },
    { href: "/investment", label: "Investment & Loan" },
    { href: "/claims", label: "Claim Services" },
    { href: "/about", label: "About" },
    { href: "/nri", label: "NRI" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || !isTransparent
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-3",
        )}
      >
        <div className="container mx-auto px-4 md:px-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Insurance Lab" className="h-10 w-auto" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wide transition-colors",
                    location === link.href
                      ? "text-secondary"
                      : "text-slate-700 hover:text-secondary",
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/get-quote">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                data-testid="button-get-quote"
              >
                GET A QUOTE
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-secondary"
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
              className="xl:hidden bg-white border-t absolute w-full left-0 top-full shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={cn(
                        "font-bold py-3 border-b border-slate-100 last:border-0",
                        location === link.href
                          ? "text-secondary"
                          : "text-primary",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}

                <Link href="/get-quote">
                  <Button
                    className="bg-secondary text-white w-full mt-4 cursor-pointer py-6"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="button-mobile-quote"
                  >
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
