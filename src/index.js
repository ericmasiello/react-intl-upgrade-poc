import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { IntlProvider, injectIntl } from 'react-intl';
import Greeting from './Greeting';
// import { Provider } from './IntlMixin';


const withIntl = (Component) => {
  const InjectedComponent = injectIntl(Component);

  function WithIntl(props) {
    const { i18nData, ...rest } = props;
    return (
      <IntlProvider {...i18nData}>
        <InjectedComponent {...rest} />
      </IntlProvider>
    );
  }

  WithIntl.propTypes = {
    i18nData: PropTypes.shape({
      locale: PropTypes.string,
      messages: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
  };

  WithIntl.displayName = `withIntl(${Component.displayName || Component.name})`;

  return WithIntl;
};


const i18nData = {
  locale: 'en-US',
  messages: {
    'greeting': 'Hello from 2.0!',
  },
};

function App() {
  return (
    <Greeting name="Eric" />
  );
}

const IntlApp = withIntl(App);



render(<IntlApp i18nData={i18nData} />, document.getElementById('root'));