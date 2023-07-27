import { render } from '@testing-library/react';
import Quote from './quotes';

test('App should match the snapshot', () => {
  const component = render(<Quote />);
  expect(component).toMatchSnapshot();
});
