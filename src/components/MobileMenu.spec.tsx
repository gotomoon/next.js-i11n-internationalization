'use client';

import {render, screen, fireEvent} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import messages from '../../messages/en.json';
import MobileMenu from './MobileMenu';

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
  useSelectedLayoutSegment: () => null
}));

describe('MobileMenu', () => {
  it('toggles menu visibility when clicking hamburger button', () => {
    render(
      <NextIntlClientProvider
        locale="en"
        messages={{Navigation: messages.Navigation}}
      >
        <MobileMenu />
      </NextIntlClientProvider>
    );

    // Menu should be hidden initially
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

    // Click hamburger button
    fireEvent.click(screen.getByLabelText('Toggle menu'));

    // Menu should be visible
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Click again to close
    fireEvent.click(screen.getByLabelText('Toggle menu'));

    // Menu should be hidden again
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});
