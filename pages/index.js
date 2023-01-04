import ImageWithText from '../components/imageWithText/ImageWithText'

function HomePage() {
  return (
    <div>
      <p className="big-text mb-12">I am a painter and writer in Oakland, California.</p>
      <ImageWithText 
        image="homepage-paintings.jpg" 
        title="Paintings" 
        text="Have a look at some paintings I have painted."
        link="paintings"
      />
      <ImageWithText 
        image="homepage-bolm.jpg" 
        title="Birds of Lake Merritt" 
        text="Birds of Lake Merritt is a book I wrote and illustrated about the history and birds of Lake Merritt in Oakland, CA."
        link="bolm"
      />
      <ImageWithText 
        image="homepage-prints.jpg" 
        title="Shop" 
        text="Find out where to purchase my work or prints."
        link="shop"
      />         
    </div>
  )
}

export default HomePage
