import React from 'react';

class Wheel extends React.Component{
    constructor(){
      super();
    }
  
    render(){
      return(
        <div id="wheel">
            <div id="outer-wheel">
                <div id="inner-wheel">
                    <div id="inner-wheel-top"></div>
                    <div id="inner-wheel-right"></div>
                    <div id="inner-wheel-bottom"></div>
                    <div id="inner-wheel-left"></div>
                </div>
            </div>
        </div>
      )
      
    }
  
  }
  
  export default Wheel;
  