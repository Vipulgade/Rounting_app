import { Outlet, Link } from 'react-router-dom';


function Services() {
  return (
    <div className="container mt-5 card">
        
      
      <h2 className="text-center">Services</h2>
      <nav className="nav justify-content-center">
        <Link className="nav-link" to="design">Design</Link>
        <Link className="nav-link" to="development">Development</Link>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
