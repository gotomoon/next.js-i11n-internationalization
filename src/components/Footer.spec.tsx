import {render} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import messages from '../../messages/en.json';
import Footer from './Footer';

it('renders footer', () => {
  render(
    <NextIntlClientProvider locale="en" messages={{Footer: messages.Footer}}>
      <Footer />
    </NextIntlClientProvider>
  );
});
