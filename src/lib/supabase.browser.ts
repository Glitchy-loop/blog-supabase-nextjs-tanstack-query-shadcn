// import { Database } from "@/types/supabase"
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs"

const supabase = createPagesBrowserClient()

export default supabase
