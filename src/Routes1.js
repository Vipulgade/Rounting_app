import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ServiceDesign from './ServiceDesign';


const Routes1 = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/services/:serviceId" component={ServiceDesign} />
        </Routes>
    </BrowserRouter>
  );
};

export default Routes1;
