import React from 'react';
import createReactClass from 'create-react-class';
import IntlMixin from './IntlMixin';

const OtherGreeting = createReactClass({
  mixins: [IntlMixin],
  render() {
    return (
      <div>
        {this.loc('greeting.other')}
      </div>
    );
  }
});

export default OtherGreeting;
