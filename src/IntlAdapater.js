import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, injectIntl} from 'react-intl';

class IntlMessageProvider extends React.Component {
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

export function ConnectedIntlMessage(props, context) {
  return props.render(context[IntlMessageProvider.contextName]);
}

ConnectedIntlMessage.propTypes = {
  render: PropTypes.func.isRequired,
};

ConnectedIntlMessage.contextTypes = {
  [IntlMessageProvider.contextName]: PropTypes.object.isRequired,
};

export const withIntl = (Component) => {
  // const InjectedComponent = injectIntl(Component);
  const WrappedIntlMessageProvider = injectIntl(IntlMessageProvider);

  function WithIntl(props) {
    const { locale, messages, ...rest } = props;
    return (
      <IntlProvider locale={locale} messages={messages}>
        <WrappedIntlMessageProvider>
          <Component {...rest} />
        </WrappedIntlMessageProvider>
      </IntlProvider>
    );
  }

  WithIntl.propTypes = {
    locale: PropTypes.string.isRequired,
    messages: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  WithIntl.displayName = `withIntl(${Component.displayName || Component.name})`;

  return WithIntl;
};

let didWarnOfMixin = false;

const Mixin = {
  contextTypes: {
    [IntlMessageProvider.contextName]: PropTypes.object.isRequired,
  },
  loc(id) {
    if (!didWarnOfMixin) {
      console.warn('Please stop using mixins.')
      didWarnOfMixin = true;
    }

    return this.context[IntlMessageProvider.contextName].formatMessage({ id });
  },
};

export default Mixin;