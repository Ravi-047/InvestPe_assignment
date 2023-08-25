import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<ProductPage />} />
    </Routes>
  );
}

export default App;
