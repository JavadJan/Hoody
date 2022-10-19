import React, { lazy } from 'react'
import { Iframe } from './Iframe'

export const MainContent = () => {
    const style ={border : 0} 
    const src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12109.26968137635!2d22.9416259!3d40.64493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1666177116930!5m2!1sen!2sgr'
    const width = 800
    const height = 600
    const load = 'lazy'
    const referrerPolicy="no-referrer-when-downgrade"


    return (
        <div className='main-profileContent'>
            <Iframe 
            src ={src} 
            width= {width} 
            height = {height} 
            style = {style} 
            allowFullScreen = {""}  
            load = {load} 
            referrerPolicy = {referrerPolicy} />
           
        </div>
    )
}
