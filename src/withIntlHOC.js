import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, injectIntl} from 'react-intl';
import { IntlMessageProvider } from './IntlAdapater';

export const withIntl = (Component) => {
  const WrappedIntlMessageProvider = injectIntl(IntlMessageProvider);

  const WithIntl = (props) => {
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