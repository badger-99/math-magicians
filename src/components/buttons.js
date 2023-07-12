import PropTypes from 'prop-types';

const Buttons = ({ symbol, id }) => (
  <button id={id} type="button">
    {symbol}
  </button>
);

Buttons.propTypes = {
  symbol: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Buttons;
