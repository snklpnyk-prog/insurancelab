import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "@assets/Insurancelablogo-removebg-preview_1766038794097.png";

export default function Footer() {
  return (
    <footer className="bg-[#010647] text-slate-300 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src={logo}
              alt="Insurance Lab"
              className="h-10 w-auto mb-6 bg-white"
              data-testid="img-logo-footer"
            />
            <p className="mb-6 leading-relaxed text-sm">
              Insurance Lab provides scientific risk assessment and tailored
              protection plans. Your safety is our science.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584839527820"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-secondary rounded-full flex items-center justify-center transition-colors text-white"
                data-testid="link-facebook-footer"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/insurancelabs_?igsh=YWhhYnEydDVrNjBp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-secondary rounded-full flex items-center justify-center transition-colors text-white"
                data-testid="link-instagram-footer"
              >
                <Instagram size={16} />
              </a>
              <a
                href="www.linkedin.com/in/anshul-p-444a8816"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-secondary rounded-full flex items-center justify-center transition-colors text-white"
                data-testid="link-linkedin-footer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(" ", "-")}`}
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Personal Insurance",
                "Business Insurance",
                "Investments & Loans",
                "Claim Services",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/services"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                    data-testid={`link-service-${link.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span data-testid="text-address-footer">
                  Address: Office No. 112, Regus Business Centre, Honda Big
                  Wing, Scheme No. 78, Indore, Madhya Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span data-testid="text-phone-footer">+91 73031 77489</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span data-testid="text-email-footer">
                  insurancelabs2@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p data-testid="text-copyright-footer">
            &copy; 2025 Insurance Lab. All Rights Reserved.
          </p>
          <p data-testid="text-copyright-footer">Made with ❤️ By UDM Techno</p>
        </div>
      </div>
    </footer>
  );
}
