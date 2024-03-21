import React, { Component } from 'react';

// <header className={["flex", "flex-row", "justify-between", styles.test].join(' ')}>

class Header extends Component {
  render() {
    return(
      <header className="flex flex-row justify-between items-start md:items-center py-8 mb-8">
        <a href="/" className=" border-0 text-black">Alex Harris</a>
        {/* <nav className="flex flex-col md:flex-row">
          <a className="md:mr-4" href="/paintings">Paintings</a>
          <a className="md:mr-4" href="/bolm">Birds of Lake Merritt</a>
          <a className="md:mr-4" href="https://shop.alexharris.art">Shop</a>
          <a href="/contact">Contact</a>
        </nav> */}
      </header>
      
    )
  }
}

export default Header; // Don’t forget to use export default!