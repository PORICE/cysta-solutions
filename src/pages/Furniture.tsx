
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { furnitureItems, getFurnitureCategories, getFurnitureTypes } from "@/data/furniture";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Furniture = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  
  const categories = ["All", ...getFurnitureCategories()];
  const types = ["All", ...getFurnitureTypes()];
  
  const filteredItems = furnitureItems.filter(item => {
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    const matchesType = typeFilter === "All" || item.type === typeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = inStockOnly ? item.inStock : true;
    
    return matchesCategory && matchesType && matchesSearch && matchesStock;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-xl mb-6 text-center"
          >
            Furniture Collection
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground text-center max-w-3xl mx-auto"
          >
            Discover our curated selection of designer furniture pieces
          </motion.p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Search */}
            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search furniture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Filter Toggles */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* Categories */}
              <div>
                <span className="text-sm font-medium block mb-2 text-center md:text-left">Category:</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        categoryFilter === category 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-accent hover:bg-accent/70"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block h-8 w-px bg-border mx-4"></div>
              
              {/* Types */}
              <div>
                <span className="text-sm font-medium block mb-2 text-center md:text-left">Type:</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        typeFilter === type 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-accent hover:bg-accent/70"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block h-8 w-px bg-border mx-4"></div>
              
              {/* Stock Toggle */}
              <div>
                <button
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className={`px-4 py-2 rounded text-sm transition-colors ${
                    inStockOnly
                      ? "bg-primary text-primary-foreground" 
                      : "bg-accent hover:bg-accent/70"
                  }`}
                >
                  {inStockOnly ? "In Stock Only ✓" : "Show All Items"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Furniture Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-background rounded-lg overflow-hidden shadow-sm group"
                >
                  <Link to={`/furniture/${item.slug}`} className="block">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={item.mainImage}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {!item.inStock && (
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                        <span className="text-primary font-semibold">${item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{item.category} • {item.type}</p>
                      <Button size="sm" className="w-full">View Details</Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No items found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters to find what you're looking for.</p>
              <Button onClick={() => {
                setCategoryFilter("All");
                setTypeFilter("All");
                setSearchQuery("");
                setInStockOnly(false);
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Custom Furniture CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 max-w-2xl mx-auto">Looking for Something Special?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We offer custom furniture design services tailored to your specific needs and space
          </p>
          <Button size="lg" asChild>
            <Link to="/services/furniture">Learn About Custom Furniture</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Furniture;
