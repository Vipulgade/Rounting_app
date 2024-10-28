import { Outlet, Link } from 'react-router-dom';
import './Contact.css';
import Navbar from './Navbar';
function Services() {
  return (
    <div className="container mt-5  ">
        <Navbar/>
      <div className='form-container mt-5 d-flex flex-wrap'>
      
      <h2 className="text-center">Services</h2>
      <nav className="nav justify-content-center">
        <Link className="nav-link" to="design">Design</Link>
        <Link className="nav-link" to="development">Development</Link>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </div>
    </div>  
  );
}

export default Services;
