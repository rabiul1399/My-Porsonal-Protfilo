import React from 'react';


const ContactMe = () => {
    return (
        <div className='container pb-4'>
            <h2 className='text-center mx-auto mb-5'><span className=' pb-2  border-bottom border-4 border-success  text-primary mb-3 fs-1 '>Get in Touch</span></h2>


           <div className='card w-100 mx-auto border-0  shadow-lg bg-secondary'>
            <h4 className='text-white py-4 text-center'>SEND US A MESSAGE</h4>
           <form className='w-50 mx-auto pb-5' target="_blank" action="https://formsubmit.co/2a5acb234ed762ba5f8df5d1a39e50b0" method="POST">
                <div className="mb-3">
                    <input type="text" name='name' className="form-control" id="exampleInputPassword1" placeholder='Name' required />
                </div>
                <div className="mb-3 ">
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us more about your needs......" required />
                </div>

                <button type="submit" className="btn btn-primary ">Submit</button>
            </form>
           </div>
        </div>

    );
};

export default ContactMe;