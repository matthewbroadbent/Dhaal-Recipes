import { createClient } from '@supabase/supabase-js';

// Use environment variables with fallback values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vzeuomaequabgwnluztr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6ZXVvbWFlcXVhYmd3bmx1enRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MzUyODksImV4cCI6MjA2NDAxMTI4OX0.8iEvqfBDQuzC81ED6LKLtZE2mz9zQrlfFQEcwPmOIjQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
