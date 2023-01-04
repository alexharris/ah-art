import React, { Component } from 'react';
import Image from 'next/image'






class Card extends Component {


  render() {
    return (
      <div className="">
        <figure className="flex items-start flex-col">
          {this.props.link !== ''
            ? <a className="image w-full" href={this.props.link}><img src={this.props.image} /></a>
            : <img className="image w-full" src={this.props.image} />
          }
          
          <figcaption className="w-full pt-6">
            {this.props.link !== ''
            ? <h2><a className="border-0" href={this.props.link}>{this.props.title}</a></h2>
            : <h2>{this.props.title}</h2>
            }
            
            <p>{this.props.text}</p>
            {this.props.link !== '' &&
              <a href={this.props.link}>More</a>              
            }
            
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default Card; // Don’t forget to use export default!