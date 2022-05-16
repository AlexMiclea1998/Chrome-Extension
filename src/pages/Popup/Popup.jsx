import React from 'react';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = (props) => {
  return (
    <div className="App">
      <header className="App-header">
          <Greetings url={props.url}></Greetings>
      </header>
    </div>
  );


};

export default Popup;


