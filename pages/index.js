import React, {useEffect} from 'react';
import { createClient } from '@supabase/supabase-js'
import ImageWithText from '../components/imageWithText/ImageWithText'
import Markdown from 'react-markdown'


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
      <div className="max-w-3xl copy">
       <div className="big-text mb-8">I am an artist in Oakland, CA.<br /> Here is some of my work:</div>
      <Markdown>{`
## Birds of Lake Merritt
A book I wrote and illustrated about the history and birds of Lake Merritt in Oakland, CA. Published by Heyday Books in 2021.  
[Learn more at birdsoflakemerritt.com ↝](https://birdsoflakemerritt.com/)

## Illustration
- [Good Eggs zine, spring 2024 ↝](illustration/good-eggs-spring-2023)  
- [Bay Nature Mushroom articles ↝](illustration/bay-nature-mushrooms) (I wrote the articles as well)

## Paintings
Original paintings from over the years, mostly gouache and watercolor  
[See some paintings ↝](/paintings)

## Dither it!
A web app for reducing the number of colors in images using a process known as dithering, for purposes of style and filesize  
[Visit ditherit.com ↝](https://ditherit.com)

## Dither it! for Figma
A plugin for dithering images in the Figma app.  
[Check it ↝](https://www.figma.com/community/plugin/1141558599392169513/dither-it)

---

I also build and maintain websites for a variety of clients, which you can check out here:  
[AHWD ↝](https://alexharris.online)

      `}</Markdown>  

        {/* <Markdown>{'
      
        '}</Markdown> */}

        {/* <ImageWithText 
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
        />          */}
      </div>
    )
  }
}

export default HomePage;
