import { createClient } from "@supabase/supabase-js";
// import { Database } from "./database.types";

export default async function Notes() {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: todos, error } = await supabase.from("todos").select("*");

  if (error) {
    <p>error</p>;
  }

  return <p>{JSON.stringify(todos, null, 2)}</p>;
}
