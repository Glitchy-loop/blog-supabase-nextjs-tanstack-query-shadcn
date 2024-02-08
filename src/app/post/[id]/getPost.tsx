import { supabase } from "@/lib/supabase-client"

export async function getPost({ id }: { id: string }) {
  try {
    const { data: post, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      console.error(error)
    }

    return { post, error }
  } catch (error) {
    throw error
  }
}
