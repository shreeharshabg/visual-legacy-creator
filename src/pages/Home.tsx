import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Camera, Star, Award, Users } from "lucide-react";
import { FloatingParticles, ScrollIndicator } from "@/components/CreativeElements";
import heroImage from "@/assets/hero-main.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";

const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Camera, number: "500+", label: "PHOTOS CAPTURED" },
    { icon: Star, number: "50+", label: "HAPPY CLIENTS" },
    { icon: Award, number: "5+", label: "YEARS EXPERIENCE" },
    { icon: Users, number: "100+", label: "EVENTS COVERED" }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-luxury-gold/20 rounded-full floating-element"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 100]),
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 border border-luxury-gold/30 rotate-45 floating-element"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -80]),
            rotate: useTransform(scrollYProgress, [0, 1], [45, 225])
          }}
        />
        
        {/* Interactive cursor effect */}
        <motion.div
          className="absolute w-96 h-96 bg-luxury-gold/5 rounded-full blur-xl pointer-events-none z-0"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
        
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight creative-border"
          >
            <span className="shimmer-text">SRIHARSHA</span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="h-0.5 bg-luxury-gold mx-auto mb-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1 }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              Capturing Timeless Stories
            </motion.span>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/portfolio">
              <Button variant="hero" size="lg" className="magnetic-hover tracking-wider px-8 py-4 text-lg shadow-gold hover:shadow-luxury relative overflow-hidden group">
                <span className="relative z-10">EXPLORE THE PORTFOLIO</span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <FloatingParticles />
        <ScrollIndicator />
      </motion.section>

      {/* Animated Stats Section */}
      <motion.section 
        ref={statsRef}
        className="py-16 bg-primary text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-luxury-gold/5"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/20 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/30 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-luxury-gold" />
                </motion.div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold font-serif mb-2"
                  animate={statsInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-sm tracking-wider text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Intro Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        
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
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="font-serif text-3xl font-bold mb-8 text-foreground"
                >
                  <span className="relative">
                    The Artist Behind the Lens
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-luxury-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground mb-6 relative"
                >
                  <motion.span
                    className="absolute -left-4 top-0 w-1 h-full bg-luxury-gold/30"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                  From a world of logic and code to one of light and emotion, my journey into photography is one of pure passion. Based in Karnataka, I blend technical precision with an artist's eye to create elegant, story-driven photographs that feel both luxurious and authentic.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground mb-8 font-medium"
                >
                  <motion.span
                    className="text-luxury-gold font-serif text-xl"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    "
                  </motion.span>
                  I don't just take pictures; I craft timeless visual legacies.
                  <motion.span
                    className="text-luxury-gold font-serif text-xl"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    "
                  </motion.span>
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
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        Learn My Story
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-luxury-gold/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
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
              <div className="relative group">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-luxury-gold/20 via-transparent to-luxury-gold/20 rounded-xl blur-xl"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.img
                  whileHover={{ 
                    scale: 1.02, 
                    filter: "grayscale(0%)",
                    rotateY: 5
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={aboutPortrait}
                  alt="Professional portrait of Sriharsha, luxury photographer"
                  className="relative w-full max-w-md mx-auto rounded-lg shadow-elegant grayscale group-hover:shadow-luxury transition-all duration-500"
                />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-luxury-gold/10 rounded-lg -z-10" 
                />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -left-4 w-24 h-24 border border-luxury-gold/30 rounded-lg -z-10" 
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