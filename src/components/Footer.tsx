import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Dhaal Delight</h3>
            <p className="text-amber-100">
              Celebrating the rich tradition of dhaal recipes from across South Asia.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#" 
                  className="text-amber-100 hover:text-white inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-amber-100 hover:text-white inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-amber-100 hover:text-white inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Contribute
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-amber-700 text-center text-amber-200 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Dhaal Delight. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
