import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('The website loads properly', () => {
  const component = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(component).toMatchSnapshot();
});
