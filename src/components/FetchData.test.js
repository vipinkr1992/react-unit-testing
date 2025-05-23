// src/components/FetchData.test.js
import { render, screen, waitFor } from '@testing-library/react';
import FetchData from './FetchData';

test('displays fetched data', async () => {
  const mockFetchData = jest.fn().mockResolvedValue('Fetched Data');
  render(<FetchData fetchData={mockFetchData} />);
  await waitFor(() => expect(screen.getByText(/Fetched Data/i)).toBeInTheDocument());
});
