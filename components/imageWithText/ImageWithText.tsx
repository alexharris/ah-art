import React, { Component } from 'react';
import Image from 'next/image'






class ImageWithText extends Component {


  render() {
    return (
      <div className="pb-12">
        <figure className="flex">
          <img className="w-2/3" src={this.props.image} />  
          <figcaption className="w-1/3 pl-12">
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
            <a href={this.props.link}>More</a>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default ImageWithText; // Don’t forget to use export default!