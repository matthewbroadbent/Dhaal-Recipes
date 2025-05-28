import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiClock, FiUsers } from 'react-icons/fi';
import { Recipe, SpiceLevel } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getSpiceLevelColor = (level: SpiceLevel) => {
    switch (level) {
      case 'mild': return 'bg-spice-mild';
      case 'medium': return 'bg-spice-medium';
      case 'hot': return 'bg-spice-hot';
      case 'extreme': return 'bg-spice-extreme';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 transition-opacity"
            onClick={onClose}
          >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </motion.div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
          >
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={onClose}
                className="bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-gray-900">{recipe.name}</h2>
                    <span className={`badge ${getSpiceLevelColor(recipe.spiceLevel)} text-white`}>
                      {recipe.spiceLevel}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{recipe.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.flavors.map((flavor) => (
                    <span key={flavor} className="badge bg-gray-100 text-gray-800">
                      {flavor}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>Prep: {recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>Cook: {recipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <FiUsers className="mr-1" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-lg text-gray-900 mb-2">Ingredients</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-lg text-gray-900 mb-2">Instructions</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="text-gray-700">{instruction}</li>
                    ))}
                  </ol>
                </div>

                {recipe.tips && (
                  <div>
                    <h3 className="font-medium text-lg text-gray-900 mb-2">Chef's Tips</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="text-gray-700">{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default RecipeModal;
