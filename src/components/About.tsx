import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          The Rich History of <span className="text-primary-600">Dhaal</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Ancient Origins</h2>
          <p className="text-gray-700 mb-4">
            Dhaal (also spelled dal, dahl, or dhal) has been a staple of South Asian cuisine for thousands of years. Archaeological evidence suggests that lentils were among the first crops domesticated in the Indus Valley Civilization, dating back to 3000 BCE. This makes dhaal one of the oldest prepared foods in human history still widely consumed today.
          </p>
          <p className="text-gray-700 mb-4">
            The word "dhaal" comes from the Sanskrit word "दल" (to split), referring to the split pulses that are the primary ingredient. Throughout history, dhaal has been valued not only for its flavor but also for its high protein content, making it an essential source of nutrition in largely vegetarian diets across the Indian subcontinent.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl overflow-hidden shadow-lg h-64 md:h-auto"
        >
          <img 
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Ancient cooking vessels" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Cultural Significance</h2>
        <p className="text-gray-700 mb-4">
          Dhaal transcends mere sustenance in South Asian culture—it represents comfort, home, and tradition. In many households, a pot of simmering dhaal is the heart of daily meals. Its importance is reflected in numerous idioms and proverbs across languages in the region. For example, the Hindi phrase "घर की मुर्गी दाल बराबर" (ghar ki murgi dal barabar) suggests that even simple dhaal from one's home is as valuable as more exotic fare.
        </p>
        <p className="text-gray-700 mb-4">
          Throughout history, dhaal has been a great equalizer, consumed by people of all social strata. While the wealthy might add ghee and spices, the basic preparation remained accessible to all, making it a unifying element in diverse South Asian cuisines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-xl overflow-hidden shadow-lg h-64 md:h-auto"
        >
          <img 
            src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Traditional spices for dhaal" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Regional Variations</h2>
          <p className="text-gray-700 mb-4">
            As dhaal spread throughout the Indian subcontinent, each region developed its own distinctive preparations. In Punjab, dhaal makhani emerged as a rich, buttery preparation of whole black lentils. Southern India embraced sambhar, a tangy dhaal with tamarind and vegetables. Bengali cuisine features cholar dal, made with split chickpeas and coconut. These regional variations reflect local ingredients, cultural preferences, and historical influences.
          </p>
          <p className="text-gray-700 mb-4">
            The spread of South Asian diaspora communities has taken dhaal worldwide. In the Caribbean, where indentured laborers from India arrived in the 19th century, dhaal evolved into unique local forms. Similarly, East African countries like Uganda and Kenya have their own dhaal traditions influenced by Indian immigrants.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Nutritional Heritage</h2>
        <p className="text-gray-700 mb-4">
          Long before modern nutritional science, traditional wisdom recognized dhaal's health benefits. Ayurvedic texts dating back thousands of years discuss the medicinal properties of different lentils. Modern research confirms what ancient practitioners knew: dhaal is an excellent source of protein, fiber, and micronutrients.
        </p>
        <p className="text-gray-700 mb-4">
          In traditional medicine, specific types of dhaal were prescribed for various health conditions. Moong dhaal was considered cooling and easy to digest, making it suitable for the sick and elderly. Masoor dhaal was valued for its iron content, while urad dhaal was believed to build strength and vitality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-amber-50 rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-display font-bold text-gray-800 mb-3">The Five Main Types of Dhaal</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-medium">Chana Dhaal</span> (Split Chickpeas) - Nutty and sweet with a firm texture</li>
            <li><span className="font-medium">Masoor Dhaal</span> (Red Lentils) - Quick-cooking with a mild, earthy flavor</li>
            <li><span className="font-medium">Moong Dhaal</span> (Split Mung Beans) - Light and easy to digest</li>
            <li><span className="font-medium">Toor Dhaal</span> (Split Pigeon Peas) - The most widely consumed dhaal in India</li>
            <li><span className="font-medium">Urad Dhaal</span> (Black Gram) - Rich and creamy, used in festive dishes</li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-amber-50 rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-display font-bold text-gray-800 mb-3">Dhaal in Modern Times</h3>
          <p className="text-gray-700 mb-4">
            Today, dhaal continues to evolve while maintaining its cultural importance. Chefs around the world are incorporating dhaal into fusion cuisines, while health-conscious consumers are discovering its nutritional benefits.
          </p>
          <p className="text-gray-700">
            As interest in plant-based proteins grows globally, dhaal is gaining recognition beyond South Asian communities as a sustainable, affordable, and delicious protein source for the future.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center"
      >
        <p className="text-lg text-gray-600 italic">
          "In the vast tapestry of South Asian cuisine, dhaal is the golden thread that connects regions, generations, and communities."
        </p>
      </motion.div>
    </div>
  );
};

export default About;
