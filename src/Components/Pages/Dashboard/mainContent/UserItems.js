import { getDownloadURL, getMetadata, ref } from 'firebase/storage'
import React from 'react'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { DbContext } from '../../../../Context/DBContext'
import { getItems, getItemsById } from '../../../../DB/getItems'
import { Photos } from './Photos'

export const UserItems = ({ id, items }) => {
  const { db, storage } = useContext(DbContext)
  const [metadata, setMetadata] = useState([])
  const [imageLink, setImageLink] = useState([])


  // console.log('items in userItem', items)


  useEffect(() => {
    items.map((item, i) => {

      //--------->get link of image from storage
      getDownloadURL(ref(storage, `${item.userDocId}/${item.imageInfo.name}`))
        .then((url) => {
          // `url` is the download URL for 'userId/name.jpg'
          console.log(url)
          setImageLink([...imageLink, url])
          console.log('use effect 2----->', i, item, imageLink)
          // <img src={url} alt="" />
        })
        .catch((error) => {
          // Handle any errors
        });


      //------------->get metadata of image
      const category = ref(storage, `${item.userDocId}/${item.imageInfo.name}`);
      getMetadata(category)
        .then((data) => {
          // Metadata now contains the metadata for 'images/forest.jpg'
          console.log(data.timeCreated)
          // link.push(data.type)
          setMetadata([...metadata , data])
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });



    })
  }, [items])
  
  console.log('metadata', metadata, id, imageLink)
  //upload photo from storage


  return (
    <div className='user-items'>
      {
        imageLink && imageLink.map((url) => {
          <Photos src={url} />
        })
      }

    </div>
  )
}
