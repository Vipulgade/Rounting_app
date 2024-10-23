import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ServiceDetail from './ServiceDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/*" element={<Services />}>
          <Route path="design" element={<ServiceDetail />} />
          <Route path="development" element={<ServiceDetail />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
