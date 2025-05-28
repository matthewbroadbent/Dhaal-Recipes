import { Recipe } from '../types';
import { curryGuyRecipes } from './curryGuyRecipes';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Classic Masoor Dhaal",
    description: "A comforting red lentil dhaal with a perfect balance of spices. This everyday staple is light yet satisfying.",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    spiceLevel: "medium",
    flavors: ["tangy", "earthy", "aromatic"],
    ingredients: [
      "1 cup red lentils (masoor dal)",
      "3 cups water",
      "1 medium onion, finely chopped",
      "2 tomatoes, chopped",
      "2 green chilies, slit",
      "1 tbsp ginger-garlic paste",
      "1/2 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1/2 tsp red chili powder",
      "1 tbsp ghee or oil",
      "Salt to taste",
      "Fresh coriander leaves for garnish",
      "1 tsp garam masala"
    ],
    instructions: [
      "Wash the lentils thoroughly until the water runs clear.",
      "In a pressure cooker or pot, add lentils and water. Cook until soft (about 15-20 minutes).",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for 2 minutes.",
      "Add chopped tomatoes and cook until soft.",
      "Add turmeric, coriander powder, red chili powder, and salt. Mix well.",
      "Add the cooked lentils to this mixture and simmer for 5-7 minutes.",
      "Finish with a sprinkle of garam masala and garnish with fresh coriander leaves."
    ],
    tips: [
      "For a creamier texture, mash some of the lentils with the back of a spoon.",
      "A squeeze of lemon juice at the end adds a lovely tangy flavor."
    ]
  },
  {
    id: 2,
    name: "Tadka Moong Dhaal",
    description: "Yellow moong dhaal tempered with cumin, garlic, and dried red chilies. A light and protein-rich dish.",
    image: "https://images.pexels.com/photos/8472863/pexels-photo-8472863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 5,
    cookTime: 25,
    servings: 4,
    spiceLevel: "mild",
    flavors: ["garlicky", "nutty", "simple"],
    ingredients: [
      "1 cup yellow moong dal",
      "3 cups water",
      "1/2 tsp turmeric powder",
      "Salt to taste",
      "For tadka (tempering):",
      "2 tbsp ghee",
      "1 tsp cumin seeds",
      "4-5 garlic cloves, sliced",
      "2 dried red chilies",
      "1/4 tsp asafoetida (hing)",
      "1 tsp red chili powder",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Wash moong dal thoroughly and drain.",
      "In a pressure cooker or pot, add dal, water, turmeric, and salt. Cook until soft and mushy.",
      "For the tadka, heat ghee in a small pan.",
      "Add cumin seeds and let them splutter.",
      "Add sliced garlic and sauté until golden brown.",
      "Add dried red chilies and asafoetida. Sauté for a few seconds.",
      "Add red chili powder and immediately pour this tadka over the cooked dal.",
      "Garnish with fresh coriander leaves and serve hot with rice or roti."
    ],
    tips: [
      "For extra flavor, add a pinch of garam masala to the tadka.",
      "This dal tastes even better the next day as the flavors develop."
    ]
  },
  {
    id: 3,
    name: "Punjabi Chana Dhaal",
    description: "A rich and robust dhaal made with split chickpeas, perfect for special occasions. Hearty and deeply satisfying.",
    image: "https://images.pexels.com/photos/7625054/pexels-photo-7625054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 15,
    cookTime: 45,
    servings: 6,
    spiceLevel: "hot",
    flavors: ["rich", "smoky", "complex"],
    ingredients: [
      "1 cup chana dal (split chickpeas)",
      "4 cups water",
      "1 large onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger paste",
      "1 tbsp garlic paste",
      "2-3 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp coriander powder",
      "1 tsp garam masala",
      "1/2 tsp amchur (dried mango powder)",
      "3 tbsp ghee or oil",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Soak chana dal for 1-2 hours, then drain.",
      "In a pressure cooker, add dal and water. Cook until soft but not mushy.",
      "Heat ghee in a large pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger paste, garlic paste, and green chilies. Sauté for 2-3 minutes.",
      "Add tomato puree and cook until oil separates.",
      "Add turmeric, red chili powder, coriander powder, and salt. Mix well.",
      "Add the cooked dal and simmer for 15-20 minutes on low heat.",
      "Add garam masala and amchur. Mix well.",
      "Garnish with fresh coriander leaves and serve hot with naan or rice."
    ],
    tips: [
      "For an authentic smoky flavor, place a piece of coal in a small metal bowl in the center of the dal. Pour a little ghee on the coal and immediately cover the pot for 2-3 minutes.",
      "Adding a tablespoon of cream before serving makes it extra rich."
    ]
  },
  {
    id: 4,
    name: "Spicy Toor Dhaal",
    description: "A fiery South Indian style toor dhaal with curry leaves and mustard seeds. Bold and vibrant flavors.",
    image: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    spiceLevel: "extreme",
    flavors: ["spicy", "tangy", "aromatic"],
    ingredients: [
      "1 cup toor dal (split pigeon peas)",
      "3 cups water",
      "1/2 tsp turmeric powder",
      "Salt to taste",
      "For tempering:",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "2 dried red chilies",
      "10-12 curry leaves",
      "1 medium onion, finely chopped",
      "2 tomatoes, chopped",
      "3-4 green chilies, slit",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1/2 tsp asafoetida (hing)",
      "1 tbsp tamarind paste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Wash toor dal thoroughly and drain.",
      "In a pressure cooker, add dal, water, turmeric, and salt. Cook until soft.",
      "Heat oil in a pan. Add mustard seeds and let them splutter.",
      "Add cumin seeds, dried red chilies, and curry leaves.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for 2 minutes.",
      "Add chopped tomatoes and cook until soft.",
      "Add red chili powder and asafoetida. Mix well.",
      "Add the cooked dal and tamarind paste. Simmer for 10 minutes.",
      "Garnish with fresh coriander and serve hot with rice."
    ],
    tips: [
      "For an authentic South Indian flavor, add a pinch of fenugreek seeds to the tempering.",
      "Serve with a dollop of ghee on top for extra richness."
    ]
  },
  {
    id: 5,
    name: "Creamy Urad Dhaal",
    description: "A luxurious black gram dhaal that's slow-cooked to perfection. Rich, creamy, and indulgent.",
    image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 20,
    cookTime: 60,
    servings: 6,
    spiceLevel: "medium",
    flavors: ["creamy", "buttery", "rich"],
    ingredients: [
      "1 cup whole urad dal (black gram)",
      "1/4 cup rajma (kidney beans)",
      "4 cups water",
      "1 large onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger paste",
      "1 tbsp garlic paste",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp coriander powder",
      "1 tsp cumin powder",
      "1 tsp garam masala",
      "3 tbsp butter or ghee",
      "2 tbsp cream",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Soak urad dal and rajma overnight or for at least 6 hours.",
      "Drain and rinse the soaked dal and beans.",
      "In a pressure cooker, add dal, beans, water, and salt. Cook until very soft.",
      "Heat butter in a large pan. Add chopped onions and sauté until golden brown.",
      "Add ginger paste and garlic paste. Sauté for 2-3 minutes.",
      "Add tomato puree and cook until oil separates.",
      "Add turmeric, red chili powder, coriander powder, and cumin powder. Mix well.",
      "Add the cooked dal and simmer for 30 minutes on low heat, stirring occasionally.",
      "Add garam masala and cream. Mix well.",
      "Garnish with fresh coriander and serve hot with naan or rice."
    ],
    tips: [
      "For an authentic restaurant-style flavor, add a tablespoon of butter just before serving.",
      "The longer you simmer, the creamier it gets. Don't rush this recipe!"
    ]
  },
  {
    id: 6,
    name: "Coconut Moong Dhaal",
    description: "A light and refreshing South Indian style dhaal with coconut and curry leaves. Perfect for summer days.",
    image: "https://images.pexels.com/photos/6260923/pexels-photo-6260923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    spiceLevel: "mild",
    flavors: ["coconutty", "fresh", "light"],
    ingredients: [
      "1 cup yellow moong dal",
      "3 cups water",
      "1/2 cup grated coconut",
      "1/2 tsp turmeric powder",
      "Salt to taste",
      "For tempering:",
      "2 tbsp coconut oil",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "2 dried red chilies",
      "10-12 curry leaves",
      "1 medium onion, finely chopped",
      "2 green chilies, slit",
      "1 tbsp ginger, finely chopped",
      "Fresh coriander for garnish",
      "Lemon juice to taste"
    ],
    instructions: [
      "Wash moong dal thoroughly and drain.",
      "In a pressure cooker or pot, add dal, water, turmeric, and salt. Cook until soft.",
      "Blend half of the cooked dal with grated coconut to make a smooth paste.",
      "Mix this paste back with the remaining dal.",
      "For tempering, heat coconut oil in a pan.",
      "Add mustard seeds and let them splutter.",
      "Add cumin seeds, dried red chilies, and curry leaves.",
      "Add chopped onions and sauté until translucent.",
      "Add green chilies and ginger. Sauté for a minute.",
      "Pour this tempering over the dal mixture.",
      "Add lemon juice and garnish with fresh coriander.",
      "Serve hot with rice or appam."
    ],
    tips: [
      "For extra coconut flavor, sprinkle some toasted coconut on top before serving.",
      "This dal pairs beautifully with coconut rice."
    ]
  },
  {
    id: 7,
    name: "Spinach Masoor Dhaal",
    description: "A nutritious combination of red lentils and spinach. Packed with iron and protein.",
    image: "https://images.pexels.com/photos/6260467/pexels-photo-6260467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    spiceLevel: "medium",
    flavors: ["earthy", "fresh", "healthy"],
    ingredients: [
      "1 cup red lentils (masoor dal)",
      "3 cups water",
      "2 cups fresh spinach, chopped",
      "1 medium onion, finely chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "1/2 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1/2 tsp red chili powder",
      "1/2 tsp garam masala",
      "2 tbsp ghee or oil",
      "Salt to taste",
      "Fresh coriander for garnish",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Wash the lentils thoroughly until the water runs clear.",
      "In a pressure cooker or pot, add lentils and water. Cook until soft.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and sauté for 2 minutes.",
      "Add chopped tomatoes and cook until soft.",
      "Add turmeric, coriander powder, red chili powder, and salt. Mix well.",
      "Add chopped spinach and cook until wilted.",
      "Add the cooked lentils and simmer for 5-7 minutes.",
      "Add garam masala and mix well.",
      "Garnish with fresh coriander and serve hot with lemon wedges on the side."
    ],
    tips: [
      "For a smoother texture, blend the spinach before adding it to the dal.",
      "Add a dollop of yogurt on top for a creamy contrast."
    ]
  },
  {
    id: 8,
    name: "Panchmel Dhaal",
    description: "A royal five-lentil mixture that's traditionally served at festive occasions. Complex and deeply satisfying.",
    image: "https://images.pexels.com/photos/6260922/pexels-photo-6260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 20,
    cookTime: 50,
    servings: 6,
    spiceLevel: "hot",
    flavors: ["complex", "rich", "festive"],
    ingredients: [
      "1/4 cup toor dal (split pigeon peas)",
      "1/4 cup chana dal (split chickpeas)",
      "1/4 cup moong dal (split green gram)",
      "1/4 cup masoor dal (red lentils)",
      "1/4 cup urad dal (split black gram)",
      "5 cups water",
      "1 large onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger paste",
      "1 tbsp garlic paste",
      "2-3 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp coriander powder",
      "1 tsp garam masala",
      "1/2 tsp asafoetida (hing)",
      "3 tbsp ghee",
      "Salt to taste",
      "Fresh coriander for garnish",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Wash all dals thoroughly and soak for 30 minutes, then drain.",
      "In a pressure cooker, add all dals, water, and salt. Cook until soft but not mushy.",
      "Heat ghee in a large pan. Add cumin seeds and asafoetida.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger paste, garlic paste, and green chilies. Sauté for 2-3 minutes.",
      "Add tomato puree and cook until oil separates.",
      "Add turmeric, red chili powder, and coriander powder. Mix well.",
      "Add the cooked dals and simmer for 15-20 minutes on low heat.",
      "Add garam masala and mix well.",
      "Garnish with fresh coriander and serve hot with lemon wedges on the side."
    ],
    tips: [
      "Each dal has a different cooking time, so it's best to cook them separately and then combine if you want perfect texture.",
      "This dal tastes even better the next day as the flavors develop."
    ]
  },
  ...curryGuyRecipes
];

export const flavorOptions = [
  "tangy", "earthy", "aromatic", "garlicky", "nutty", "simple", 
  "rich", "smoky", "complex", "spicy", "coconutty", "fresh", 
  "light", "creamy", "buttery", "healthy", "festive"
];

export const spiceLevelOptions = [
  { value: "mild", label: "Mild" },
  { value: "medium", label: "Medium" },
  { value: "hot", label: "Hot" },
  { value: "extreme", label: "Extreme" }
];
