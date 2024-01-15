import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from '../app/App';
import { getApplications } from '../api/applicationsServices';
import { describe, test, expect, vi } from 'vitest';

test('renders "Application Portal" title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Application portal/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Check the application client side', () => {
  it('fetches successfully data from an API', async () => {
    const mockData = [{ id: 1, name: 'Application 1' }];
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });
    const result = await getApplications(1, 5);
    expect(result).toEqual(mockData);
  });

  // I was folling reference from the  vitest docs https://vitest.dev/api/#test-fails
  // I couldn't make this work
  // it('will no fetch data from an API', async () => {
  //   await expect(getApplications(1, 5)).rejects.toThrowError('Network Error');
  // });
});
