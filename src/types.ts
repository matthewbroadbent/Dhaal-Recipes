export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extreme';
  flavors: string[];
  ingredients: string[];
  instructions: string[];
  tips?: string[];
}

export type SpiceLevel = 'mild' | 'medium' | 'hot' | 'extreme';
