import React from 'react';
import { render } from 'react-dom';
import Greeting from './Greeting';
import OtherGreeting from './OtherGreeting';
import ConnectedGreeting from './ConnectedGreeting';
import FormattedGreeting from './FormattedGreeting';
import { withIntl } from './IntlMixin';

const i18n = {
  locale: 'en-US',
  messages: {
    'greeting': 'Hello from 2.1!',
    'greeting.other': 'Hello from the other greeting',
    'greeting.correct': 'I\'m doing it correctly :)',
  },
};

function App(props) {
  return (
    <div>
      <Greeting name="Demo" />
      <OtherGreeting />
      <hr />
      <ConnectedGreeting />
      <hr />
      <FormattedGreeting />
    </div>
  );
}

const IntlApp = withIntl(App);

render(<IntlApp {...i18n} />, document.getElementById('root'));