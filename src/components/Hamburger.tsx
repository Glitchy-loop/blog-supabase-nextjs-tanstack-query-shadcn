"use client"

import navItems from "@/app/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-1 justify-start">
      {/* Hamburger */}
      <div
        className="flex items-center cursor-pointer z-50 relative"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col items-center -rotate-45">
          <span
            className={cn(
              "w-[12px] h-[2px] bg-secondary-foreground transition-transform duration-300 ease-in-out",
              open && "rotate-90"
            )}
          ></span>
          <span className="w-[24px] h-[2px] bg-secondary-foreground mt-[4px]"></span>
          <span
            className={cn(
              "w-[12px] h-[2px] bg-secondary-foreground mt-[4px] transition-transform duration-300 ease-in-out",
              open && "rotate-90"
            )}
          ></span>
        </div>
        <div className="text-xs ms-2 uppercase tracking-widest overflow-hidden relative top-2">
          <motion.div
            className={cn(
              "transition duration-300 ease-in-out relative",
              open && "-translate-y-full"
            )}
          >
            Menu
          </motion.div>
          <motion.div
            className={cn(
              "transition duration-300 ease-in-out relative opacity-0",
              open && "-translate-y-full opacity-100"
            )}
          >
            Close
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
