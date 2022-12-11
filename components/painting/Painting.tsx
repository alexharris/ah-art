import React, { Component } from 'react';
import Lightbox from '../lightbox/lightbox'
import Image from 'next/image'

class Painting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxOpen: false
    };
  }


  render() {



    return (
      <div>
        <figure key={this.props.id} className={this.props.categories}>
          <img className="shadow-lg" src={this.props.image} onClick={() => this.setState({lightboxOpen: !this.state.lightboxOpen})}/>  
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
        { this.state.lightboxOpen ? 
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <span className="absolute top-0 right-0 text-white" onClick={() => this.setState({lightboxOpen: !this.state.lightboxOpen})}>
              close
            </span>
            <figure key={this.props.id} className="w-2/3 p-32 bg-white">
              <img className="shadow-lg" src={this.props.image}  onClick={() => this.setState({lightboxOpen: !this.state.lightboxOpen})}/>  
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