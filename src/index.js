import React from 'react';
import { render } from 'react-dom';
import Greeting from './Greeting';

const intlData = {
  locales : ['en-US'],
  messages: {
    test: {
      static: 'Hello world',
      dynamic: 'Hello, {name}',
    },
  },
};

function App(props) {
  return (
    <Greeting name="Eric" {...intlData} />
  );
}

render(<App />, document.getElementById('root'));