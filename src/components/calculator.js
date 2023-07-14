import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
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

  const handleClick = (buttonName) => {
    const newData = calculate(data, buttonName);
    setData(newData);
  };

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

const Display = ({ result }) => (

  <div className="border" id="display">
    <h2>{result}</h2>
  </div>
);

const Buttons = (props) => {
  const {
    symbol, name, event, id,
  } = props;
  return (
    <button id={id} name={name} type="button" onClick={() => { event(name); }}>
      {symbol}
    </button>
  );
};

Display.propTypes = { result: PropTypes.number.isRequired };

Buttons.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Calculator;
