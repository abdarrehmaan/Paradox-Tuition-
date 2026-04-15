import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://toaqcanyhkdbzdpxyfrd.supabase.co';
const supabaseAnonKey = 'sb_publishable_Qa-aNDpc3lGAK_1TnM5K4g_sISn7HFZ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log('Testing Supabase connection...');
  try {
    const { data, error } = await supabase.from('Tutors').select('*').limit(1);
    if (error) {
       console.error('Error fetching Data:', error);
    } else {
       console.log('Success! Data fetched:', data);
    }
    
    const session = await supabase.auth.getSession();
    console.log('Session fetch result:', session.error ? session.error : 'Success');
  } catch (err) {
    console.error('Exception during Supabase test:', err);
  }
}

test();
