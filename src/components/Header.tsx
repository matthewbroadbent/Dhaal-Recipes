import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-primary-600 text-2xl font-display font-bold">Dhaal</span>
              <span className="text-gray-800 text-2xl font-display font-bold">Delight</span>
            </motion.div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <NavItem href="#" label="Home" isActive={true} />
              <NavItem href="#" label="Recipes" />
              <NavItem href="#" label="About" />
              <NavItem href="#" label="Contact" />
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem href="#" label="Home" isActive={true} />
            <MobileNavItem href="#" label="Recipes" />
            <MobileNavItem href="#" label="About" />
            <MobileNavItem href="#" label="Contact" />
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavItem = ({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) => (
  <li>
    <a 
      href={href}
      className={`font-medium text-sm transition-colors duration-200 relative ${
        isActive 
          ? 'text-primary-600' 
          : 'text-gray-600 hover:text-primary-600'
      }`}
    >
      {label}
      {isActive && (
        <motion.span 
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
        />
      )}
    </a>
  </li>
);

const MobileNavItem = ({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) => (
  <a 
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isActive 
        ? 'bg-primary-50 text-primary-600' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
    }`}
  >
    {label}
  </a>
);

export default Header;
