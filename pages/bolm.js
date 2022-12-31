function Bolm() {
  return (
    <div>
      
      <div className="flex flex-col-reverse md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h1>Birds of Lake Merritt</h1>
          <p className="big-text">
            A richly illustrated birding guide to the nation's first official wildlife refuge
          </p>
          <p>
            This book introduces us to the 15 of the ducks, herons, pelicans, geese and other species of bird that can be found on the waters of Lake Merritt in Oakland, California. The introduction tells the history of the "lake" (spoiler alert it isn't actually a lake) and how it came to be home to the first officially designated wildlife refuge in the nation.            
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="w-96 mx-auto" src="/greater-scaup.png" />
        </div>
      </div>
      <div className="bg-gray-100 p-8 my-12 flex flex-col sm:flex-row gap-12">
        <div className="w-full sm:w-1/2">
          <img className="mx-auto lg:w-2/3" src="/bolm-cover.jpg" />
        </div>
        <div className="w-full sm:w-1/2">
          <h2>About Birds of Lake Merritt</h2>      
          <ul className="list-disc px-4 pb-8">
            <li>Hardcover</li>
            <li>5.5 x 8.5 inches</li>
            <li>70 pages</li>
            <li>Published by Heyday Books</li>
            <li>Over 15 full color paintings</li>
          </ul>
          <h2>Order online</h2>
          <ul className="list-disc px-4 pb-8">
            <li><a href="https://shop.aer.io/heyday/p/Birds_of_Lake_Merritt/9781597145480-4706?collection=/0">Heyday</a></li>
            <li><a href="https://bookshop.org/books/birds-of-lake-merritt/9781597145480">Bookshop.org</a></li>
            <li><a href="https://www.barnesandnoble.com/w/birds-of-lake-merritt-alex-harris/1138477832?ean=9781597145480">Barnes &amp; Noble</a></li>
            <li><a href="https://www.booksamillion.com/p/Birds-Lake-Merritt/Alex-Harris/9781597145480?id=8260566434706">BAM!</a></li>                
            <li><a href="https://books.apple.com/us/book/birds-of-lake-merritt/id1549034822">Apple Books (digital)</a></li>
            <li><a href="https://www.amazon.com/Birds-Lake-Merritt-Alex-Harris/dp/1597145483">Amazon</a></li>
          </ul>
          <p>Or, at your favorite <a href="https://www.indiebound.org/book/9781597145480">local bookstore</a>.</p>
        </div>          
      </div>
      <h2 className="py-12">Praise for Birds of Lake Merritt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
        <blockquote>
          “I’ve always known Lake Merritt as a great place to look for birds, not knowing that it was originally designated as a bird sanctuary over 150 years ago—the first wildlife refuge in the country! This charming book is the perfect introduction to the lake and its birds, and it’s sure to give you a new appreciation of both.” 
          <footer className="py-4"><a href="https://www.sibleyguides.com/">DAVID ALLEN SIBLEY</a>, author of <i>What It’s Like to Be a Bird</i></footer>
        </blockquote>
        <blockquote>
          “With brush and words, Alex Harris brings out the local color of beloved birds in the heart of Oakland. Through each bird’s backstory, we see that Lake Merritt is a meeting spot for local avian residents and international travelers alike. Alex’s bird portraits capture the life, whimsy, and identification details of fifteen common species, making this a great introduction to birds for adults and youth.”
          <footer className="py-4"><a href="https://johnmuirlaws.com/">JOHN MUIR LAWS</a>, author of <i>The Laws Guide to Drawing Birds</i></footer>        
        </blockquote>
        <blockquote>
          "Just like the birds that flock to Lake Merritt every winter, I find myself returning to this book again and again. Every time I absorb these pages, I’m instantly transported to my favorite place in Oakland." 
          <footer className="py-4"><a href="https://eastbayyesterday.com/">LIAM O'DONAGHUE</a>, host of East Bay Yesterday</footer>        
        </blockquote>
        <blockquote>
          “Beautifully illustrated and written, this is a must-have for anyone who wants to better understand and appreciate our neighbors.” 
          <footer className="py-4"><a href="https://www.jennyodell.com/">JENNY ODELL</a>, author of <i>How to Do Nothing</i></footer>        </blockquote>                
      </div>
      <h2 className="py-12">Media and stuff</h2>
      <div className="flex flex-col-reverse md:flex-row gap-12">
        <div className="w-full md:w-1/3">
          
          <ul className="list-disc px-4 pb-8">
            <li><a href="https://www.kalw.org/newarrivals/2021-11-16/alex-harris-combines-illustrations-and-text-in-birds-of-lake-merritt">KALW New Arrivals: A pocket-sized book tour</a></li>
            <li><a href="https://www.birdnote.org/listen/shows/first-north-american-wildlife-refuge">BirdNote: The First North American Wildlife Refuge</a></li>
            <li><a href="https://www.youtube.com/watch?v=Be6xxTZ6_Rg">A talk I gave at the Oakland Public Library</a></li>
            <li><a href="https://www.youtube.com/watch?v=zf4lmp543Ks&list=PLBdcrXdht6nki2okzdKwLswBGilmjqbhL&index=6">Birds in Your Backyard panel discussion at the 2022 Bay Area Book Festival</a></li>
          </ul>
        </div>
        <div className="w-full md:w-2/3">
          <img  src="/opl-presentation.jpg" />
        </div>
      </div>      
    </div>


  )
}

export default Bolm
