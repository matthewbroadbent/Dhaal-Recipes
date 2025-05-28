import { motion } from 'framer-motion';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={item}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-xl font-semibold text-white">{recipe.name}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <span>Prep: {recipe.prepTime} min</span>
            <span className="mx-2">•</span>
            <span>Cook: {recipe.cookTime} min</span>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${
            recipe.spiceLevel === 'mild' ? 'bg-green-100 text-green-800' :
            recipe.spiceLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            recipe.spiceLevel === 'hot' ? 'bg-orange-100 text-orange-800' :
            'bg-red-100 text-red-800'
          }`}>
            {recipe.spiceLevel.charAt(0).toUpperCase() + recipe.spiceLevel.slice(1)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
