import * as ReactIntl from 'react-intl';

console.log('ReactIntl', ReactIntl);

const Mixin = {
  loc: () => '[placeholder]',
};

export const Provider = ReactIntl.IntlProvider;
export const Message = ReactIntl.FormattedMessage;

export default Mixin;