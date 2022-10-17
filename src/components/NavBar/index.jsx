// import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css';
import { BsCart4 } from 'react-icons/bs';

const NavBar = () => {
  return (
    <>
     <nav className="navBar py-2 fixed-top">
        <div className="container d-flex  justify-content-between align-items-center">
            <Link to='/' className="logo"><h2 >Shopping</h2></Link>
            <ul className="d-flex me-auto pt-4">
                <li><Link to='/' className="navLink">Home</Link></li>
                <li><Link to='/products' className="navLink">Products</Link></li>
            </ul>
            <ul className="d-flex ms-auto">
                <li><Link to='/cart' className="navLink icon"><BsCart4/></Link></li>
            </ul>
        </div>
     </nav>
            
            
    </>
  )
}

export default NavBar;