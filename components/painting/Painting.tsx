import React, { Component } from 'react';
import Image from 'next/image'






class Painting extends Component {



  componentDidMount() { 
    var imgEl = React.createRef();
    console.log(imgEl)

   }

  render() {
    return (
        <figure key={this.props.id}>
          <img src={this.props.image} ref={this.props.id} />  
          <figcaption>
            <p>
              {this.props.title} <br />
              {this.props.medium} <br />
              {this.props.size} <br />
              {this.props.status}
            </p>
          </figcaption>
        </figure>
    )
  }
}

export default Painting; // Don’t forget to use export default!