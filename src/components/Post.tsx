"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { PostType } from "@/app/types"

interface Prop {
  post: PostType
  index: number
}

const Post = ({ post }: Prop) => {
  return (
    <Link href={`/post/post?id=${post.id}`}>
      <motion.div key={post.id} className="group cursor-pointer">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className="relative grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
        >
          <Image
            src={post.image}
            alt={post.title}
            priority={true}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80" />
          <div className="absolute bottom-24 left-24">
            <span className="relative bottom-4">tag</span>
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </div>
          <button className="absolute left-24 bottom-8">Read more</button>
          <div className="absolute right-24 bottom-8 text-xs">
            {new Date(post.created_at).toLocaleDateString()}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default Post
