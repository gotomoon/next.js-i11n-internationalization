import {render, screen} from '@testing-library/react';
import pick from 'lodash/pick';
import {NextIntlClientProvider} from 'next-intl';
import messages from '../../messages/en.json';
import Navigation from './Navigation';

// If the tested component uses features from Next.js, you have to mock them.
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn()
  }),
  useParams: () => ({locale: 'en'}),
  useSelectedLayoutSegment: () => ({locale: 'en'})
}));

describe('Navigation', () => {
  it('renders navigation with mobile menu', () => {
    render(
      <NextIntlClientProvider
        locale="en"
        messages={{
          Navigation: messages.Navigation,
          LocaleSwitcher: messages.LocaleSwitcher
        }}
      >
        <Navigation />
      </NextIntlClientProvider>
    );

    // Check if mobile menu button exists
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();

    // Check if desktop navigation is hidden on mobile
    expect(screen.getByText(messages.Navigation.pathnames)).toHaveClass(
      'hidden',
      'md:inline-block'
    );
  });
});
