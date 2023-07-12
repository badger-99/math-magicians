import PropTypes from 'prop-types';

const Calculator = () => (
  <div>
    <Grid />
  </div>
);

const calculatorSymbols = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '-',
];

const Grid = () => (
  <div className="border" id="grid">
    <Display />
    {calculatorSymbols.map((symbol, index) => {
      const id = `id${index}`;
      return <Buttons symbol={symbol} key={symbol} id={id} />;
    })}
  </div>
);

const Display = () => (
  <div className="border" id="display">
    <h2>0</h2>
  </div>
);

const Buttons = ({ symbol, id }) => <button id={'id'+ id } type="button">{symbol}</button>;
Buttons.propTypes = { symbol: PropTypes.string.isRequired };
export default Calculator;
