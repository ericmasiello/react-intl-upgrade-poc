import React from 'react';
import createReactClass from 'create-react-class';
// import {IntlMixin} from 'react-intl';
import IntlMixin from './IntlMixin';

const Greeting = createReactClass({
  mixins: [IntlMixin],
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.loc('test.static')}
      </div>
    );
  }
});

export default Greeting;
