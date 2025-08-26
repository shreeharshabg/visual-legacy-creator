import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    eventDate: "",
    hearAbout: "",
    vision: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest! I'll respond within 24-48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      shootType: "",
      eventDate: "",
      hearAbout: "",
      vision: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Let's Create Something Timeless
          </h1>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am excited to hear about your vision. Whether you're planning a wedding, launching a brand, or simply want to capture a moment in time, please fill out the form below. I respond to all inquiries within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-elegant border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shootType" className="text-sm font-medium text-foreground mb-2 block">
                      Type of Shoot *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("shootType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shoot type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="portrait">Portrait</SelectItem>
                        <SelectItem value="drone">Drone</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventDate" className="text-sm font-medium text-foreground mb-2 block">
                      Event Date (if applicable)
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hearAbout" className="text-sm font-medium text-foreground mb-2 block">
                      How did you hear about me?
                    </Label>
                    <Input
                      id="hearAbout"
                      type="text"
                      value={formData.hearAbout}
                      onChange={(e) => handleInputChange("hearAbout", e.target.value)}
                      className="w-full"
                      placeholder="Instagram, referral, etc."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="vision" className="text-sm font-medium text-foreground mb-2 block">
                    Tell me about your vision... *
                  </Label>
                  <Textarea
                    id="vision"
                    required
                    value={formData.vision}
                    onChange={(e) => handleInputChange("vision", e.target.value)}
                    className="w-full min-h-[120px]"
                    placeholder="Describe your photography needs, style preferences, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-primary font-medium tracking-wider py-4 shadow-gold transition-all duration-300 hover:shadow-luxury"
                >
                  SUBMIT INQUIRY
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Based in Mangaluru | Available throughout Karnataka & India
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                    <a 
                      href="mailto:hello@sriharshaphotography.com"
                      className="text-muted-foreground hover:text-luxury-gold transition-colors"
                    >
                      hello@sriharshaphotography.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                    <a 
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-luxury-gold transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                    <a 
                      href="https://instagram.com/sriharshaphotography"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-luxury-gold transition-colors"
                    >
                      @sriharshaphotography
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-elegant border border-border">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Response Time
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I personally review every inquiry to ensure I can provide the best possible service for your needs. You can expect a detailed response within 24-48 hours.
                </p>
                <p className="text-sm text-muted-foreground">
                  For urgent requests, please call directly or send a WhatsApp message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;