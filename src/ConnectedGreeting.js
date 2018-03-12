import React from 'react';
import { ConnectedIntlMessage } from './IntlAdapater';

function ConnectedGreeting() {
  return (
    <div>
      <ConnectedIntlMessage render={(intl) => (
        <div>{intl.formatMessage({ id: 'greeting.correct' })}</div>
      )} />
    </div>
  );
}

export default ConnectedGreeting;
