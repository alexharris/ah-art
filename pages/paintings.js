
import { createClient } from '@supabase/supabase-js'
import Painting from '../components/painting/Painting'

const supabaseUrl = 'https://fnsasmiiibssodluabbh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const paintings = await supabase.from('paintings').select().order('title', { ascending: true })
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      paintings,
    },
  }
}


// const data = await supabase.from('paintings').select()

export default function Paintings({paintings}) {



  return (
    <div>
      <h1>Paintings</h1>

      <div className="grid grid-cols-3 gap-12 items-end">
        {paintings.data.map((painting) => (
          
          <Painting 
            image={'https://fnsasmiiibssodluabbh.supabase.co/storage/v1/object/public/paintings/' + painting.image}
            title={painting.title}
            medium={painting.medium}
            size={painting.size}
            status={painting.status} 
            categories={painting.categories}
            key={painting.id}
          />
          
        ))}
      </div>
    </div>
  )
}
