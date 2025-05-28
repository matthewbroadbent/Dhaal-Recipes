export interface Recipe {
  id: number | string;  // Changed to accept both number and string for Supabase compatibility
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
  authorName?: string;
  authorEmail?: string;
}

export type SpiceLevel = 'mild' | 'medium' | 'hot' | 'extreme';
