import React from 'react';
import createReactClass from 'create-react-class';
// import {IntlMixin} from 'react-intl';
import MyMixin, { Message } from './IntlMixin';

const Greeting = createReactClass({
  mixins: [MyMixin],
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.loc('test.static')}
        <Message id="greeting" />
      </div>
    );
  }
});

export default Greeting;
