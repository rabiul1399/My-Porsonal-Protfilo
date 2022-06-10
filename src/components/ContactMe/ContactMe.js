import React from 'react';
import { Form } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <div className='container pb-4'>
            <h2 className='text-center mx-auto mb-5'><span className=' pb-2  border-bottom border-4 border-success  text-primary mb-3 fs-1 '>Get in Touch</span></h2>

            {/* <Form action='https://formsubmit.co/el/volafo' method="POST" className='w-75 mx-auto'>
                <h4 className='text-center'>SEND US A NOTE</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="name" placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name='message' placeholder="Tell us more about your needs......" rows={3} required/>
                </Form.Group>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </Form> */}


<form className='w-75 mx-auto' target="_blank" action="https://formsubmit.co/2a5acb234ed762ba5f8df5d1a39e50b0" method="POST">
<div className="mb-3">
    <input type="text" name='name' className="form-control" id="exampleInputPassword1"  placeholder='Name' required/>
  </div>
  <div className="mb-3 ">
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
  </div>
  <div className="mb-3">
  <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"  placeholder="Tell us more about your needs......"  required />
</div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


        </div>

    );
};

export default ContactMe;