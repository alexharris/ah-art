import React, {useEffect} from 'react';
import { createClient } from '@supabase/supabase-js'
import Painting from '../components/painting/Painting'

const supabaseUrl = 'https://fnsasmiiibssodluabbh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const paintings = await supabase.from('paintings').select().order('title', { ascending: true })
  
  return {
    props: {
      paintings,
      
    },
  }
}


class Paintings extends React.Component {
  constructor(props) {
    super(props);  
    this.handleLightboxOpenChange = this.handleLightboxOpenChange.bind(this)  
    this.state = {
      lightboxOpen: 'closed',
      paintings: this.props.paintings,
    };
  }

  handleLightboxOpenChange(id) {
    this.setState({lightboxOpen: id})
  }

  componentDidMount() {
    console.log('did mount');
      document.addEventListener('keydown', (e) => {      
        if(e.keyCode == 39) { //right arrow
          console.log('right arrow')
          // console.log(this.state.lightboxOpen)
          // console.log(this.state.paintings.data.length)
          if(this.state.lightboxOpen < this.state.paintings.data.length) {
            this.setState({lightboxOpen: (this.state.lightboxOpen + 1)})
          }
          
        }
        if(e.keyCode == 37) { //left arrow
          console.log('left arrow')
          if(this.state.lightboxOpen !== 0) {
            this.setState({lightboxOpen: (this.state.lightboxOpen - 1)})
          }
        }       
      });

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      }
  }

  render() {
    return (
      <div>
        <h1>Paintings</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-end">
          {this.state.paintings.data.map((painting, index) => (
            <Painting 
              image={'https://fnsasmiiibssodluabbh.supabase.co/storage/v1/object/public/paintings/' + painting.image}
              title={painting.title}
              medium={painting.medium}
              size={painting.size}
              status={painting.status} 
              categories={painting.categories}
              key={painting.id}
              index={index}
              lightboxOpen={this.state.lightboxOpen}
              onLightboxOpenChange={this.handleLightboxOpenChange}
              numberOfPaintings = {this.state.paintings.data.length}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Paintings; // Don’t forget to use export default!