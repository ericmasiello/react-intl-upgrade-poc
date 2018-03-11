import React from 'react';
import createReactClass from 'create-react-class';
import MyMixin from './IntlMixin';

const OtherGreeting = createReactClass({
  mixins: [MyMixin],
  render() {
    return (
      <div>
        {this.loc('greeting.other')}
      </div>
    );
  }
});

export default OtherGreeting;
