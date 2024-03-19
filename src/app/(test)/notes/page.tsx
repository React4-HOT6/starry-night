import { createClient } from "@supabase/supabase-js";

export default async function Notes() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl!, supabaseKey!);

  const { data, error } = await supabase.from("todos").select();

  if (error) {
    return <p>error</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
