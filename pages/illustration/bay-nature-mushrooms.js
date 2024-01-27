import React, {useEffect} from 'react';
import Markdown from 'react-markdown'

class GoodEggsSpring extends React.Component {
  render () {
  return (
    <div className="max-w-3xl copy">
   <Markdown>{`
# Bay Nature Mushroom Articles
I wrote and illustrated a few articles about mushrooms that appeared on [baynature.org](https://baynature.org)

## Meet the Latticed Stinkhorn, A Fragrant Fungus Beloved of Flies
> 
> "In high school I road-tripped to Canada with some friends, and we had some slices of ham in a cooler in the trunk that we forgot about until near the end, and that is kind of what C. ruber smells like to me."

[Read the article](https://baynature.org/2023/01/25/meet-the-latticed-stinkhorn-a-fragrant-fungus-beloved-of-flies/)
![clathrus ruber growth](/illustration/mushrooms/clathrus-ruber-growth.jpg)
![clathrus ruber growth](/illustration/mushrooms/clathrus-ruber-cage.jpg)



## The Giant Cypress Agaricus: A Chonk of a Mushroom with a Strong Sense of Place
> 
> "Now, though, these cypresses can be found up and down the coast, as their beachy, windswept look has seemingly proved popular with landscape designers and farmers (barbers are another story, none yet willing to give me “the Monterey cypress” or “sideways Kramer,” as it is sometimes called). "

[Read the article](https://baynature.org/2023/03/23/the-giant-cypress-agaricus-a-chonk-of-a-mushroom-with-a-strong-sense-of-place/)
![agaricus lilaceps](/illustration/mushrooms/agaricus-lilaceps.jpg)

   `}</Markdown>  
   </div>


  )
  }
}

export default GoodEggsSpring
