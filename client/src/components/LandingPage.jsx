import React from 'react'
import './LandingPage.css'
import sample from '../images/Progress.mp4';
import { Navigate, useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
  return (
    <div className='landing'>
        <video className='videoTag' autoPlay loop muted id="myvideo" >
    <source src={sample} type='video/mp4'  />
    
</video>
<div class="content">
  <button id="myBtn" onClick={()=>{
    navigate('/signin');
  }}>LOGIN</button>
</div>
    </div>
  )
}

export default LandingPage