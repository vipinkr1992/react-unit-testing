import { render, screen, waitFor } from '@testing-library/react';
import FetchData from './FetchData';

test('displays fetched post title and body', async () => {
  const mockPost = {
    title: 'Test Title',
    body: 'This is the test body.'
  };

  const mockFetchData = jest.fn().mockResolvedValue(mockPost);

  render(<FetchData fetchData={mockFetchData} />);

  // Wait for the title to appear
  await waitFor(() =>
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  );

  // Also check the body
  expect(screen.getByText('This is the test body.')).toBeInTheDocument();
});