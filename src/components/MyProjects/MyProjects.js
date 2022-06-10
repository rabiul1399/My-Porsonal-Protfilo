import React from 'react';
import { Link } from 'react-router-dom';
import one from '../../images/project/project-one.png';
import './MyProjects.css'
const MyProjects = () => {
    return (
        <div className='mb-4 mx-2'>
            <h2 className='text-center mx-auto mb-5'><span className=' pb-2  border-bottom border-4 border-success  text-primary mb-3 fs-1 '>My Projects</span></h2>

    <div >
    <div className='d-lg-flex'>
            <div className=' col m-3 styleCard d-flex position-relative  align-items-end shadow mb-5'>
                    <img  src={one} alt="" />
                    <div className="info ">
                        <h2>Heading</h2>
                        <p>Encapsulating animations into components has the added benefit of making them more broadly useful.</p>                    
                        <Link to='/project' className='btn btn-sm btn-dark me-3'>Read More</Link>                   
                    <a  href="https://car-parts-asigenment-12.web.app" className='btn btn-sm btn-dark ' target='blank'>Live Site</a>
                    </div>
                </div>
                <div className=' col m-3 styleCard d-flex position-relative  align-items-end shadow mb-5 '>
                    <img  src={one} alt="" />
                    <div className="info">
                        <h2>Heading</h2>
                        <p>Encapsulating animations into components has the added benefit of making them more broadly useful.</p>
                        <a href="/" className='btn btn-dark '>Read More</a>
                    </div>
                </div>
                <div className=' col m-3 styleCard d-flex position-relative  align-items-end shadow mb-5'>
                    <img  src={one} alt="" />
                    <div className="info">
                        <h2>Heading</h2>
                        <p>Encapsulating animations into components has the added benefit of making them more broadly useful.</p>
                        <a href="/" className='btn btn-dark '>Read More</a>
                    </div>
                </div>
            </div>
            <div className='d-lg-flex'>
            <div className=' col m-3 styleCard d-flex position-relative  align-items-end shadow mb-5'>
                    <img  src={one} alt="" />
                    <div className="info ">
                        <h2>Heading</h2>
                        <p>Encapsulating animations into components has the added benefit of making them more broadly useful.</p>
                        <a href="/" className='btn btn-dark '>Read More</a>
                    </div>
                </div>
                <div className=' col m-3 styleCard d-flex position-relative  align-items-end shadow mb-5 '>
                    <img  src={one} alt="" />
                    <div className="info">
                        <h2>Heading</h2>
                        <p>Encapsulating animations into components has the added benefit of making them more broadly useful.</p>
                        <a href="/" className='btn btn-dark '>Read More</a>
                    </div>
                </div>
                <div className=' col m-3 styleCard d-flex position-relative  align-items-end shadow mb-5'>
                    <img  src={one} alt="" />
                    <div className="info">
                        <h2>Heading</h2>
                        <p>Encapsulating animations into components has the added benefit of making them more broadly useful.</p>
                        <a href="/" className='btn btn-dark '>Read More</a>
                    </div>
                </div>
            </div>
    </div>
        </div>
    );
};

export default MyProjects;