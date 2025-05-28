import { motion } from 'framer-motion';
import { FiClock, FiUsers } from 'react-icons/fi';
import { Recipe, SpiceLevel } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getSpiceLevelColor = (level: SpiceLevel) => {
    switch (level) {
      case 'mild': return 'bg-spice-mild';
      case 'medium': return 'bg-spice-medium';
      case 'hot': return 'bg-spice-hot';
      case 'extreme': return 'bg-spice-extreme';
    }
  };

  return (
    <motion.div 
      variants={item}
      whileHover={{ y: -5 }}
      className="card cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className={`badge ${getSpiceLevelColor(recipe.spiceLevel)} text-white`}>
            {recipe.spiceLevel}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{recipe.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {recipe.flavors.slice(0, 3).map((flavor) => (
            <span key={flavor} className="badge bg-gray-100 text-gray-800">
              {flavor}
            </span>
          ))}
          {recipe.flavors.length > 3 && (
            <span className="badge bg-gray-100 text-gray-800">
              +{recipe.flavors.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center">
            <FiUsers className="mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
