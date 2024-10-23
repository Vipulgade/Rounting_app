import { Link } from 'react-router-dom';
import Navbar from './Navbar'

function Home() {
  return (
    <div className="container mt-2">
        <Navbar/>
      <h1>Welcome to Vip Research Labs</h1>
      <nav className="navbar navbar-expand-sm navbar-dark text-light mt-0 p-3  rounded " style={{ backgroundColor: '#86b6f0' }}>
        <a className="navbar-brand" href="/">Vip Tech</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavId">
          
          <form className="form-inline my-2 my-lg-0"> 
            <div class="d-flex align-items-start gap-3 ">
          <div><input className="form-control mr-sm-2" type="text" placeholder="Search" /></div>
          <div> <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></div>
        </div>
         
            
          </form>
        </div>
      
      <nav className="nav justify-content-center">
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/services">Services</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
      </nav>
    </div>
  );
}

export default Home;
