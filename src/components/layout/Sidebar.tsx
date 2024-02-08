"use client"

import { Button } from "../ui/button"
import { motion } from "framer-motion"

const tags = [
  { name: "Travel", slug: "travel" },
  { name: "Style", slug: "style" },
  { name: "Food", slug: "food" },
  { name: "Tech", slug: "tech" },
]

const Sidebar = () => {
  return (
    <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-10rem)] shrink-0 md:sticky md:block ps-8">
      <div className="relative overflow-hidden py-6 lg:py-8 grid grid-cols-2 gap-3">
        {tags.map((tag, i) => (
          <motion.div
            key={tag.slug}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: 0.75 + i * 0.1,
              ease: "easeInOut",
            }}
            animate={{ opacity: 1, y: 0 }}
            className="group"
          >
            <Button className="w-full" variant="outline">
              {tag.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
