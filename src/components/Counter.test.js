import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments count',async () => {
  render(<Counter />);
  const button = screen.getByText(/Increment/i);
  await userEvent.click(button);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
