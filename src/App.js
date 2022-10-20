import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/products';
import Home from './components/Home/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/index';
import FormCounter from './components/counter/formCounter';
import Signin from './components/Signin';
import Signup from './components/Signup';
import NotFound from './components/notFound';


function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <div className='appHeader'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/counter' element={<FormCounter/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/details/:id' element={<ProductDetails/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
