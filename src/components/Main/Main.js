
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ListGroup, B, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardBody from '../CardBody/CardBody';
import './Main.css';
import resume from '../../Rabiul-Developer-Resume-2022.pdf';
const Main = () => {
    return (
        <div className=''>
            <div className='main'>
                <div className='head-body'>
                    <h3>Welcome</h3>
                    <p className='transfrom'>I am Web Devloper</p>

                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, dolores.</span> <br />

                    <a href={resume} class="btn  btn-outline-success  text-white text-center my-5 fw-bold w-full py-3 rounded-pill border-2 " download>Download Resume <FontAwesomeIcon className='ms-2' icon={faDownload} /></a>


                </div>
            </div>

            <div className='main-part'>
                <div className='more'>
                    <h2 className='about'>About Me</h2>
                    <p >Know <span className='sp'>Me</span> More</p>

                </div>

                <div className='my-opnion d-md-flex justify-content-between  '>
                    <div className='my-bio w-75 mx-auto'>
                        <h3>I'm <span className=''>Rabiul Islam,</span> a Web Devloper</h3>
                        <p>Junior Web Developer having 1 years of experience in developing user Interface application and professional web applications using HTML5, CSS, CSS3, JavaScript(Es5 and ES6), React js, and Bootstrap Designed and maintained websites using HTML5, CSS3, Bootstrap, JavaScript  and React js Identified and corrected problems uncovered during testing or customer feedback under guidance of senior developer.</p>
                    </div>
                    <div className='opnion-list  mx-auto w-75  '>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Name:</b> Rabiul Islam</ListGroup.Item>
                            <ListGroup.Item><b>Email:</b> www.rabiulislam3808@gmail.com</ListGroup.Item>
                            <ListGroup.Item><b>Age :</b>21</ListGroup.Item>
                            <ListGroup.Item><b>From:</b>Mohadevpur,Naogaon,Rajshahi</ListGroup.Item>

                        </ListGroup>
                        {/* <button type="button" className=" myCV ">Dowonload CV</button> */}
                        <div className='text-center'>
                            <a href={resume} class="btn btn-outline-secondary text-center my-5 fw-bold w-full py-3 rounded-pill border-2 " download>Download Resume <FontAwesomeIcon className='ms-2' icon={faDownload} /></a>
                        </div>
                    </div>
                </div>


                <div>
                    <CardBody></CardBody>
                </div>

            </div>
        </div>
    );
};

export default Main;