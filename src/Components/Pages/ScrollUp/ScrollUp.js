import {IoIosArrowDropupCircle} from 'react-icons/io'
import React,{useState} from 'react'
import "./ScrollUp.css"
const ScrollUp=() =>{
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400 ){
        setShowScroll(false)
      }
    };
  console.log(window.pageYOffset)
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  


  return (
   <IoIosArrowDropupCircle className='scrollTop'onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}></IoIosArrowDropupCircle>
  )
}

export default ScrollUp