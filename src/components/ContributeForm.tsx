import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus, FiUpload } from 'react-icons/fi';
import { SpiceLevel } from '../types';
import { submitRecipe } from '../services/recipeService';

const ContributeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    authorName: '',
    authorEmail: '',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    spiceLevel: 'medium' as SpiceLevel,
    image: '',
    flavors: [] as string[],
    ingredients: [''] as string[],
    instructions: [''] as string[],
    tips: [''] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const flavorOptions = [
    'Tangy', 'Spicy', 'Creamy', 'Earthy', 'Sweet', 
    'Savory', 'Aromatic', 'Smoky', 'Nutty', 'Herby'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFlavorToggle = (flavor: string) => {
    setFormData(prev => {
      if (prev.flavors.includes(flavor)) {
        return { ...prev, flavors: prev.flavors.filter(f => f !== flavor) };
      } else {
        return { ...prev, flavors: [...prev.flavors, flavor] };
      }
    });
  };

  const handleArrayItemChange = (
    index: number, 
    value: string, 
    arrayName: 'ingredients' | 'instructions' | 'tips'
  ) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      newArray[index] = value;
      return { ...prev, [arrayName]: newArray };
    });
  };

  const addArrayItem = (arrayName: 'ingredients' | 'instructions' | 'tips') => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], '']
    }));
  };

  const removeArrayItem = (index: number, arrayName: 'ingredients' | 'instructions' | 'tips') => {
    if (formData[arrayName].length <= 1) return;
    
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      newArray.splice(index, 1);
      return { ...prev, [arrayName]: newArray };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Filter out empty items from arrays
      const cleanedFormData = {
        ...formData,
        ingredients: formData.ingredients.filter(item => item.trim() !== ''),
        instructions: formData.instructions.filter(item => item.trim() !== ''),
        tips: formData.tips.filter(item => item.trim() !== '')
      };
      
      // Submit to Supabase
      await submitRecipe({
        name: cleanedFormData.name,
        description: cleanedFormData.description,
        image: cleanedFormData.image || '',
        prepTime: cleanedFormData.prepTime,
        cookTime: cleanedFormData.cookTime,
        servings: cleanedFormData.servings,
        spiceLevel: cleanedFormData.spiceLevel,
        flavors: cleanedFormData.flavors,
        ingredients: cleanedFormData.ingredients,
        instructions: cleanedFormData.instructions,
        tips: cleanedFormData.tips,
        authorName: cleanedFormData.authorName,
        authorEmail: cleanedFormData.authorEmail
      });
      
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        description: '',
        authorName: '',
        authorEmail: '',
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        spiceLevel: 'medium' as SpiceLevel,
        image: '',
        flavors: [] as string[],
        ingredients: [''] as string[],
        instructions: [''] as string[],
        tips: [''] as string[]
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('There was an error submitting your recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Share Your <span className="text-primary-600">Dhaal</span> Recipe
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Contribute your favorite dhaal recipe to our collection and help others discover 
          the wonderful diversity of this beloved dish.
        </p>
      </motion.div>

      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            Your recipe has been submitted successfully and will be reviewed by our team.
            Once approved, it will appear in our collection with your attribution.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Submit Another Recipe
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">Recipe Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipe Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., Masoor Dal Tadka"
                />
              </div>
              
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <div className="flex">
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://example.com/your-image.jpg"
                  />
                  <span className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                    <FiUpload />
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Provide a URL to an image of your dish (optional)
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Briefly describe your recipe, its origins, or what makes it special..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Prep Time (minutes)*
                </label>
                <input
                  type="number"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Cook Time (minutes)*
                </label>
                <input
                  type="number"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-1">
                  Servings*
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <span className="block text-sm font-medium text-gray-700 mb-2">
                Flavors (select all that apply)
              </span>
              <div className="flex flex-wrap gap-2">
                {flavorOptions.map(flavor => (
                  <button
                    key={flavor}
                    type="button"
                    onClick={() => handleFlavorToggle(flavor)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.flavors.includes(flavor)
                        ? 'bg-primary-100 text-primary-800 border-2 border-primary-300'
                        : 'bg-gray-100 text-gray-800 border-2 border-transparent hover:bg-gray-200'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="spiceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Spice Level*
              </label>
              <select
                id="spiceLevel"
                name="spiceLevel"
                value={formData.spiceLevel}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="mild">Mild</option>
                <option value="medium">Medium</option>
                <option value="hot">Hot</option>
                <option value="extreme">Extreme</option>
              </select>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">Ingredients</h2>
            
            {formData.ingredients.map((ingredient, index) => (
              <div key={`ingredient-${index}`} className="flex items-center mb-3">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleArrayItemChange(index, e.target.value, 'ingredients')}
                  placeholder={`Ingredient ${index + 1}, e.g., "1 cup red lentils"`}
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'ingredients')}
                  className="ml-2 p-2 text-gray-400 hover:text-red-500"
                  aria-label="Remove ingredient"
                >
                  <FiMinus />
                </button>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('ingredients')}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <FiPlus className="mr-1" /> Add Ingredient
            </button>
          </div>
          
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">Instructions</h2>
            
            {formData.instructions.map((instruction, index) => (
              <div key={`instruction-${index}`} className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center mr-3 mt-1">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <textarea
                    value={instruction}
                    onChange={(e) => handleArrayItemChange(index, e.target.value, 'instructions')}
                    placeholder={`Step ${index + 1}`}
                    required
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'instructions')}
                  className="ml-2 p-2 text-gray-400 hover:text-red-500 mt-1"
                  aria-label="Remove instruction"
                >
                  <FiMinus />
                </button>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('instructions')}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <FiPlus className="mr-1" /> Add Step
            </button>
          </div>
          
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">Tips (Optional)</h2>
            <p className="text-gray-600 mb-4">Share any helpful tips or variations for your recipe.</p>
            
            {formData.tips.map((tip, index) => (
              <div key={`tip-${index}`} className="flex items-center mb-3">
                <input
                  type="text"
                  value={tip}
                  onChange={(e) => handleArrayItemChange(index, e.target.value, 'tips')}
                  placeholder={`Tip ${index + 1}`}
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'tips')}
                  className="ml-2 p-2 text-gray-400 hover:text-red-500"
                  aria-label="Remove tip"
                >
                  <FiMinus />
                </button>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('tips')}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <FiPlus className="mr-1" /> Add Tip
            </button>
          </div>
          
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">About You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How you'd like to be credited"
                />
              </div>
              
              <div>
                <label htmlFor="authorEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="authorEmail"
                  name="authorEmail"
                  value={formData.authorEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="For notification when published (not displayed)"
                />
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-8">
            {submitError && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                {submitError}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-md text-white font-medium transition-colors ${
                isSubmitting 
                  ? 'bg-primary-400 cursor-not-allowed' 
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Recipe'}
            </button>
            
            <p className="mt-3 text-sm text-gray-500 text-center">
              By submitting, you agree to share your recipe with the Dhaal Delight community.
              You will be credited as the recipe's author.
            </p>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default ContributeForm;
