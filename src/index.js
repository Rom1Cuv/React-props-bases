import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  console.log(props);
  return (
    <div className="friend-item">
      <h3>{props.name}</h3>
      <h4>{props.email}</h4>
      <h4>{props.phone}</h4>
      <button>Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact name="John" email="abc@email.com" phone="01 02 03 04 05" />
      <Contact name="David" email="abc2@email.com" phone="01 02 03 04 06" />
      <Contact name="Jason" email="abc3@email.com" phone="01 02 03 04 07" />
      <Contact name="Jen" email="abc4@email.com" phone="01 02 03 04 08" />
      <Contact name="Alex" email="abc5@email.com" phone="01 02 03 04 09" />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
