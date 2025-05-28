# Dhaal Delight

A recipe sharing website focused on dhaal dishes from across South Asia.

## Features

- Browse a collection of authentic dhaal recipes
- Search and filter recipes by name, flavor, and spice level
- Learn about the rich history of dhaal
- Contribute your own dhaal recipes

## Supabase Setup Instructions

To enable the recipe contribution functionality, you need to set up a Supabase project:

1. **Create a Supabase Project**:
   - Go to [Supabase](https://supabase.com/) and sign up or log in
   - Create a new project and give it a name (e.g., "dhaal-delight")
   - Choose a strong database password and your preferred region
   - Wait for your database to launch

2. **Get Your API Keys**:
   - In your Supabase project dashboard, go to Project Settings > API
   - Copy the "URL" and "anon/public" key

3. **Configure Your Environment**:
   - Create a `.env` file in the root of your project (or edit the existing one)
   - Add your Supabase URL and anon key:
     ```
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. **Run Database Migrations**:
   - In your Supabase dashboard, go to the SQL Editor
   - Copy the contents of `/supabase/migrations/create_recipes_table.sql`
   - Paste it into a new SQL query and run it
   - This will create the necessary table and security policies

5. **Restart Your Application**:
   - Restart your development server to load the new environment variables

## User Authentication (Optional)

If you want to enable user authentication for recipe contributions:

1. Go to Authentication > Settings in your Supabase dashboard
2. Configure Email Auth:
   - Enable Email provider
   - Disable "Confirm email" if you want to simplify the signup process
3. Add authentication UI to your application (this requires additional code)

## Admin Panel for Recipe Approval

To approve submitted recipes:

1. Access your database directly through the Supabase Table Editor
2. Go to the "recipes" table
3. Find recipes with "is_approved" set to false
4. Review the recipe and set "is_approved" to true to publish it

## Deployment

To deploy this application:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy the contents of the `dist` folder to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting
   - etc.

3. Set up environment variables on your hosting provider with your Supabase credentials

## Development

```
npm install
npm run dev
```
