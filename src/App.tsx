import { useState, useEffect } from 'react';
import { supabase } from './services/supabaseClient';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeModal from './components/RecipeModal';
import About from './components/About';
import { Recipe, PageType } from './types';
import { recipes as allRecipes } from './data/recipes';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        
        // Check if we can connect to Supabase
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .limit(3);
        
        if (error) {
          console.error('Supabase error:', error);
          setError(`Database connection error: ${error.message}`);
          // Use local recipes data instead
          setRecipes(allRecipes);
          return;
        }
        
        console.log('Connection successful, data:', data);
        if (data && data.length > 0) {
          setRecipes(data as Recipe[]);
        } else {
          // Use local recipes data if no data from Supabase
          setRecipes(allRecipes);
        }
      } catch (err) {
        console.error('Error:', err);
        setError(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
        // Use local recipes data in case of error
        setRecipes(allRecipes);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-amber-700 mb-4">Explore Dhaal Recipes</h2>
              <p className="text-gray-700">
                Discover a world of flavorful dhaal recipes from across South Asia. From creamy masoor to hearty chana, 
                find your perfect dhaal recipe.
              </p>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
              </div>
            ) : (
              <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
            )}
          </>
        );
      case 'about':
        return <About />;
      case 'contribute':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-2xl font-bold text-amber-700 mb-4">Contribute Your Recipe</h2>
            <p className="text-gray-700 mb-4">
              We love hearing from fellow dhaal enthusiasts! Share your favorite dhaal recipe with our community.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700 mb-1">Recipe Name</label>
                <input 
                  type="text" 
                  id="recipeName" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  placeholder="e.g., Spinach Masoor Dhaal"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  id="description" 
                  rows={3} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  placeholder="A brief description of your recipe"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-1">Prep Time (minutes)</label>
                  <input 
                    type="number" 
                    id="prepTime" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                    placeholder="15"
                  />
                </div>
                <div>
                  <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-1">Cook Time (minutes)</label>
                  <input 
                    type="number" 
                    id="cookTime" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                    placeholder="30"
                  />
                </div>
                <div>
                  <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-1">Servings</label>
                  <input 
                    type="number" 
                    id="servings" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                    placeholder="4"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
                <textarea 
                  id="ingredients" 
                  rows={5} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  placeholder="List each ingredient on a new line"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                <textarea 
                  id="instructions" 
                  rows={5} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  placeholder="List each step on a new line"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="tips" className="block text-sm font-medium text-gray-700 mb-1">Tips (Optional)</label>
                <textarea 
                  id="tips" 
                  rows={3} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  placeholder="Any special tips or variations"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="authorName" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" 
                  placeholder="How you'd like to be credited"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Spice Level</label>
                <div className="flex space-x-4">
                  {['Mild', 'Medium', 'Hot', 'Extreme'].map((level) => (
                    <label key={level} className="flex items-center">
                      <input 
                        type="radio" 
                        name="spiceLevel" 
                        value={level.toLowerCase()} 
                        className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Submit Recipe
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-6xl mx-auto py-8 px-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <p className="mt-2">
              Using local recipe data instead. This could be due to missing environment variables or database connection issues.
            </p>
          </div>
        )}

        {renderContent()}
      </main>

      <Footer />

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
