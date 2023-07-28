import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import Navigation from './components/navigation';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quotes />} />
    </Routes>
    <Footer />
  </>
);

export default App;
