import React,{useEffect,useRef} from 'react'
import video from '../../../assets/back-video.mp4'
import { About } from '../About/About'
import './Home.css'

import { gsap } from 'gsap'

export const Home = () => {

  const titleRef = useRef();
  const contentRef =useRef();


  const load = () =>{

    let tl1=gsap.timeline();
    let tl2=gsap.timeline()
    
    tl1.fromTo(".letter",
    {
      x:-100,
      opacity:0,
    },
    {
      x:0,
      opacity:1,
      stagger:.33,
      delay:1
    },{

    }
    ).to(".Hoody",{
      y:-45,
      delay:.7

    }).to(".letter",{
      y:-45,
      delay:.8,
      duration:.5,
      margin:"0 2rem"

    }).to(".letter",{
      y:-45,
      delay:.8,
      duration:.5,
      margin:"0"

    }).to(".letter",{
      x:-titleRef.current.clientWidth,
      delay:1,
      duration:2,
    rotate:-360,

    }).to("#content",{
    
      duration:2,
     scrollTo:"#content",
    //  display:"none"
    
    })

    tl2.fromTo("#content",
    {
      opacity:0,
       y:0,
   },{
    
    delay:6.8,
     opacity:1,
     y:-400,
     ease:"power2.out",
    
   }
 ).fromTo("#hText",{
y:-45,
opacity:.2
 },{
  y:0,
  opacity:1
 }
 )
 .fromTo(".btn-group",
 {
  x:-100,
opacity:0
 },
 {
  x:0,
  opacity:1,
  stagger:.33,
  delay:1
 })

  }

  

  useEffect(()=>{
    load()

  },[])
  // useEffect(()=>{
  //   slideUp("#content")

  // },[])
  return (

    <>
      <div className='home'>
        <div className="background-video">
          <video autoPlay mute="true" loop className='video'>
            <source src={video} />
          </video>
          
        </div>
        <div className="home-content">
        <h1 className='Hoody' ref={titleRef}>
            <span className="letter">H</span>
            <span className="letter">O</span>
            <span className="letter">O</span>
            <span className="letter">D</span>
            <span className="letter">Y</span>
            </h1>
            <div id="content" ref={contentRef}>
            <h1 id="hText">Let's build a better world</h1>
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
      

      </div>

      <About />
    </>
  )
}
