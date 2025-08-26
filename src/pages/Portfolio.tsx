import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fashionImage from "@/assets/portfolio-fashion.jpg";
import weddingImage from "@/assets/portfolio-wedding.jpg";
import portraitImage from "@/assets/portfolio-portrait.jpg";
import droneImage from "@/assets/portfolio-drone.jpg";

const Portfolio = () => {
  const categories = [
    {
      title: "FASHION",
      description: "Bold, editorial, and dynamic visuals for brands, designers, and models.",
      image: fashionImage,
      href: "/portfolio/fashion"
    },
    {
      title: "EVENTS",
      description: "Timeless documentation of weddings, engagements, and cherished celebrations.",
      image: weddingImage,
      href: "/portfolio/events"
    },
    {
      title: "PORTRAITS",
      description: "Capturing the unique personality of individuals for professional and creative branding.",
      image: portraitImage,
      href: "/portfolio/portraits"
    },
    {
      title: "DRONE",
      description: "Cinematic aerial perspectives that add scale and grandeur to any story.",
      image: droneImage,
      href: "/portfolio/drone"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground"
          >
            The Art of Storytelling
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
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A curated collection of moments, each with its own narrative. Here, light, emotion, and composition converge to create something truly unforgettable. Explore my work across fashion, events, portraits, and breathtaking aerials.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={category.href}
                  className="block relative overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-500"
                >
                  <div className="aspect-[4/5] relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      src={category.image}
                      alt={`${category.title} portfolio samples by Sriharsha Photography`}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-overlay" 
                    />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <motion.h3 
                        whileHover={{ color: "hsl(var(--luxury-gold))" }}
                        transition={{ duration: 0.3 }}
                        className="font-serif text-3xl md:text-4xl font-bold text-white mb-4"
                      >
                        {category.title}
                      </motion.h3>
                      <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                        {category.description}
                      </p>
                      <motion.div 
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 flex items-center text-luxury-gold font-medium tracking-wider"
                      >
                        <span>VIEW GALLERY</span>
                        <span className="ml-2">→</span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;