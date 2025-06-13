import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
}

const Cart = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, totalPrice }: CartProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} FCFA`;
  };

  const generateWhatsAppMessage = () => {
    let message = "Bonjour, je souhaite commander :\n\n";
    
    items.forEach(item => {
      message += `- ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\nTOTAL: ${formatPrice(totalPrice)}\n`;
    message += `\nMon numéro WhatsApp : ${phoneNumber}`;
    
    return message;
  };

  const handleValidateOrder = () => {
    if (!phoneNumber.trim()) {
      alert('Veuillez renseigner votre numéro WhatsApp');
      return;
    }
    
    if (items.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    setIsValidating(true);
    
    const adminPhone = "2250586905549";
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${encodeURIComponent(message)}`;
    
    // Simuler un délai pour l'animation
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsValidating(false);
      setShowConfirmation(true);
      
      // Réinitialiser après confirmation
      setTimeout(() => {
        setShowConfirmation(false);
        setPhoneNumber('');
        onClose();
      }, 3000);
    }, 1000);
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center animate-fade-in">
          <div className="text-green-500 text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Commande validée !
          </h3>
          <p className="text-muted-foreground">
            Votre commande a bien été prise en compte. Notre équipe vous contactera sur WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Panier */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-primary">Mon Panier</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Contenu du panier */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <div className="text-4xl mb-4">🛒</div>
                <p>Votre panier est vide</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-accent font-bold">
                        {formatPrice(item.price)}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="font-semibold px-2">{item.quantity}</span>
                        
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus size={16} />
                        </button>
                        
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700 p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer avec commande */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="text-xl font-bold text-center">
                Total: {formatPrice(totalPrice)}
              </div>
              
              <input
                type="tel"
                placeholder="📱 Votre numéro WhatsApp"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              
              <button
                onClick={handleValidateOrder}
                disabled={isValidating}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isValidating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 active:scale-95'
                }`}
              >
                {isValidating ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Validation...
                  </div>
                ) : (
                  'Valider la commande'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
