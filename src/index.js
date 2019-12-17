import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


const onHandleClick=()=>{
    console.log("Yes!!!!!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={onHandleClick}  />
  </div>,
  document.getElementById('root')
);