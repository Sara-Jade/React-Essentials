import { render } from '@testing-library/react';
import App from './App';

test('that App has text', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Hello, React testing library!/);

  expect(text).toHaveTextContent('Hello, React testing library!');
});
