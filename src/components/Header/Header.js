import React from 'react';
import './Header.css';
import images from '../../images/my-img.jpg';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className='header'>
                <img src={images} alt="" />
                <h3>Rabiul Islam</h3>
                
            
               
                 <div className='group-list'>
                 <Link to="/Home">Home</Link>
                 <Link to="/Home">About Me</Link>
                 <Link to="/Home">What I Do</Link>
                 <Link to="/Home">Resume</Link>
                 <Link to="/Home">Portfolio</Link>
                 <Link to="/Home">Testimonial</Link>
                 <Link to="/Home">Contact</Link>
                 </div>
            
        
        </div>
    );
};

export default Header;