import { Link } from "react-router-dom";
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
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground">
            The Art of Storytelling
          </h1>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of moments, each with its own narrative. Here, light, emotion, and composition converge to create something truly unforgettable. Explore my work across fashion, events, portraits, and breathtaking aerials.
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                to={category.href}
                className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-500"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={category.image}
                    alt={`${category.title} portfolio samples by Sriharsha Photography`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                      {category.description}
                    </p>
                    <div className="mt-6 flex items-center text-luxury-gold font-medium tracking-wider">
                      <span>VIEW GALLERY</span>
                      <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;