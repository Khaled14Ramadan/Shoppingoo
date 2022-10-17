import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/products';
import Home from './components/Home/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/index';


function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <div className='appHeader'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/details/:id' element={<ProductDetails/>} />
        </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
