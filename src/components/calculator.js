import { useState } from 'react';
import PropTypes from 'prop-types';
import calculatorSymbols from './symbols';

const Calculator = () => (
  <div>
    <Grid />
  </div>
);

const Grid = () => {
  const [data, setData] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  return (
    <div className="border" id="grid">
      <Display result={data.next || data.total || '0'} />
      {calculatorSymbols.map((symbol, index) => {
        const id = `id${index}`;
        return <Buttons symbol={symbol} name={symbol} id={id} event={handleClick} key={symbol} />;
      })}
    </div>
  );
};
  <div className="border" id="display">
    <h2>0</h2>
  </div>
);

const Buttons = ({ symbol, name, id }) => (
  <button id={id} name={name} type="button">
    {symbol}
  </button>
);

Buttons.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Calculator;
