import {Link} from 'react-router-dom';
import Home from '../../pages/Home';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import RegistrationPage from '../../pages/RegistrationPage';
import style from './Nav.module.css';
function Nav() {
  return (
     <header>
        <nav>
     <Link to="/" > Home</Link>
     <Link to="/products" > Products</Link>
     <Link to="register">Register</Link>
     <Link to="login">Login</Link>
     <input type = "text" name ="name" placeholder='SEARCH PRODUCTS'/>
        </nav>
     </header>
  )
} 

export default Nav