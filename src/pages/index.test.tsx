import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  it('renders Home without crash', () => {
    render(<Home />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });
});
