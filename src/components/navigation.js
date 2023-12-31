import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/calculator">
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/quote">
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;
