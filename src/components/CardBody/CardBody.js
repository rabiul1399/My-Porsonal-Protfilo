import React from 'react';
import { Card } from 'react-bootstrap';

const CardBody = () => {
    return (
         <div className='row mx-auto gap-4 justify-content-center border-none'>
       <h1 className='text-center'>What <span className='sp'>I</span> Do</h1>
                    <>

                        <Card className='' border="light" style={{ width: '22rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="light" style={{ width: '22rem' }}>

                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </>
                </div>
    );
};

export default CardBody;