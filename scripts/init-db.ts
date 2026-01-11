import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcG9qcGFwaHpjbmp1cmZtZW1tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODA2NTczMiwiZXhwIjoyMDgzNjQxNzMyfQ.2EZWX6K7LVp09CGIhyV2yrMgOyrzjqneWoYB7LXOymA'; // service_role key

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function initDatabase() {
  console.log('Initializing BirthdayHub database...');

  const schemaPath = path.join(__dirname, '../supabase/schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');

  // Split SQL statements
  const statements = schema
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  console.log(`Executing ${statements.length} SQL statements...`);

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i] + ';';

    // Skip comments
    if (statement.startsWith('COMMENT')) {
      console.log(`[${i + 1}/${statements.length}] Skipping COMMENT statement`);
      continue;
    }

    try {
      console.log(`[${i + 1}/${statements.length}] Executing...`);
      const { data, error } = await supabase.rpc('exec_sql', { sql: statement });

      if (error) {
        // Try alternative method
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          },
          body: JSON.stringify({ sql: statement })
        });

        if (!response.ok) {
          console.error(`Error executing statement ${i + 1}:`, error);
          // Continue with next statement
        } else {
          console.log(`✓ Statement ${i + 1} executed successfully`);
        }
      } else {
        console.log(`✓ Statement ${i + 1} executed successfully`);
      }
    } catch (err) {
      console.error(`Error executing statement ${i + 1}:`, err);
      // Continue with next statement
    }
  }

  console.log('\nDatabase initialization complete!');
  console.log('Verifying tables...');

  // Verify tables
  const { data: tables, error } = await supabase
    .from('birthstones')
    .select('count')
    .limit(1);

  if (!error) {
    console.log('✓ Tables created successfully!');
  } else {
    console.error('Error verifying tables:', error);
  }
}

initDatabase().catch(console.error);
