"use client"

import { AnimatePresence, Spring } from "framer-motion"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const TransitionProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathName = usePathname()
  return (
    // <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
    <motion.div key={pathName} className="overflow-hidden">
      {/* <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        > */}
      <motion.div
      //   key={pathName}
      //   initial={{ scale: 0.9 }}
      //   animate={{ scale: 1 }}
      //   exit={{ scale: 0.9 }}
      //   transition={{
      //     type: "spring",
      //     mass: 0.2,
      //     stiffness: 80,
      //     damping: 10,
      //   }}
      >
        {children}
      </motion.div>
    </motion.div>
    // </AnimatePresence>
  )
}

export default TransitionProvider
