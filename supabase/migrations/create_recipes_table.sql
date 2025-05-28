/*
  # Create recipes table

  1. New Tables
    - `recipes`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text)
      - `ingredients` (jsonb)
      - `instructions` (text)
      - `cooking_time` (text)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `recipes` table
    - Add policy for authenticated users to read all recipes
    - Add policy for authenticated users to insert their own recipes
    - Add policy for authenticated users to update their own recipes
*/

CREATE TABLE IF NOT EXISTS recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  ingredients jsonb,
  instructions text,
  cooking_time text,
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read recipes"
  ON recipes
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own recipes"
  ON recipes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own recipes"
  ON recipes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
