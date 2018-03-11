import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, injectIntl, FormattedMessage} from 'react-intl';

let intlFormatMessage;

class IntlMessage extends React.Component {
  componentWillMount() {
    if (!intlFormatMessage) {
      intlFormatMessage = this.props.intl.formatMessage;
    }
  }

  render() {
    return this.props.children;
  }
}

export const withIntl = (Component) => {
  const InjectedComponent = injectIntl(Component);
  const WrappedIntlMessage = injectIntl(IntlMessage);

  function WithIntl(props) {
    const { locale, messages, ...rest } = props;
    return (
      <IntlProvider locale={locale} messages={messages}>
        <WrappedIntlMessage>
          <InjectedComponent {...rest} />
        </WrappedIntlMessage>
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
  loc: (id) => {
    if (!didWarnOfMixin) {
      console.warn('Please stop using mixins.')
      didWarnOfMixin = true;
    }

    if (intlFormatMessage) {
      return intlFormatMessage({ id });
    }
    return <FormattedMessage id={id} />;
  },
};

export default Mixin;