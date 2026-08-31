import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nwqisqvjylpfdtwegwni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53cWlzcXZqeWxwZmR0d2Vnd25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MjIyMDcsImV4cCI6MjEwMDA5ODIwN30.cM7aePYTl0DByQm_LklHGEi_c08227itnHo1A7Ckya8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
