import React from 'react';
import createReactClass from 'create-react-class';
import MyMixin from './IntlMixin';

const Greeting = createReactClass({
  mixins: [MyMixin],
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
