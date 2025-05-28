import { useState } from 'react'
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import SearchFilters from './components/SearchFilters'
import Footer from './components/Footer'
import { Recipe } from './types'
import { recipes } from './data/recipes'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string | null>(null)
  
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
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
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
          
          <RecipeList recipes={filteredRecipes} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
