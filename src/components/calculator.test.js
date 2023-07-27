import { render } from '@testing-library/react';
import Calculator from './calculator';

test('App should match the snapshot', () => {
  const component = render(<Calculator />);
  expect(component).toMatchSnapshot();
});
