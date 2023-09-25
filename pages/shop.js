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

        <div class="p-6 md:p-12 mb-16 flex flex-col md:flex-row gap-8 bg-gray-100">
          <div class="w-full md:w-1/2">
            <img src="bolm-print.jpg" />
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-4xl">Common Birds of Lake Merritt Fine Art Print</h2>
            <p>A fine art print identifying 19 of the most common birds at Lake Merritt, beautifully printed on Signature Worthy® Cold Press paper and signed by the artist.</p>
            <p>Currently available in two sizes:</p>
            <p class="text-2xl">12 x 16 - $50</p>
            <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1Nu4ndEB2SNh31gwdBLrBZRt"
  publishable-key="pk_live_7ijeS9mbS8G6IBtOCHOmPK9p"
>
</stripe-buy-button> 
            <p class="text-2xl mt-8">16 x 20 - $75</p>
            <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1Nu4lhEB2SNh31gwYhqndds0"
  publishable-key="pk_live_7ijeS9mbS8G6IBtOCHOmPK9p"
>
</stripe-buy-button>
          </div>
        </div>
        <p>Some prints and paitings are also available at stores in the East Bay:</p>
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
