import React from 'react';
import Marquee from 'react-fast-marquee';
import pm from './Assest/pm.png';
import rp from './Assest/rp.png';
import usedcar from './Assest/usercar.png';
import rj from './Assest/rj.png';
import pb from './Assest/pb.png';



import './Sponser.css';

function App() {
  return (
    <div className="App mb-5" >
      <div className="title">
        <h1 className='text-danger'>Our Sponser</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={pm} alt="" />
          </div>
          {/* <div className="image_wrapper">
            <img src={puc} alt="" />
          </div> */}
          <div className="image_wrapper">
            <img src={rp} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={usedcar} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={rj} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={pb} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default App;