import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            SRIHARSHA
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-luxury-gold mx-auto mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Capturing Timeless Stories
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl mx-auto"
          >
            Where Elegance Meets Emotion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/portfolio">
              <Button variant="hero" size="lg" className="tracking-wider px-8 py-4 text-lg shadow-gold hover:shadow-luxury">
                EXPLORE THE PORTFOLIO
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground mb-6"
                >
                  From a world of logic and code to one of light and emotion, my journey into photography is one of pure passion. Based in Karnataka, I blend technical precision with an artist's eye to create elegant, story-driven photographs that feel both luxurious and authentic.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  I don't just take pictures; I craft timeless visual legacies.
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn My Story
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.02, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={aboutPortrait}
                  alt="Professional portrait of Sriharsha, luxury photographer"
                  className="w-full max-w-md mx-auto rounded-lg shadow-elegant grayscale"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-luxury-gold/10 rounded-lg -z-10" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;