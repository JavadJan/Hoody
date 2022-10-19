import React, { lazy } from 'react'

export const Iframe = ({src , width , height , load , referrerPolicy , allowFullScreen ,style}) => {
  return (
    <div className='iframe'>
        <iframe src={src} width={width} height={height} style={style} allowFullScreen={allowFullScreen} loading={load} referrerPolicy={referrerPolicy}></iframe>
    </div>
  )
}
