import React, {useEffect} from 'react';
import { createClient } from '@supabase/supabase-js'
import Painting from '../components/painting/Painting'

const supabaseUrl = 'https://fnsasmiiibssodluabbh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const paintings = await supabase.from('paintings').select().eq('disabled', false).order('title', { ascending: true })
  const categories = await supabase.from('categories').select().eq('disabled', false).order('title', { ascending: true })

  return {
    props: {
      paintings,
      categories      
    },
  }
}

class Paintings extends React.Component {
  constructor(props) {
    super(props);  
    this.handleLightboxOpenChange = this.handleLightboxOpenChange.bind(this)  
    this.state = {
      lightboxOpen: 'closed',
      paintings: this.props.paintings.data,
      filteredPaintings: this.props.paintings.data,
      activeFilter: 'all'
    };
  }

  handleLightboxOpenChange(id) {
    this.setState({lightboxOpen: id})
  }
  handleFilterPaintings(category) {
    
    var filteredPaintings = []
    if(category == '5') {
      this.state.paintings.forEach(element => {
        if(element.status == 'Available'){
          filteredPaintings.push(element)
        }
      })
    } else {
      this.state.paintings.forEach(element => {
        if(element.categories !== null){
          if (element.categories.includes(category.toString())) {
            filteredPaintings.push(element)
          }
        }
      })      
    }

    this.setState({
      filteredPaintings: filteredPaintings
    })
    this.setState({
      activeFilter: category
    })    
  }
  resetFilters() {
    this.setState({
      filteredPaintings: this.props.paintings.data,
      activeFilter: 'food'
    })
  }
  componentDidMount() {
    console.log('did mount');
      document.addEventListener('keydown', (e) => {      
        if(e.keyCode == 39) { //right arrow
          console.log('right arrow')
          if(this.state.lightboxOpen < this.state.paintings.length) {
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
        <h1 class="pb-6">Paintings</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className={"border border-black py-2 px-3 bg-amber-50 hover:bg-amber-100 cursor-pointer rounded-full " + (this.state.activeFilter == 'food' ? 'bg-amber-100' : '')}
          onClick={() => this.resetFilters()}>
            all
          </span>
          {this.props.categories.data.map((category, index) => ( 
            <span className={"border border-black py-2 px-3 bg-amber-50 hover:bg-amber-100 cursor-pointer rounded-full " + (this.state.activeFilter == category.id ? 'bg-amber-100' : '')}
            onClick={() => this.handleFilterPaintings(category.id)}>
              {category.title} 
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-end">
          {this.state.filteredPaintings.map((painting, index) => (
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
              numberOfPaintings = {this.state.paintings.length}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Paintings; // Don’t forget to use export default!