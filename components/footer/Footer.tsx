import React, { Component, useState } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(

      <footer className="max-w-5xl mx-auto px-8 bg-gray-100">
        <div  className="flex flex-row justify-between gap-8 py-16 mt-8">
          <div className="w-1/2">
            <h3>Newsletter</h3>
            <p>Sign up for my newsletter to receive very occasional emails (like almost never), about new projects, prints for sale, etc</p>
            <span className="p-2 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"><a href="https://tinyletter.com/alexharris" target="_blank" className="border-0">sign up</a></span>
          </div>
          <div className="w-1/2">
            <h3>Get in touch</h3>
            <ul>
              <li>@waggledance</li>
              <li>hello @ alexharris dot online</li>
            </ul>
          </div>
        </div>    
      </footer>
      
    )
  }
}

export default Footer; // Don’t forget to use export default!