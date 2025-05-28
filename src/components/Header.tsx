import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="bg-amber-600 text-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-amber-600 text-xl font-bold">D</span>
          </div>
          <h1 
            className="text-2xl font-bold font-display cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            Dhaal Delight
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['home', 'about', 'contribute'].map((page) => (
            <motion.button 
              key={page}
              onClick={() => handleNavClick(page as PageType)}
              className={`py-2 px-1 border-b-2 ${currentPage === page ? 'border-white' : 'border-transparent hover:border-amber-300'}`}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-amber-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'about', 'contribute'].map((page) => (
              <motion.button 
                key={page}
                onClick={() => handleNavClick(page as PageType)}
                className={`block w-full text-left px-3 py-2 rounded-md ${currentPage === page ? 'bg-amber-800' : 'hover:bg-amber-800'}`}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
