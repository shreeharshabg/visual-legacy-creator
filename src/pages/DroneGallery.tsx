import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import droneImage from "@/assets/portfolio-drone.jpg";

const DroneGallery = () => {
  // Mock gallery images - in a real app, these would come from a CMS or API
  const galleryImages = Array(12).fill(droneImage);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Drone Photography
            </h1>
            
            <div className="h-0.5 bg-luxury-gold w-24 mb-8" />
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Cinematic aerial perspectives that add scale and grandeur to any story. Breathtaking views captured from above with precision and artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-500">
                  <div className="aspect-[16/9] relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      src={image}
                      alt={`Drone photography sample ${index + 1} by Sriharsha Photography`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneGallery;