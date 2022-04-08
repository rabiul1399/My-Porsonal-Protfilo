import { Button } from 'bootstrap';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './HeadBody.css';
const MainBody = () => {
    return (
      <div className='App'> 
          <div className='navbar-container'>
               <Header></Header>
          </div>
          <div className='cart-container'>
                <Main></Main>
          </div>

      </div>
    );
};

export default MainBody;