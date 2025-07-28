const { createClient } = require("@supabase/supabase-js");

const supabase = createClient('https://warhujbutqgdxsteihnf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhcmh1amJ1dHFnZHhzdGVpaG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NTM1MTYsImV4cCI6MjA2OTAyOTUxNn0.6GVEqFwtPqr0vO9EUTO3OFOLVTmqugP8nQ9h_d-aa8g')

export {supabase};