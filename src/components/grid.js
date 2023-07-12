import Buttons from './buttons';
import calculatorSymbols from './symbols';
import Display from './display';

const Grid = () => (
  <div className="border" id="grid">
    <Display />
    {calculatorSymbols.map((symbol, index) => {
      const id = `id${index}`;
      return <Buttons symbol={symbol} key={symbol} id={id} />;
    })}
  </div>
);

export default Grid;
