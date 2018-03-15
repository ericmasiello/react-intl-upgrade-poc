import React from 'react';
import createReactClass from 'create-react-class';
import { IntlMixin } from './IntlAdapater';

const Greeting = createReactClass({
  mixins: [IntlMixin],
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.loc('greeting')}
      </div>
    );
  }
});

export default Greeting;
