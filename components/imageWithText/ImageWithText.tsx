import React, { Component } from 'react';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'



class ImageWithText extends Component {
  render() {
    return (
      <div className="pb-12">
        <figure className="flex items-start flex-col md:flex-row-reverse">
          {this.props.link !== ''
            ? <a className="image w-full md:w-2/3" href={this.props.link}><img src={this.props.image} /></a>
            : <img className="image w-full md:w-2/3" src={this.props.image} />
          }
          
          <figcaption className="w-full md:w-1/3 md:pr-6 pt-8 md:pt-0">
            {this.props.link !== ''
            ? <h2 className="font-sans text-base font-semibold"><a className="border-0" href={this.props.link}>{this.props.title}</a></h2>
            : <h2 className="font-sans text-base font-semibold">{this.props.title}</h2>
            }
            
            <ReactMarkdown>{this.props.text}</ReactMarkdown>
            {this.props.link !== '' &&
              <a href={this.props.link}>More</a>              
            }
            
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default ImageWithText; // Don’t forget to use export default!