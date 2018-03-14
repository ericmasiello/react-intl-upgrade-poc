import React from 'react';
import { render } from 'react-dom';
import {IntlProvider} from 'react-intl';
import FormattedGreeting from './FormattedGreeting';

const i18n = {
  locale: 'en-US',
  messages: {
    'greeting.correct': 'I am translated :)',
  },
};

function App() {
  return (
    <IntlProvider locale={i18n.locale} messages={i18n.messages}>
      <FormattedGreeting />
    </IntlProvider>
  );
}

render(<App />, document.getElementById('root'));