import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Users, User, Plane } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Wedding & Engagement Photography",
      description: "From the grandest moments to the quietest whispers of emotion, I document your love story with a blend of candid storytelling and fine-art portraiture. Serving couples across Karnataka and beyond, I focus on creating a timeless album you'll cherish for a lifetime."
    },
    {
      icon: Camera,
      title: "Fashion & Editorial Shoots",
      description: "For designers, models, and brands looking to make a powerful visual statement. I specialize in creating compelling, high-end fashion and editorial imagery that aligns with your brand's identity. Perfect for lookbooks, campaigns, and portfolios."
    },
    {
      icon: User,
      title: "Portraits & Personal Branding",
      description: "Whether for a professional headshot, a creative personal project, or building your brand's visual identity, my portrait sessions are designed to capture your authentic self with confidence and style."
    },
    {
      icon: Plane,
      title: "Drone & Aerial Coverage",
      description: "Elevate your story with breathtaking aerial perspectives. Using state-of-the-art drone technology, I provide cinematic stills and video that add a layer of epic scale and beauty to weddings, events, and commercial projects."
    }
  ];

  const packages = [
    {
      name: "The Classic Collection",
      description: "Essential coverage for intimate events and projects."
    },
    {
      name: "The Premium Collection",
      description: "Our most popular offering, balancing comprehensive coverage with fine-art deliverables.",
      popular: true
    },
    {
      name: "The Luxury Collection",
      description: "The ultimate bespoke experience, featuring extensive coverage, premium albums, and more."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Bespoke Photography Services
          </h1>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I offer a curated range of photography services designed to meet the highest standards of quality and creativity. Each offering is more than a session; it's a collaborative experience tailored to your vision.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-luxury transition-all duration-300 border border-border"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Investment in Your Memories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To ensure a personalized and luxury experience, I offer several curated packages. Please inquire for detailed collection information and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-lg p-8 shadow-elegant hover:shadow-luxury transition-all duration-300 border ${
                  pkg.popular 
                    ? "border-luxury-gold ring-2 ring-luxury-gold/20" 
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-luxury-gold text-primary px-4 py-1 rounded-full text-sm font-medium">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-primary font-medium tracking-wider px-8 py-4 shadow-gold transition-all duration-300 hover:shadow-luxury"
              >
                INQUIRE FOR A PRIVATE CONSULTATION
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;