import React, { Component, useState } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(

      <footer className="bg-[#f2f1d7] mt-24">
        <div class="max-w-6xl gap-8 py-16 mt-8 px-8 mx-auto">
          <img class="w-64 mx-auto pb-6" src="/say-hello.png" />
          <div  className="flex flex-col md:flex-row justify-between pt-8">

            <div className="w-full md:w-1/2">
              
              <ul>
                <li>On instagram at @waggledance</li>
                <li>On email at hello @ alexharris dot online</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <p>Or send me a note here:</p>
              <form className="flex flex-col gap-4 items-start w-full pt-4" name="contact" action="/form-success" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <label className="w-full"><span className="pb-4">Your Email</span><input className="w-full border border-black h-12 p-2" type="email" name="email" required/></label>
                <label className="w-full"><span className="pb-4">Message</span><textarea className="w-full border border-black h-24 p-2" name="message" required></textarea></label>
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer" type="submit">Submit</button>          
              </form>   
            </div>          
          </div>  
        </div>  
      </footer>
      
    )
  }
}

export default Footer; // Don’t forget to use export default!