import React from 'react';

class Wheel extends React.Component{
    constructor(){
      super();
    }
  
    render(){
      return(
        <div id="wheel-body">
            <div id="outer-wheel">
                <div id="inner-wheel">
                    <div id="inner-wheel-top"><img src="https://image.flaticon.com/icons/svg/965/965842.svg" height="20px" width="20px"></img></div>
                    <div id="inner-wheel-right"><img src="https://image.flaticon.com/icons/svg/2618/2618075.svg" height="20px" width="20px" ></img></div>
                    <div id="inner-wheel-bottom"><img src="https://image.flaticon.com/icons/svg/1792/1792886.svg" height="20px" width="20px"></img></div>
                    <div id="inner-wheel-left"><img src="https://image.flaticon.com/icons/svg/2618/2618084.svg" height="20px" width="20px"></img></div>
                </div>
            </div>
        </div>
      )
      
    }
  
  }
  
  export default Wheel;
  