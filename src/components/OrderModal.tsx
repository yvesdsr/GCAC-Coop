
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: string;
}

const OrderModal = ({ isOpen, onClose, selectedProduct }: OrderModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    product: selectedProduct,
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    setFormData(prev => ({ ...prev, product: selectedProduct }));
  }, [selectedProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formSubmitData.append(key, value);
      });
      formSubmitData.append('_email', 'coopcagcac.ci@gmail.com');
      formSubmitData.append('_subject', `Nouvelle commande - ${formData.product}`);
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/coopcagcac.ci@gmail.com', {
        method: 'POST',
        body: formSubmitData,
      });

      if (response.ok) {
        toast({
          title: "Commande envoyée !",
          description: "✅ Parfait ! Nous avons reçu votre commande. Notre équipe vous répondra d'ici peu.",
        });
        setFormData({ name: '', contact: '', product: '', quantity: '', message: '' });
        onClose();
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">Passer commande</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nom complet *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Contact (téléphone ou email) *</label>
            <input
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Produit choisi *</label>
            <input
              type="text"
              required
              value={formData.product}
              onChange={(e) => setFormData({...formData, product: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Quantité ou poids</label>
            <input
              type="text"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ex: 2kg, 10 unités..."
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message libre</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Précisions sur votre commande..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
