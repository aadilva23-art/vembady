import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tatkmzzwgkhjqtcvgzqj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhdGttenp3Z2toanF0Y3ZnenFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5Njg1NDcsImV4cCI6MjA4ODU0NDU0N30.BusLn5-63-MxqdesZuBe2BjbvbLJH0GeCh3MMNqRoV8'

export const supabase = createClient(supabaseUrl, supabaseKey)
