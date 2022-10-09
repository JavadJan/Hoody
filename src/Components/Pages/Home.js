import React from 'react'
import video from '../../assets/back-video.mp4'
import './Home.css'
export const Home = () => {
  return (
    <div className='home'>
      <div className="background-video">
        <video autoPlay mute loop className='video'>
          <source src={video}/>
        </video>
      </div>
<div className="home-content">
   
     <h1>Let's build a better world</h1>
    <p>“There is no exercise better for the heart
 than reaching down and lifting people up.”
                                           ― John Holmes

                                           
</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium perferendis, dolorum temporibus modi quis minus natus voluptatem possimus, blanditiis dolorem ex ipsum expedita ratione praesentium ab. Ipsam quasi libero blanditiis.</p>
    
<div className="btn-group">
      <button className="join">join</button>
      <button className="donate">donate</button>
    </div>
    </div>

    
    </div>
  )
}
