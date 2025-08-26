import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            SRIHARSHA
          </h1>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Capturing Timeless Stories
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl mx-auto">
            Where Elegance Meets Emotion
          </p>
          <Link to="/portfolio">
            <Button variant="hero" size="lg" className="tracking-wider px-8 py-4 text-lg shadow-gold transition-all duration-300 hover:shadow-luxury">
              EXPLORE THE PORTFOLIO
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  From a world of logic and code to one of light and emotion, my journey into photography is one of pure passion. Based in Karnataka, I blend technical precision with an artist's eye to create elegant, story-driven photographs that feel both luxurious and authentic.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I don't just take pictures; I craft timeless visual legacies.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn My Story
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={aboutPortrait}
                  alt="Professional portrait of Sriharsha, luxury photographer"
                  className="w-full max-w-md mx-auto rounded-lg shadow-elegant grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-luxury-gold/10 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;