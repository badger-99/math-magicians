import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import './App.css';
import Home from './components/home';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/quotes" element={<Quotes />} />
  </Routes>
);

export default App;
