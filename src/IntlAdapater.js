import React from 'react';
import PropTypes from 'prop-types';

/* Provider */
export class IntlMessageProvider extends React.Component {
  static contextName = '__intl-message-provider__';
  static propTypes = {
    children: PropTypes.node,
  };

  static childContextTypes = {
    [IntlMessageProvider.contextName]: PropTypes.shape({
      formatMessage: PropTypes.func,
    }).isRequired,
  }

  getChildContext() {
    return {
      [IntlMessageProvider.contextName]: this.props.intl,
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

/* Connected Component with render props */
export const ConnectedIntlMessage = (props, context) => (
  props.render(context[IntlMessageProvider.contextName])
);

ConnectedIntlMessage.propTypes = {
  render: PropTypes.func.isRequired,
};

ConnectedIntlMessage.contextTypes = {
  [IntlMessageProvider.contextName]: PropTypes.object.isRequired,
};

/* HOC for Intl using Connected component */
export const withIntlMessage = (Component) => {
  const WithIntlMessage = (props) => (
    <ConnectedIntlMessage render={(intl) => (
      <Component {...props} intl={intl} />
    )} />
  );

  WithIntlMessage.displayName = `WithIntlMessage(${Component.displayName || Component.name})`;
  return WithIntlMessage;
};

/* Expose data as mixin */
const makeMixin = ({ didWarnOfMixin = false } = {}) => ({
  contextTypes: {
    [IntlMessageProvider.contextName]: PropTypes.object.isRequired,
  },
  loc(id) {
    if (!didWarnOfMixin) {
      console.warn('Please, please, plaase... stop using mixins. - ❤️ Eric');
      didWarnOfMixin = true;
    }

    const intl = this.context[IntlMessageProvider.contextName];

    return intl.formatMessage({ id });
  },
});

export const IntlMixin = makeMixin();
