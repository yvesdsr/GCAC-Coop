
import React from 'react';
import { Product } from './Store';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  // Chaussures
  { id: 1, name: "Nike Air Max", price: 85000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80", category: "chaussures" },
  { id: 2, name: "Adidas Ultraboost", price: 95000, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80", category: "chaussures" },
  { id: 3, name: "Converse Classic", price: 45000, image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=400&q=80", category: "chaussures" },
  { id: 4, name: "Vans Old Skool", price: 55000, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80", category: "chaussures" },
  
  // Vêtements
  { id: 5, name: "Veste en Cuir", price: 120000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80", category: "vêtements" },
  { id: 6, name: "Jean Slim", price: 65000, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80", category: "vêtements" },
  { id: 7, name: "Chemise Blanche", price: 35000, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80", category: "vêtements" },
  { id: 8, name: "Pantalon Chino", price: 45000, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=400&q=80", category: "vêtements" },
  
  // T-shirts
  { id: 9, name: "T-shirt Oversize Noir", price: 25000, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80", category: "t-shirts" },
  { id: 10, name: "T-shirt Graphique", price: 28000, image: "https://images.unsplash.com/photo-1503341338985-6eaa9b933a10?auto=format&fit=crop&w=400&q=80", category: "t-shirts" },
  { id: 11, name: "T-shirt Vintage", price: 32000, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80", category: "t-shirts" },
  { id: 12, name: "T-shirt Polo", price: 38000, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=400&q=80", category: "t-shirts" },
  
  // Accessoires
  { id: 13, name: "Casquette Snapback", price: 22000, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80", category: "accessoires" },
  { id: 14, name: "Sac à Dos Urban", price: 75000, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", category: "accessoires" },
  { id: 15, name: "Montre Classic", price: 150000, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&q=80", category: "accessoires" },
  { id: 16, name: "Lunettes de Soleil", price: 85000, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80", category: "accessoires" },
];

const categories = [
  { id: 'chaussures', name: 'Chaussures', emoji: '👟' },
  { id: 'vêtements', name: 'Vêtements', emoji: '👔' },
  { id: 't-shirts', name: 'T-shirts', emoji: '👕' },
  { id: 'accessoires', name: 'Accessoires', emoji: '🎒' },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const handleAddToCart = (product: Product, event: React.MouseEvent) => {
    event.preventDefault();
    onAddToCart(product);
    
    // Animation du bouton
    const button = event.currentTarget as HTMLElement;
    button.classList.add('animate-pulse-button');
    setTimeout(() => {
      button.classList.remove('animate-pulse-button');
    }, 200);
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} FCFA`;
  };

  return (
    <section id="products" className="py-16 px-4 scroll-snap-start">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de produits tendance pour exprimer votre style unique
          </p>
        </div>

        {categories.map((category) => {
          const categoryProducts = products.filter(product => product.category === category.id);
          
          return (
            <div key={category.id} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8 flex items-center gap-3">
                <span className="text-3xl">{category.emoji}</span>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {product.name}
                      </h4>
                      <p className="text-xl font-bold text-accent mb-4">
                        {formatPrice(product.price)}
                      </p>
                      
                      <button
                        onClick={(event) => handleAddToCart(product, event)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
                      >
                        + Ajouter au panier
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
