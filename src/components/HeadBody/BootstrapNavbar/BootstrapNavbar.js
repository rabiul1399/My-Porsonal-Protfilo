import React from 'react';
import facebook from '../../../images/logo/Facebook.png';
import google from '../../../images/logo/google.png';
import twitter from '../../../images/logo/twitter_logo_PNG1.png';
const BootstrapNavbar = () => {
    return (
        <div>
 <nav className="navbar navbar-expand-lg  navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Rabiul Islam</a>
   <div className='navbar-nav d-flex flex-row ms-auto '>
   <a className="nav-link active me-3" href="/"><img title="Facebook" width={'34px'} src={facebook} alt="" /></a>
   <a className="nav-link active me-3" href="/"><img title="Twitter" width={'25px'} src={twitter} alt="" /></a>
   <a className="nav-link active me-2" href="/"><img title="Google" width={'30px'} src={google} alt="" /></a>

   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  ">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          <a className="nav-link active" aria-current="page" href="/">About Me</a>
          <a className="nav-link active" aria-current="page" href="/">What I Do</a>
          <a className="nav-link active" aria-current="page" href="/">Resume</a>
          <a className="nav-link active" aria-current="page" href="/">Portfolio</a>
          <a className="nav-link active" aria-current="page" href="/">Testimonial</a>
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
         
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default BootstrapNavbar;