
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { getFurnitureItemBySlug } from "@/data/furniture";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FurnitureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = getFurnitureItemBySlug(slug || "");
  
  const [activeImage, setActiveImage] = useState(
    item ? item.mainImage : ""
  );
  const [selectedColor, setSelectedColor] = useState(
    item ? item.colors[0] : ""
  );
  
  if (!item) {
    return (
      <Layout>
        <div className="container-custom py-40">
          <h1 className="heading-lg mb-6">Product not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The furniture item you are looking for does not exist.
          </p>
          <Button asChild>
            <Link to="/furniture">Back to Furniture</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-accent/10">
                <img 
                  src={activeImage}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {[item.mainImage, ...item.galleryImages].map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`aspect-square rounded-md overflow-hidden ${
                      activeImage === image ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${item.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-bold">{item.name}</h1>
                  <span className="text-2xl font-semibold text-primary">${item.price}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-muted-foreground">{item.category} • {item.type}</span>
                  <span className="mx-2">•</span>
                  <span className={item.inStock ? "text-green-600" : "text-red-500"}>
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Description</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Materials</h3>
                <ul className="space-y-1">
                  {item.materials.map((material, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        className="h-5 w-5 text-primary mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Dimensions</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-center">
                    <span className="block text-sm text-muted-foreground">Width</span>
                    <span className="text-xl font-medium">{item.dimensions.width} cm</span>
                  </div>
                  <div className="bg-accent/20 p-3 rounded-lg text-center">
                    <span className="block text-sm text-muted-foreground">Depth</span>
                    <span className="text-xl font-medium">{item.dimensions.depth} cm</span>
                  </div>
                  <div className="bg-accent/20 p-3 rounded-lg text-center">
                    <span className="block text-sm text-muted-foreground">Height</span>
                    <span className="text-xl font-medium">{item.dimensions.height} cm</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Available Colors</h3>
                <div className="flex gap-3">
                  {item.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md border ${
                        selectedColor === color
                          ? "border-primary"
                          : "border-border"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="w-full" disabled={!item.inStock}>
                  {item.inStock ? "Inquire About This Item" : "Currently Unavailable"}
                </Button>
                <p className="text-sm text-center mt-3 text-muted-foreground">
                  Contact us for pricing, availability, and customization options
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Related Service CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 max-w-2xl mx-auto">Need Something Custom?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our custom furniture design service creates unique pieces tailored to your specifications
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/services/furniture">Custom Furniture Service</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FurnitureDetail;
