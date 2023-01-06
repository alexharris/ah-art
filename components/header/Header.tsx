import React, { Component } from 'react';

// <header className={["flex", "flex-row", "justify-between", styles.test].join(' ')}>

class Header extends Component {
  render() {
    return(
      <header className="flex flex-row justify-between items-start md:items-center py-8 mb-16">
        <a href="/" className="font-sans text-lg">Alex Harris</a>
        <nav className="flex flex-col md:flex-row">
          <a className="md:mr-4" href="/paintings">Paintings</a>
          <a className="md:mr-4" href="/bolm">Birds of Lake Merritt</a>
          <a className="md:mr-4" href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      
    )
  }
}

export default Header; // Don’t forget to use export default!