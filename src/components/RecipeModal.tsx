import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiClock, FiUsers } from 'react-icons/fi';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const getSpiceLevelColor = (level: string) => {
    switch (level) {
      case 'mild': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hot': return 'bg-orange-100 text-orange-800';
      case 'extreme': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        onClick={onClose}
        aria-hidden="true"
      ></motion.div>

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-lg shadow-xl z-10 mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
          <motion.button
            type="button"
            className="text-gray-400 bg-white rounded-full p-1 hover:text-gray-500 focus:outline-none"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Close</span>
            <FiX className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-auto relative">
            <img 
              src={recipe.image || 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
              alt={recipe.name} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
              <h2 className="text-2xl font-bold font-display text-white">{recipe.name}</h2>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[70vh] md:max-h-[90vh]">
            <div className="hidden md:block mb-4">
              <h2 className="text-2xl font-bold font-display text-gray-900">{recipe.name}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getSpiceLevelColor(recipe.spiceLevel)}`}>
                {recipe.spiceLevel.charAt(0).toUpperCase() + recipe.spiceLevel.slice(1)}
              </span>
              
              {recipe.flavors.map((flavor, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-800">
                  {flavor}
                </span>
              ))}
            </div>
            
            <p className="mb-6 text-gray-600">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-500">
              <div className="flex items-center">
                <FiClock className="w-4 h-4 mr-1" />
                <span>Prep: {recipe.prepTime} min</span>
              </div>
              <div className="flex items-center">
                <FiClock className="w-4 h-4 mr-1" />
                <span>Cook: {recipe.cookTime} min</span>
              </div>
              <div className="flex items-center">
                <FiUsers className="w-4 h-4 mr-1" />
                <span>Serves: {recipe.servings}</span>
              </div>
            </div>
            
            {recipe.authorName && (
              <div className="p-3 mb-6 text-sm italic bg-amber-50 rounded-md text-gray-600 border-l-4 border-amber-500">
                Recipe contributed by: {recipe.authorName}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2 text-amber-700">1</span>
                Ingredients
              </h3>
              <ul className="pl-10 space-y-2 list-disc">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li 
                    key={index} 
                    className="text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {ingredient}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2 text-amber-700">2</span>
                Instructions
              </h3>
              <ol className="pl-10 space-y-3 list-decimal">
                {recipe.instructions.map((instruction, index) => (
                  <motion.li 
                    key={index} 
                    className="text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {instruction}
                  </motion.li>
                ))}
              </ol>
            </div>
            
            {recipe.tips && recipe.tips.length > 0 && (
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2 text-amber-700">3</span>
                  Tips
                </h3>
                <ul className="pl-10 space-y-2 list-disc">
                  {recipe.tips.map((tip, index) => (
                    <motion.li 
                      key={index} 
                      className="text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                    >
                      {tip}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecipeModal;
