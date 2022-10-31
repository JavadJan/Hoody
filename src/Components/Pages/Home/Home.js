import React,{useEffect,useRef, useState} from 'react'
import { About } from '../About/About'
import './Home.css'

import { gsap } from 'gsap'


import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'





import polygon from '../../../assets/test/hexagon.png'
import dots from '../../../assets/test/hexagon.png'
import dots1 from '../../../assets/test/cell.png'

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Contact } from '../Contact/Contact'
import { Link } from 'react-router-dom'




gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

export const Home = () => {

  const titleRef = useRef();
const parallaxRef=useRef();
  const slideIn = (elem)=>{
    gsap.fromTo(
    elem,
    {
      opacity:1,
      y:-10,
      scale:1
    },{
      opacity:1,
      y:0,
      scale: .8,
      ease:"power2.out",
      delay:.1,
      duration:.8,
      scrollTrigger:{
        trigger:elem,
        start: "top center",
        end: "bottom top",
        scrub: true,

      }
    }
  )
  }



  const load = () =>{
    let tl1=gsap.timeline();
    let tl2=gsap.timeline();
    
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
    opacity:0

    }).to("#content",{
    
      duration:2,
     scrollTo:"#content",
    //  display:"none"
    
    }).fromTo(".circlesHome",{
      y:-200,
      opacity:0,
   
    },{
      y:0,
      opacity:1,
    
      

    }
    
    )
    .from(".circlesHome",
    
    {
      y:-0,
      opacity:0,
      scale:1,
    },
    
    {
      y:-10,
      scale:.8,
      opacity:1,
      duration:.8,
      delay:1,
      ease:"power2.out",
      scrollTrigger:{
        trigger:parallaxRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,

      }
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
  delay:.5
 })

  }



  useEffect(()=>{
    load()
    // slideIn(".circlesHome")
  },[])

  return (

    <>
      <div className='home' id='home'>
      <div className="circlesHome" ref={parallaxRef}>
      {/* <MouseParallaxContainer   containerStyles={{
              width: "100%",
              display: "grid",
              position:"relative",
              gridTemplateColumns: "auto auto",
              overflow:"visible"
            }}
          >
  

    <MouseParallaxChild factorX={0.03} factorY={0.08} >
        <img src={dots1} alt=""  className='abstract'/>
    </MouseParallaxChild>
    <MouseParallaxChild factorX={0.05} factorY={0.09}>
      <img src={dots} alt=""  className='dots'/>
    </MouseParallaxChild>

    <MouseParallaxChild factorX={0.05} factorY={0.09}>
        <img src={polygon} alt="" className='circle1'/>
    </MouseParallaxChild>
    
</MouseParallaxContainer> */}
</div>
     

        <div className="home-content">
        <h1 className='Hoody' ref={titleRef}>
            <span className="letter">H</span>
            <span className="letter">O</span>
            <span className="letter">O</span>
            <span className="letter">D</span>
            <span className="letter">Y</span>
            </h1>
            <div id="content">

            <h1 id="hText">Let's build a better world</h1>
          <p>“There is no exercise better for the heart
            than reaching down and lifting people up.”
            ― John Holmes


          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium perferendis, dolorum temporibus modi quis minus natus voluptatem possimus, blanditiis dolorem ex ipsum expedita ratione praesentium ab. Ipsam quasi libero blanditiis.</p>

          <div className="btn-group">
            <button className="join">
              <Link to="/Login">join</Link>
              </button>
            <button className="donate">donate</button>
          </div>


        </div>

     </div>

   
      </div>

      <About />
      <Contact/>
    </>
  )
}
