import React from 'react';
import { Card } from 'react-bootstrap';
import one from '../../images/project/project-one.png';

const MyProjects = () => {
    return (
        <div className='mb-4'>
            <h2 className='text-center mx-auto mb-5'><span className=' pb-2  border-bottom border-4 border-success  text-primary mb-3 fs-1 '>My Projects</span></h2>

            <div  className='row row-cols-3 gap-4 pb-3 justify-content-center '>
                <Card className='px-0 border-0 shadow-lg rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src={one} />
                </Card>
                <Card className='px-0 border-0 shadow-lg rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={one} />
                </Card>
                <Card className='px-0 border-0 shadow-lg rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={one} />
                </Card>
                <Card className='px-0 border-0 shadow-lg rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={one} />
                </Card>

            </div>
        </div>
    );
};

export default MyProjects;