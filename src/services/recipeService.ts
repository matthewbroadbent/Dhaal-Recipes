import { supabase } from './supabaseClient';
import { Recipe } from '../types';

// Submit a new recipe
export const submitRecipe = async (recipe: Omit<Recipe, 'id'>) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .insert([
        { 
          ...recipe,
          prep_time: recipe.prepTime,
          cook_time: recipe.cookTime,
          author_name: recipe.authorName,
          author_email: recipe.authorEmail, // This is now valid since we added it to the Recipe type
          is_approved: false // New recipes start as unapproved
        }
      ])
      .select();

    if (error) {
      console.error('Error submitting recipe:', error);
      throw error;
    }

    return data?.[0];
  } catch (error) {
    console.error('Error in submitRecipe:', error);
    throw error;
  }
};

// Fetch all approved recipes
export const fetchApprovedRecipes = async (): Promise<Recipe[]> => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('is_approved', true);

    if (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }

    // Transform the data to match our Recipe type
    return (data || []).map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.image || '',
      prepTime: item.prep_time,
      cookTime: item.cook_time,
      servings: item.servings,
      spiceLevel: item.spice_level,
      flavors: item.flavors || [],
      ingredients: item.ingredients || [],
      instructions: item.instructions || [],
      tips: item.tips || [],
      authorName: item.author_name,
      authorEmail: item.author_email
    }));
  } catch (error) {
    console.error('Error in fetchApprovedRecipes:', error);
    // Return empty array instead of throwing to prevent app crash
    return [];
  }
};
