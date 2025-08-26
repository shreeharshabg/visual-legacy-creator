import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold mb-4">SRIHARSHA PHOTOGRAPHY</h3>
            <div className="w-24 h-0.5 bg-luxury-gold mx-auto" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://instagram.com/sriharshaphotography" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a 
              href="mailto:hello@sriharshaphotography.com"
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mb-8 text-primary-foreground/80">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Based in Mangaluru | Available throughout Karnataka & India</span>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Sriharsha Photography. All Rights Reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2">
              Fine Art Wedding and Fashion Photographer in Bangalore & Karnataka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;