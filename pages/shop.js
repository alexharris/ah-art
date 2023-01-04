import Card from '../components/card/card'

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <p className="big-text mb-2">Thanks for your interest in purchasing my work. </p>
      <p>All original <a href="/paintings">paintings</a> marked as "available" are for sale, please contact me for prices. </p>
      <p>I also have printed goods available at a variety of locations:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
      <Card 
        image="shop-gardener.jpg" 
        title="Birds of Lake Merritt Original Paintings" 
        text="Original artwork from Birds of Lake Merritt is currently available at The Gardener in Berkeley."
        link=""
      />      
      <Card 
        image="shop-postcards.jpg" 
        title="Hawks of California Postcards" 
        text="Hawks of California postcards are available for purchase at The Gardener in Berkeley and Atomic Garden and Understory in Oakland."
        link=""
      />   
      <Card 
        image="shop-hawk-prints.jpg" 
        title="Hawk Prints" 
        text="Hawks prints currently available at Atomic Garden in Oakland."
        link=""
      />         

      </div>

   
    </div>


  )
}

export default Shop
