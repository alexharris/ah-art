import React, { Component } from 'react';
import Image from 'next/image'

class Painting extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      columnClass: 'col-span-1'};
  }

  handleClick(lightboxStatus) {
    console.log(lightboxStatus)
    this.props.onLightboxOpenChange(lightboxStatus);  
  }

  imageOnLoad() {
    let ratio = this.imgEl.current.naturalHeight / this.imgEl.current.naturalWidth
    if(ratio > .7) {
      this.setState({columnClass: 'col-span-1'});
    } else {
      this.setState({columnClass: 'xl:col-span-2'});
    }
  }

  imgEl = React.createRef();

  render() {
 

    const lightboxOpen = this.props.lightboxOpen

    return (
      <div className={this.state.columnClass}>

        <figure key={this.props.id} >
          <img 
            className="shadow-lg cursor-pointer" 
            src={this.props.image} 
            onClick={() => this.handleClick(this.props.index)}
            ref={this.imgEl}  
            onLoad={() => this.imageOnLoad()}            
          />  
          <figcaption>
            <ul className="small-text pt-6">
              <li>{this.props.title}</li>
              <li>{this.props.medium} </li>
              <li>{this.props.size} </li>
              <li>{this.props.status} </li>
            </ul>
          </figcaption>
        </figure>

        { this.props.lightboxOpen === this.props.index ? 
          <div className="fixed inset-0 h-full w-full bg-black/50 flex items-center justify-center" onClick={() => this.handleClick(false)}>
            <div className=" h-[90%] w-[90%] relative bg-white flex items-center justify-center h-full" onClick={e => e.stopPropagation()}>
              <span className="absolute top-2 right-2 cursor-pointer" onClick={() => this.handleClick(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>              
              </span>                
              <div className="text-center absolute left-2 top-[50%]" onClick={() => this.handleClick((this.props.index - 1))}>
                {this.props.index > 0 ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>                
                : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>                
              }  
              </div>    
       
              <div className="text-center absolute right-2 top-[50%]" onClick={() => this.handleClick((this.props.index + 1))}>
                {this.props.index < this.props.numberOfPaintings - 1 ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                : null } 
              </div> 
           
       
              <figure className="h-auto max-h-full ">
         
                <img className="shadow-lg carousel-image" src={this.props.image} key={this.props.id}  onClick={e => e.stopPropagation()}/>  

                <figcaption className="small-text list-none pt-6">
                  <ul>
                    <li>{this.props.title}</li>
                    <li>{this.props.medium} </li>
                    <li>{this.props.size} </li>
                    <li>{this.props.status} </li>
                    <li>hello</li>
                    <li>{this.props.categories}</li>
                  </ul>

                </figcaption>
              </figure>

      

                           
            </div>
          </div>
        : null }

      </div>

    )
  }
}

export default Painting; // Don’t forget to use export default!