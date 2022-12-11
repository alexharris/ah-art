import React, { Component } from 'react';


class Lightbox extends Component {

  render() {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        {this.props.title}
      </div>
    )
  }
}

export default Lightbox; // Don’t forget to use export default!