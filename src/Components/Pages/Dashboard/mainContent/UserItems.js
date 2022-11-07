import { getMetadata, ref } from 'firebase/storage'
import React from 'react'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { DbContext } from '../../../../Context/DBContext'
import { getItems } from '../../../../DB/getItems'

export const UserItems = ({ id,items }) => {
  const { db, storage } = useContext(DbContext)
  const [metadata, setMetadata] = useState({})
  const [imglink, setImgLink] = useState(null)

  items.then(function(v){console.log(v)})
  // useEffect(() => {
  //   items.then(function(result){

  //   })


  //   const category = ref(storage, `${id}`);

  //   // Get metadata properties
  //   getMetadata(category)
  //   .then((data) => {
  //     // Metadata now contains the metadata for 'images/forest.jpg'
  //     setMetadata(data)
  //   })
  //   .catch((error) => {
  //     // Uh-oh, an error occurred!
  //   });

  //   console.log('metadata', metadata, id)
  //   //upload photo from storage
  //   // items.map((item) => {
  //     //   getDownloadURL(ref(storage, `${item.userDocId}/${item.imageInfo.name}`))
  //     //     .then((url) => {
  //   //       // `url` is the download URL for 'images/stars.jpg'
  //   //       setImgLink(...imglink , url)
  //   //     })
  //   //     .catch((error) => {
  //   //       // Handle any errors
  //   //     });
  //   // }) 


  // }, [])


  // console.log(id)

  return (
    <div className='user-items'>
      post
    </div>
  )
}
