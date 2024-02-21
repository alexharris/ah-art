import React, {useEffect} from 'react';
import Markdown from 'react-markdown'

class GoodEggsSpring extends React.Component {
  render () {
  return (
    <div className="max-w-3xl copy">
   <Markdown>{`
![agaricus lilaceps](/illustration/good-eggs-spring-24/good-eggs-S24-products.jpg)

   `}</Markdown>  
   </div>


  )
  }
}

export default GoodEggsSpring
