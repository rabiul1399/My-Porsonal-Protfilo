import { Button } from 'bootstrap';
import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import Main from '../Main/Main';
import MyProjects from '../MyProjects/MyProjects';
import Resume from '../Resume/Resume';
import BootstrapNavbar from './BootstrapNavbar/BootstrapNavbar';
import './HeadBody.css';
const MainBody = () => {
  return (
    <div className=' w-100'>
      <div className='bootstrapNavbar'>
        <BootstrapNavbar></BootstrapNavbar>
      </div>
      <div className='App'>

        <div className='navbar-container'>
          <Header></Header>
        </div>
        <div className='cart-container'>
          <Main></Main>
          <Resume></Resume>
          <MyProjects></MyProjects>
          <ContactMe></ContactMe>
        </div>

      </div>
    </div>
  );
};

export default MainBody;