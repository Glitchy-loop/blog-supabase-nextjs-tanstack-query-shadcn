"use client"

import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { supabase } from "@/lib/supabase-client"
import Post from "@/components/Post"
import { PostType } from "./types"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const Page = () => {
  const { ref, inView } = useInView()

  const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
    const { data: posts } = await supabase
      .from("posts")
      .select("*")
      .range((pageParam - 1) * 1, pageParam * 1)
      .order("created_at", { ascending: true })

    return posts
  }

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage?.length ? allPages.length : undefined
      return nextPage
    },
  })

  const content = data?.pages.map((posts: PostType[] | null) =>
    posts?.map((post, index) => {
      if (post && posts.length === index + 1) {
        return <Post key={post.id} post={post} index={index} />
      }
    })
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>Error: {error?.message}</p>
      </div>
    )
  }

  return (
    <div>
      {/* Posts */}
      <div className="grid grid-cols-1 gap-6">{content}</div>
      <div className="flex justify-center items-center py-6">
        <Button
          variant="outline"
          ref={ref}
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "No more posts to load"}
        </Button>
        {isFetchingNextPage && <Loader2 className="animate-spin" />}
      </div>
    </div>
  )
}

export default Page
