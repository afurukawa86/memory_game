import { render } from '@testing-library/react';
import { Home } from '.';

test('renders learn react link', () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toHaveClass('container')
});
