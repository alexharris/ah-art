import ImageWithText from '../components/imageWithText/ImageWithText'

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <p className="mb-12">Thanks for your interest in purchasing my work. Here are some places that you can do so.</p>
      
      <ImageWithText 
        image="shop-gardener.jpg" 
        title="Birds of Lake Merritt Original Paintings" 
        text="Original artwork from Birds of Lake Merritt is currently available at The Gardener in Berkeley."
        link=""
      />      
      <ImageWithText 
        image="shop-postcards.jpg" 
        title="Hawks of California Postcards" 
        text="Hawks of California postcards are available for purchase at The Gardener in Berkeley and Atomic Garden and Understory in Oakland."
        link=""
      />   
      <ImageWithText 
        image="shop-hawk-prints.jpg" 
        title="Hawk Prints" 
        text="Hawks prints currently available at Atomic Garden in Oakland."
        link=""
      />         
   
    </div>


  )
}

export default Shop
