import React from 'react';
import { render } from 'react-dom';

function App(props) {
  return (<h1>Hello {props.name}</h1>);
}

render(<App name="Eric" />, document.getElementById('root'));