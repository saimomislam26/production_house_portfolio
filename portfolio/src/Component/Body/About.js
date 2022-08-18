// import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap"
import first from '../../assets/1.png'
import second from '../../assets/2.png'

const About = () => {
  const [modal, setModal] = useState(false)
  const [style, setStyle] = useState(false)

  // Toggle for Modal
  const toggle = () => {
    setModal(!modal);
  }

  // useEffect(()=>{
  //   setStyle(true)
  // },[])
  return (
    <div className='main'>
      <div style={{
        display: 'block', width: 5000, padding: 30
      }}>
        <h4>ReactJS Reactstrap Modal Component</h4>
        <Button color="danger"
          onClick={toggle}>Click me to open Modal</Button>
        <Modal isOpen={modal} toggle={toggle} size="lg" scrollable={true}
          style={{ maxWidth: '1000px', maxHeight: "350px", width: '100%', marginTop: "100px" }} >
          <ModalHeader
            toggle={toggle}>
          </ModalHeader>

          <ModalBody >

            {/* Skill Section */}
            <div className='row mb-5'>
              <div className='col-md-5 left-side-skill'>
                <h6 className='photography-skill-text'>Photography Skills</h6>
                <div className='wedding-photography'>
                  <div className='wedding-photography-sub'>
                    <span className='label'>
                      wedding Photography
                    </span>
                    <span className='number'>
                      95%
                    </span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className='lifestyle-photography'>
                  <div className='lifestyle-photography-sub'>
                    <span className='label'>
                      wedding Photography
                    </span>
                    <span className='number'>
                      75%
                    </span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: "75%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className='film-photography'>
                  <div className='film-photography-sub'>
                    <span className='label'>
                      wedding Photography
                    </span>
                    <span className='number'>
                      50%
                    </span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
              <div className='col-md-2 middle-side-skill' >

              </div>

              {/* Right side div */}
              <div className='col-md-5 right-side-skill'>
                <h6 className='language-skill-text'>Language Skills</h6>
                <div className='wedding-photography'>
                  <div className='wedding-photography-sub'>
                    <span className='label'>
                      wedding Photography
                    </span>
                    <span className='number'>
                      95%
                    </span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className='lifestyle-photography'>
                  <div className='lifestyle-photography-sub'>
                    <span className='label'>
                      wedding Photography
                    </span>
                    <span className='number'>
                      75%
                    </span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: "75%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className='film-photography'>
                  <div className='film-photography-sub'>
                    <span className='label'>
                      wedding Photography
                    </span>
                    <span className='number'>
                      50%
                    </span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fun facts section */}
            <span className='fun-fact-text mb-4'>Fun Facts</span>

            <div className='flex-container mt-4 mb-4'>
              <div className='project-done'>
                <span className='total-number'>777+</span>
                <span className='title-fact'>Projects Completed</span>
              </div>
              <div className='happy-clients'>
                <span className='total-number'>777+</span>
                <span className='title-fact'>Projects Completed</span>
              </div>
              <div className='on-going'>
                <span className='total-number'>777+</span>
                <span className='title-fact'>Projects Completed</span>
              </div>
            </div>

            {/* Our Partener Section */}
            <span className='partner-text mb-4'>Our Partners</span>

            <div className='flex-container-partner mt-4'>
              <div className='project-done'>
                <img src={first} />
              </div>
              <div className='happy-clients'>
                <img src={second} />
              </div>
              <div className='on-going'>
                <img src={first} />
              </div>
            </div>


          </ModalBody>

        </Modal>
      </div >
    </div>
  )
}

export default About