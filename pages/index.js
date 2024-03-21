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
      <div>
        <div class="flex flex-col w-full md:flex-row items-center justify-between">
          <div className="big-text w-full md:w-1/2">I am an artist in Oakland, CA. I like to paint, draw, and write computer programs.</div>
          <img src="/me.png" class="w-96 mt-0" />
        </div>
        <div className="max-w-3xl copy">
      <Markdown>{`
## Birds of Lake Merritt
I wrote and illustrated a book about the history and birds of Lake Merritt in Oakland.  
[Learn more at birdsoflakemerritt.com ↝](https://birdsoflakemerritt.com/)

## Paintings
Original paintings from over the years, mostly gouache and watercolor.  
[See some paintings ↝](/paintings)

## Good Eggs Zine - Spring 2024
Illustrations for a grocery deliver company's promotional zine.  
[Take a look ↝](/good-eggs-spring-2024)

## Dither it!
A web app (and figma plugin) for reducing the number of colors in images using a process known as dithering, for purposes of style and filesize.

[Ditherit.com ↝](https://ditherit.com)  
[Dither it! Figma Plugin ↝](https://www.figma.com/community/plugin/1141558599392169513/dither-it)

`}</Markdown>  
 <h2 className="scaup text-2xl">Scaup</h2>
 <Markdown>{`
Scaup is a font I made. It is a work in progress.  
[Check it ↝](/scaup)

## Other Stuff
* I gave [a talk](https://www.youtube.com/watch?v=Be6xxTZ6_Rg) at the Oakland Public Library about Lake Merritt
* Some articles and illustrations about mushrooms for Bay Nature:
  - [Giant Cypress Agaricus](https://baynature.org/2023/03/23/the-giant-cypress-agaricus-a-chonk-of-a-mushroom-with-a-strong-sense-of-place/)
  - [Latticed Stinkhorn](https://baynature.org/2023/01/25/meet-the-latticed-stinkhorn-a-fragrant-fungus-beloved-of-flies/)
---

I also build and maintain websites for a variety of clients, which you can check out here:  
[AHWD ↝](https://alexharris.online)

      `}</Markdown>  
      </div>
      </div>
    )
  }
}

export default HomePage;
