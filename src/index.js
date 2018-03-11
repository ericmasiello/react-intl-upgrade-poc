import React from 'react';
import { render } from 'react-dom';
import Greeting from './Greeting';
import { withIntl } from './IntlMixin';

const i18n = {
  locale: 'en-US',
  messages: {
    'greeting': 'Hello from 2.1!',
  },
};

function App() {
  return (
    <Greeting name="Eric" />
  );
}

const IntlApp = withIntl(App);

render(<IntlApp {...i18n} />, document.getElementById('root'));