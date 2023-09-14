import {createClient} from "@supabase/supabase-js"


// Have to write REACT_APP_ or else it won't work, funny ? I know 

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
