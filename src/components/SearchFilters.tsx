import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import { flavorOptions, spiceLevelOptions } from '../data/recipes';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedFlavors: string[];
  setSelectedFlavors: (flavors: string[]) => void;
  selectedSpiceLevel: string | null;
  setSelectedSpiceLevel: (level: string | null) => void;
}

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedFlavors,
  setSelectedFlavors,
  selectedSpiceLevel,
  setSelectedSpiceLevel
}: SearchFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFlavor = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter(f => f !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const clearFilters = () => {
    setSelectedFlavors([]);
    setSelectedSpiceLevel(null);
  };

  const hasActiveFilters = selectedFlavors.length > 0 || selectedSpiceLevel !== null;

  return (
    <div className="mb-8">
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          className="input pl-10 bg-white"
          placeholder="Search for dhaal recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="btn btn-outline flex items-center gap-2"
        >
          <FiFilter size={16} />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {selectedFlavors.length + (selectedSpiceLevel ? 1 : 0)}
            </span>
          )}
        </button>
        
        {hasActiveFilters && (
          <button 
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            <FiX size={14} />
            <span>Clear all filters</span>
          </button>
        )}
      </div>
      
      {isFiltersOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-4 mb-6"
        >
          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Flavor Profile</h3>
            <div className="flex flex-wrap gap-2">
              {flavorOptions.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => toggleFlavor(flavor)}
                  className={`badge border ${
                    selectedFlavors.includes(flavor)
                      ? 'bg-primary-100 text-primary-800 border-primary-300'
                      : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Spice Level</h3>
            <div className="flex flex-wrap gap-2">
              {spiceLevelOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedSpiceLevel(
                    selectedSpiceLevel === option.value ? null : option.value
                  )}
                  className={`badge border ${
                    selectedSpiceLevel === option.value
                      ? `bg-spice-${option.value} text-white border-spice-${option.value}`
                      : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedFlavors.map((flavor) => (
            <div 
              key={flavor}
              className="badge bg-primary-100 text-primary-800 border border-primary-300 flex items-center gap-1"
            >
              {flavor}
              <button 
                onClick={() => toggleFlavor(flavor)}
                className="ml-1 text-primary-600 hover:text-primary-800"
              >
                <FiX size={12} />
              </button>
            </div>
          ))}
          
          {selectedSpiceLevel && (
            <div 
              className={`badge bg-spice-${selectedSpiceLevel} text-white border border-spice-${selectedSpiceLevel} flex items-center gap-1`}
            >
              {spiceLevelOptions.find(o => o.value === selectedSpiceLevel)?.label}
              <button 
                onClick={() => setSelectedSpiceLevel(null)}
                className="ml-1 text-white"
              >
                <FiX size={12} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
