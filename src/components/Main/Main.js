
import React from 'react';
import { ListGroup, B, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './Main.css';
const Main = () => {
    return (
        <div className=''>
            <div className='main'>
                <div className='head-body'>
                    <h3>Welcome</h3>
                    <p className='transfrom'>I am Web Devloper</p>

                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, dolores.</span> <br />
                    <button className=' myBtn' >Hire Me</button>


                </div>
            </div>

            <div className='main-part'>
                <div className='more'>
                    <h2 className='about'>About Me</h2>
                    <p >Know <span className='sp'>Me</span> More</p>


                </div>

                <div className='my-opnion d-flex justify-content-between  '>
                    <div className='my-bio w-75 mx-5'>
                        <h3>I'm <span className=''>Rabiul Islam,</span> a Web Devloper</h3>
                        <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                    </div>
                    <div className='opnion-list  ms-0'>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Name:</b> Rabiul Islam</ListGroup.Item>
                            <ListGroup.Item><b>Email:</b> www.rabiulislam3808@gmail.com</ListGroup.Item>
                            <ListGroup.Item><b>Age :</b>21</ListGroup.Item>
                            <ListGroup.Item><b>From:</b>Mohadevpur,Naogaon,Rajshahi</ListGroup.Item>

                        </ListGroup>
                        <button type="button" className=" myCV ">Dowonload CV</button>



                    </div>
                </div>


                <div className='row  gap-4 border-none'>

                    <>

                        <Card className='' border="light" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="light" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="light" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="light" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="light" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />





                    </>
                </div>

            </div>
        </div>
    );
};

export default Main;