import React, {useEffect} from 'react';
import Card from '../components/card/card'
import { createClient } from '@supabase/supabase-js'
import ReactMarkdown from 'react-markdown'

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


class Shop extends React.Component {

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

  render() {
    return (
      <div>
        <h1>Shop</h1>
        <ReactMarkdown>{this.state.modifiedContent.shop_intro}</ReactMarkdown>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <Card 
            image="shop-gardener.jpg" 
            title="Birds of Lake Merritt Original Paintings" 
            text={this.state.modifiedContent.shop_paintings}
            link=""
          />      
          <Card 
            image="shop-postcards.jpg" 
            title="Hawks of California Postcards" 
            text={this.state.modifiedContent.shop_postcards}
            link=""
          />   
          <Card 
            image="shop-hawk-prints.jpg" 
            title="Hawk Prints" 
            text={this.state.modifiedContent.shop_hawkprints}
            link=""
          />         
        </div>
      </div>
    )
  }
}

export default Shop
