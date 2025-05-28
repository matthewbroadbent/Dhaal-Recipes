import { useState, useEffect } from 'react'
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import SearchFilters from './components/SearchFilters'
import Footer from './components/Footer'
import About from './components/About'
import ContributeForm from './components/ContributeForm'
import { Recipe } from './types'
import { recipes as staticRecipes } from './data/recipes'
import { fetchApprovedRecipes } from './services/recipeService'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contribute'>('home')
  const [recipes, setRecipes] = useState<Recipe[]>(staticRecipes)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Fetch recipes from Supabase when the app loads
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        // Check if we have Supabase credentials
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
        
        if (supabaseUrl && supabaseKey) {
          try {
            // Fetch recipes from Supabase
            const dbRecipes = await fetchApprovedRecipes()
            
            // Combine static recipes with database recipes
            // In a production app, you might want to only use database recipes
            setRecipes([...staticRecipes, ...dbRecipes])
          } catch (err) {
            console.error('Error loading recipes from Supabase:', err)
            // Fall back to static recipes only
            setRecipes(staticRecipes)
          }
        }
      } catch (err) {
        console.error('Error in loadRecipes:', err)
        setError('Failed to load recipes. Using default recipes instead.')
        // Ensure we at least have the static recipes
        setRecipes(staticRecipes)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadRecipes()
  }, [])
  
  const filteredRecipes = recipes.filter((recipe: Recipe) => {
    // Search term filter
    const matchesSearchTerm = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Flavor filter
    const matchesFlavors = selectedFlavors.length === 0 || 
                          selectedFlavors.some(flavor => recipe.flavors.includes(flavor));
    
    // Spice level filter
    const matchesSpiceLevel = !selectedSpiceLevel || recipe.spiceLevel === selectedSpiceLevel;
    
    return matchesSearchTerm && matchesFlavors && matchesSpiceLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentPage === 'home' ? (
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover the Magic of <span className="text-primary-600">Dhaal</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our collection of authentic dhaal recipes from across South Asia, 
                from comforting classics to exciting modern variations.
              </p>
            </div>
            
            <SearchFilters 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedFlavors={selectedFlavors}
              setSelectedFlavors={setSelectedFlavors}
              selectedSpiceLevel={selectedSpiceLevel}
              setSelectedSpiceLevel={setSelectedSpiceLevel}
            />
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
                <p className="mt-2 text-gray-600">Loading recipes...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                {error}
              </div>
            ) : (
              <RecipeList recipes={filteredRecipes} />
            )}
          </div>
        ) : currentPage === 'about' ? (
          <About />
        ) : (
          <ContributeForm />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
