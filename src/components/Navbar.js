import React from 'react';
import {PropTypes, props} from 'prop-types';

export default function Navbar(props) {

return (
    
  <nav className={`navbar bg-${props.dark} border-bottom border-body`} data-bs-theme= {props.dark}>
 <div className="container-fluid">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
       <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        
        <a className="nav-link" href="{props.clients}">{props.clients} </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">{props.Features}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#products">{props.products}
         </a>
        </li>
       <li className="nav-item">
       <a className="nav-link" href="contact">{props.contact}</a>
     </li>
      <li className="nav-item">
         <a className="nav-link" href="/">{props.aboutReactCourse} </a>
       </li>
       </ul>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
</div>
</div>
</nav>
);
}
Navbar.PropType = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string


}
 Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'About text here'
}; 


