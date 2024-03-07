import React, {useEffect} from 'react';

class Scaup extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      test: '“Wild Duck Festival”',
      testSize: 100
    };
  }
  handleInputChange = (event) => {
    this.setState({ test: event.target.value });
    fathom.trackEvent(this.state.test);
  }  
  handleFocus = () => {
    // Replace 'GOAL_ID' with your actual goal ID
    fathom.trackEvent('typetest');
  } 
  handleSliderChange = (event) => {
    this.setState({ testSize: event.target.value });
  }  
  render() {
    return (
      <div className="">
      
      <div className="max-x-full">
        <h1 className="text-9xl flex flex-wrap justify-between scaup">
          Scaup.
          <img className="" src="/scaup-duck.png" alt="Scaup Logo" />
        </h1>
        <p className="text-4xl scaup">
        A somewhat inconsistent font that kind of looks like someone tried their best to draw a different font from memory but couldn’t really remember what all of the letters look like so they just made them up.          
        </p>
        <div className=" border-t-4 border-black border-dashed my-8 py-8">
          <h2 className="text-2xl py-2">Uppercase</h2>
          <p className="text-8xl break-words scaup">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>  
        </div>
        <div className=" border-t-4 border-black border-dashed my-8 py-8">
          <h2 className="text-2xl py-2">Lowercase</h2>
          <p className="text-8xl break-words lowercase scaup">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>  
        </div>  
        <div className=" border-t-4 border-black border-dashed my-8 py-8">
          <h2 className="text-2xl py-2">Numerals</h2>
          <p className="text-8xl break-words lowercase scaup">0123456789</p>  
        </div>    
        <div className=" border-t-4 border-black border-dashed my-8 py-8">
          <h2 className="text-2xl py-2">Punctuation</h2>
          <p className="text-8xl break-words lowercase scaup">$#.,:;…!¡?¿()“”"</p>  
        </div> 
        <div className=" border-t-4 border-black border-dashed my-8 py-8">
        <h2 className="text-2xl py-2">Type Tester</h2>
          <div class="flex flex-wrap md:space-x-4 items-center">
            <input 
              type="text" 
              className="border rounded-lg p-2 text-2xl" 
              value={this.state.test} 
              onChange={this.handleInputChange} 
              onFocus={this.handleFocus}
            />
            <div class="flex space-x-4 items-center">
              <label for="testSize">Size:</label>
              <input 
                type="range" 
                min="12" 
                max="200" 
                name="testSize"
                value={this.state.testSize} 
                onChange={this.handleSliderChange} 
                className="slider" 
              />            
              <span>{this.state.testSize}</span>
            </div>
          </div>
          
          <div className="scaup flex flex-col my-8 p-4 bg-gray-100 break-words h-96 overflow-scroll" style={{fontSize: `${this.state.testSize}px`, lineHeight: `${this.state.testSize}px`}}>
            {this.state.test}
          </div>
          <div className=" border-t-4 border-black border-dashed my-8 py-8">
            <h2 className="text-2xl py-2">Story</h2>
            <p className="text-3xl scaup">I enrolled in a class called <a href="https://www.typeelectives.com/courses/crash-course-in-revival-type-design">Crash Course in Revival Type Design </a> with the hopes of learning how to make a font based on the logo for the Honey Bucket brand of portable toilets. However, it was deemed to difficult of task for someone who had never made a font before, so I decided instead to make one based on this newspaper clipping I found while doing research for <a href="">Birds of Lake Merritt</a></p>
            <img className="my-4 h-64 mx-auto" src="/scaup-newspaper.png" alt="Scaup Newspaper Clipping" />
            
          </div>    
          <div className=" border-t-4 border-black border-dashed my-8 py-8">
            <h2 className="text-2xl py-2">Download</h2>

            <p className="text-3xl scaup">You can download the font here, but it is only an early version, some characters are missing, there are no italics or anything like that..."your mileage may vary".</p>
            <a href="/fonts/Scaup-Regular.ttf" download className="text-3xl scaup my-4 inline-block">Download Scaup.</a>  
            
            <p className="text-3xl my-4 scaup">Let me know if you use it for anything!</p>
          </div>                 
        </div>                          

        
      </div>
   
    </div>
    )
  }
}

export default Scaup;
