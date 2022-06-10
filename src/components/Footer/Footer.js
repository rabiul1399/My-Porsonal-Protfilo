import React from 'react';

const Footer = () => {

    const d = new Date();
let year = d.getFullYear();
    return (
        <div >
          <p className='text-center my-4'>  Copyright © {year} - All right reserved</p>
        </div>
    );
};

export default Footer;