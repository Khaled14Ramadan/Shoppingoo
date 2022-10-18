// import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from "react-redux";

const NavBar = () => {

  const totalcount = useSelector(state=>state.cartList.totalCounter);

  return (
    <>
     <nav className="navBar py-2 fixed-top">
        <div className="container d-flex  justify-content-between align-items-center">
            <Link to='/' className="logo"><h2 >Shopping</h2></Link>
            <ul className="d-flex me-auto pt-4">
                <li><Link to='/' className="navLink">Home</Link></li>
                <li><Link to='/products' className="navLink">Products</Link></li>
                <li><Link to='/counter' className="navLink">Counter</Link></li>
            </ul>
            <ul className="d-flex ms-auto position-relative">
                <li><Link to='/cart' className="navLink icon"><BsCart4/></Link></li>
                {
                  totalcount?
                  <div class="counter text-white text-center">{totalcount}</div>
                  :
                  <></>
                }
            </ul>
        </div>
     </nav>
            
            
    </>
  )
}

export default NavBar;