import React, { Component } from 'react';

// <header className={["flex", "flex-row", "justify-between", styles.test].join(' ')}>

class Header extends Component {
  render() {
    return(
      <header className="flex flex-row justify-between items-center py-8 mb-16">
        <a href="/" className="font-serif border-0 text-xl">ALEX HARRIS</a>
        <nav>
          <a className="mr-4" href="/paintings">Paintings</a>
          <a className="mr-4" href="/bolm">Birds of Lake Merritt</a>
          <a className="mr-4" href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      
    )
  }
}

export default Header; // Don’t forget to use export default!