"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Hamburger from "../Hamburger"
import Logo from "../Logo"
import { Input } from "../ui/input"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Search from "../Search"

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const headerItems = [
    <Hamburger key="hamburger" />,
    <Logo key="logo" />,
    <Search
      key="search"
      handleSearchIconClick={handleSearchIconClick}
      isSearchOpen={isSearchOpen}
    />,
  ]

  return (
    <MaxWidthWrapper className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="h-20 flex items-center justify-between">
        {headerItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="group"
          >
            {item}
          </motion.div>
        ))}
      </header>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={
              "justify-end flex-1 text-xs cursor-pointer uppercase tracking-widest flex items-center"
            }
          >
            <Input
              type="search"
              placeholder="Search"
              className="w-full"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>
    </MaxWidthWrapper>
  )
}

export default Header
