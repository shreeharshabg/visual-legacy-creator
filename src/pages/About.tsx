import { motion } from "framer-motion";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground"
          >
            From Pixels to Pictures
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-luxury-gold mx-auto mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground"
          >
            The Story Behind the Lens
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={aboutPortrait}
                alt="Sriharsha - Professional photographer behind the scenes with camera"
                className="w-full rounded-lg shadow-elegant"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-luxury-gold/10 rounded-lg -z-10" 
              />
            </motion.div>

            {/* Story Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground mb-6"
                >
                  My journey began not in a studio, but in the structured world of Information Technology. For years, I worked with code and logic, mastering the art of precision and detail. While rewarding, my creative spirit searched for a different canvas. I found it through the lens of a camera—a tool that allowed me to translate the world's fleeting moments into lasting art.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground mb-6"
                >
                  What started as a passion quickly became my calling. I traded algorithms for apertures, dedicating myself fully to the craft of photography. This unique background is my greatest strength. My IT experience gives me a meticulous eye for technical detail, ensuring every shot is perfectly composed and flawlessly executed. My creative drive ensures that every image is not just technically perfect, but also emotionally resonant.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-secondary rounded-lg"
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Why Trust Sriharsha Photography?
                  </h2>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Clients trust me to deliver a premium, seamless experience from start to finish. I believe that luxury is in the details—the pre-shoot consultation, the relaxed atmosphere during the session, and the final, stunning images that exceed your expectations.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    My goal is to do more than just capture an event; it's to tell your unique story with elegance, passion, and an unwavering commitment to quality.
                  </p>
                  
                  <p className="text-lg font-medium text-foreground italic">
                    Let's create something timeless together.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;