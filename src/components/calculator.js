import PropTypes from 'prop-types';
import calculatorSymbols from './symbols';

const Calculator = () => (
  <div>
    <Grid />
  </div>
);

const Grid = () => (
  <div className="border" id="grid">
    <Display />
    {calculatorSymbols.map((symbol, index) => {
      const id = `id${index}`;
      return <Buttons symbol={symbol} key={symbol} name={symbol} id={id} />;
    })}
  </div>
);

const Display = () => (
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
