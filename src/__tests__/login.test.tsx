import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '@/pages/login';

describe('LoginPage', () => {
  it('should render "Sign in" button', async () => {
    render(<Login />);

    // Wait for the component to render
    await waitFor(() => {
      const signInButton = screen.getByRole('Sign in');
      expect(signInButton).toBeInTheDocument();
    });
  });
});
