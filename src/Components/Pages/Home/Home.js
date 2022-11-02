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
import { Footer } from '../../Footer/Footer'
import { Nav } from '../../Navbar/Nav'




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
      x:-200,
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
      y:-35,
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
      <Nav/>
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
            <Link className="join" to="/Login">
             join</Link>
            <Link className="donate" to="/">donate</Link>
          </div>


        </div>

     </div>

     <div class="custom-shape-divider-bottom-1667321573">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      </div>

      <About />
      <Contact/>
      <Footer />
    </>
  )

}
