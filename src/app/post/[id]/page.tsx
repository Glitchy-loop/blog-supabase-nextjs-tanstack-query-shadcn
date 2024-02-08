import { supabase } from "@/lib/supabase-client"
import { getPost } from "./getPost"
import Image from "next/image"

interface SinglePostPageProps {
  searchParams: {
    id: string
  }
}

const SinglePostPage = async ({ searchParams }: SinglePostPageProps) => {
  const { post, error } = await getPost({ id: searchParams.id })

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  )
}

export default SinglePostPage
