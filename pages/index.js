import ImageWithText from '../components/imageWithText/ImageWithText'

function HomePage() {
  return (
    <div>
      <p className="big-text mb-12">I am a painter in Oakland, California.</p>
      <ImageWithText 
        image="homepage-paintings.jpg" 
        title="Paintings" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ante et eros porta varius non pellentesque ex."
        link="paintings"
      />
      <ImageWithText 
        image="homepage-bolm.jpg" 
        title="Birds of Lake Merritt" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ante et eros porta varius non pellentesque ex."
        link="bolm"
      />
      <ImageWithText 
        image="homepage-prints.jpg" 
        title="Prints etc." 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ante et eros porta varius non pellentesque ex."
        link="prints"
      />         
    </div>
  )
}

export default HomePage
