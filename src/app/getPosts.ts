import { supabase } from "@/lib/supabase-client"
import { unstable_noStore } from "next/cache"

export async function getPosts({
  page,
  limit,
}: {
  page: number
  limit: number
}) {
  try {
    const offset = (page - 1) * limit

    unstable_noStore()

    const {
      data: posts,
      count,
      error,
    } = await supabase
      .from("posts")
      .select("*", { count: "exact" })
      .range(offset, offset + limit - 1)
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return { posts, count, error }
  } catch (error: any) {
    console.error("Error fetching posts:", error.message)
    return { posts: null, error: error.message }
  }
}
