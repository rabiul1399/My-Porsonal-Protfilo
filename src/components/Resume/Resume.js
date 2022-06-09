import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import resume from '../../Rabiul-Developer-Resume-2022.pdf';

const Resume = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center mx-auto mb-5'><span className=' pb-2  border-bottom border-4 border-success  text-primary mb-3 fs-1 '>My Skill</span></h2>
         
          
            <div class="row row-cols-1 row-cols-md-2 mx-2 g-5 ">

                <div class="col ">

                    <div>
                        <p >HTML/CSS</p>
                        <ProgressBar style={{height: "12px"}} animated now={95} label={`${95}%`}  />
                    </div>
                    <div className='mt-3'>
                        <p >Bootstrap</p>
                        <ProgressBar style={{height: "12px"}} animated now={95} label={`${95}%`} />
                    </div>

                    <div className='mt-3'>
                        <p >TailWind CSS</p>
                        <ProgressBar style={{height: "12px"}} animated now={95} label={`${95}%`} />
                    </div>

                    <div className='mt-3'>
                        <p >JavaScript</p>
                        <ProgressBar style={{height: "12px"}} animated now={85} label={`${85}%`} />
                    </div>
                    <div className='mt-3'>
                        <p >React JS</p>
                        <ProgressBar style={{height: "12px"}} animated now={80} label={`${80}%`} />
                    </div>

                </div>
                <div class="col">

                    <div>
                        <p >HTML/CSS</p>
                        <ProgressBar style={{height: "12px"}} animated now={95} label={`${95}%`} />
                    </div>
                    <div className='mt-3'>
                        <p >Bootstrap</p>
                        <ProgressBar style={{height: "12px"}} animated now={95} label={`${95}%`} />
                    </div>

                    <div className='mt-3'>
                        <p >TailWind CSS</p>
                        <ProgressBar style={{height: "12px"}} animated now={95} label={`${95}%`} />
                    </div>

                    <div className='mt-3'>
                        <p >JavaScript</p>
                        <ProgressBar style={{height: "12px"}} animated now={85} label={`${85}%`} />
                    </div>
                    <div className='mt-3'>
                        <p >React JS</p>
                        <ProgressBar style={{height: "12px"}} animated now={80} label={`${80}%`} />
                    </div>

                </div>
           
               
            </div>
         <div className='text-center'>
             <a href={resume} class="btn btn-outline-secondary text-center mt-5 fw-bold w-full py-3 rounded-pill border-2 " download>Download Resume <FontAwesomeIcon className='ms-2' icon={faDownload} /></a>
         </div>
       
        </div>

    );
};

export default Resume;