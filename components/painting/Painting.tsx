import React, { Component } from 'react';
import Image from 'next/image'

class Painting extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(lightboxStatus) {
    this.props.onLightboxOpenChange(lightboxStatus);  
  }


  render() {

    const lightboxOpen = this.props.lightboxOpen

    return (
      <div>

        <figure key={this.props.id} className={this.props.categories} >
          <img className="shadow-lg cursor-pointer" src={this.props.image} onClick={() => this.handleClick(this.props.index)}/>  
          <figcaption>
            <p className="small-text pt-6">
              {this.props.title} <br />
              {this.props.medium} <br />
              {this.props.size} <br />
              {this.props.status} <br />
              {this.props.categories}
            </p>
          </figcaption>
        </figure>

        { this.props.lightboxOpen === this.props.index ? 
          <div className="fixed inset-0 flex items-center justify-center bg-black/50" onClick={() => this.handleClick(false)}>
            <figure key={this.props.id} className="h-45 w-4/5 p-24 bg-white relative" onClick={e => e.stopPropagation()}>
              <span className="absolute top-2 right-2 cursor-pointer" onClick={() => this.handleClick(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>              
              </span>           
              <img className="shadow-lg" src={this.props.image} />  
              <figcaption>
                <p className="small-text pt-6">
                  {this.props.title} <br />
                  {this.props.medium} <br />
                  {this.props.size} <br />
                  {this.props.status} <br />
                  {this.props.categories}
                </p>
              </figcaption>
            </figure>

          </div>
        : null }

      </div>

    )
  }
}

export default Painting; // Don’t forget to use export default!