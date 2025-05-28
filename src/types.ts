export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extreme';
  flavors: string[];
  authorName?: string;
  authorEmail?: string; // Added authorEmail field
}

export type SpiceLevel = 'mild' | 'medium' | 'hot' | 'extreme'; // Added SpiceLevel export
export type PageType = 'home' | 'about' | 'contribute';
