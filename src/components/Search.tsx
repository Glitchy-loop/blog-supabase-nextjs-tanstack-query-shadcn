import { SearchIcon } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SearchProps {
  handleSearchIconClick: () => void
  isSearchOpen: boolean
}

const Search = ({ handleSearchIconClick, isSearchOpen }: SearchProps) => {
  return (
    <div className="flex justify-end flex-1 text-xs cursor-pointer">
      <div
        className="uppercase tracking-widest flex items-center"
        onClick={handleSearchIconClick}
      >
        <div className="text-xs ms-2 uppercase tracking-widest overflow-hidden relative top-2">
          <motion.div
            className={cn(
              "transition duration-300 ease-in-out relative",
              isSearchOpen && "-translate-y-full"
            )}
          >
            Search
          </motion.div>
          <motion.div
            className={cn(
              "transition duration-300 ease-in-out relative opacity-0",
              isSearchOpen && "-translate-y-full opacity-100"
            )}
          >
            Close
          </motion.div>
        </div>
        <SearchIcon className="h-4 w-4 ms-2" />
      </div>
    </div>
  )
}

export default Search
