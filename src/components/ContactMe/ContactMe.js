import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <div className='container pb-4'>
            <h2 className='text-center mx-auto mb-5'><span className=' pb-2  border-bottom border-4 border-success  text-primary mb-3 fs-1 '>Get in Touch</span></h2>
         
          <Form className='w-75 mx-auto'>
          <h4 className='text-center'>SEND US A NOTE</h4>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder="Tell us more about your needs......" rows={3} />
  </Form.Group>
  <button type="button" class="btn btn-primary">Send Message</button>
</Form>  
        </div>
    );
};

export default ContactMe;