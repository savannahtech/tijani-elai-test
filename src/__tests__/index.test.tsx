import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    // check if all component are rendered
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('banner')).toBeInTheDocument();
  });
});
