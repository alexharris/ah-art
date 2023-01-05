import React, {useEffect} from 'react';
import { createClient } from '@supabase/supabase-js'
import ImageWithText from '../components/imageWithText/ImageWithText'


const supabaseUrl = 'https://fnsasmiiibssodluabbh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const content = await supabase.from('content').select('location, content')

  return {
    props: {
      content
    },
  }
}


class HomePage extends React.Component {

  constructor(props) {
    super(props);  
    this.state = {
      content: this.props.content,
      modifiedContent: {}
    };
  }

  componentDidMount() {
    // take the content from supabase and turn it into a key/value object thing
    var newContent = {}
    this.props.content.data.map((value, index) => {  
      newContent[value.location] = value.content
    });    
    this.setState({modifiedContent: newContent})
  }

  render () {

    return (
      <div>
        
        <p className="big-text mb-12">I am a painter and writer in Oakland, California.</p>
        <ImageWithText 
          image="homepage-paintings.jpg" 
          title="Paintings" 
          text={this.state.modifiedContent.homepage_paintings}
          link="paintings"
        />
        <ImageWithText 
          image="homepage-bolm.jpg" 
          title="Birds of Lake Merritt" 
          text={this.state.modifiedContent.homepage_bolm}
          link="bolm"
        />
        <ImageWithText 
          image="homepage-prints.jpg" 
          title="Shop" 
          text={this.state.modifiedContent.homepage_shop}
          link="shop"
        />         
      </div>
    )
  }
}

export default HomePage;
