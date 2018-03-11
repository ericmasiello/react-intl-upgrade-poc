import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, injectIntl, FormattedMessage} from 'react-intl';

export const withIntl = (Component) => {
  const InjectedComponent = injectIntl(Component);

  function WithIntl(props) {
    const { locale, messages, ...rest } = props;
    return (
      <IntlProvider locale={locale} messages={messages}>
        <InjectedComponent {...rest} />
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

const Mixin = {
  loc: (id) => {
    const T = (
      <FormattedMessage id={id} />
    );

    return T;
  },
};

export const Message = FormattedMessage;

export default Mixin;