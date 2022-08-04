import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Car(props) {
  return <h2>Hi, I am a {props.color} Car!</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
