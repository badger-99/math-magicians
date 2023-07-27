import { render } from '@testing-library/react';
import Home from './home';

test('App should match the snapshot', () => {
  const component = render(<Home />);
  expect(component).toMatchSnapshot();
});
