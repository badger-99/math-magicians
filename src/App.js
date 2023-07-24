import { NavLink, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import './App.css';
import Home from './components/home';

const App = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink className="link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
