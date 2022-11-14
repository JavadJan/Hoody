import React from 'react'
import '../dash-css/photo.scss'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { formatDistance, set } from 'date-fns'
import { UilTrashAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import swal from 'sweetalert';
import { deleteDoc, doc } from 'firebase/firestore'
import { useContext } from 'react'
import { DbContext } from '../../../../Context/DBContext'
import { deleteObject, ref } from 'firebase/storage'
import { useUser } from '../../../../DB/useUser'


export const Photos = ({ item , setUpdateModalOpen , setUpdateItem}) => {
  const [toggle, setToggle] = useState(false)
  const { db, storage } = useContext(DbContext)
  const { user: { id } } = useUser()

  //toggle for modify
  function handleToggle() {
    setToggle(!toggle)
  }

  //-------->handleDelete
  async function handleDelete(params) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          //delete from storage
          const desertRef = ref(storage, `${id}/${params.target.parentElement.parentElement.parentElement.children[1].children[0].alt}`);

          // Delete the file
          deleteObject(desertRef).then(() => {
            // File deleted successfully
            console.log('File deleted successfully')
          }).catch((error) => {
            // Uh-oh, an error occurred!
          });

          //delete from firestore
          deleteDoc(doc(db, 'items', params.target.id))
          params.target.parentElement.parentElement.parentElement.remove()
          swal("Your item has been deleted!", {
            icon: "success",
          });
        } else {

        }
      });
  }

  //-------------->handleUpdate
  function handleUpdate(params) {
    setUpdateModalOpen(true)
    console.log(params.target.parentElement.parentElement.parentElement.children[1].children[0].src)
    console.log(params.target.parentElement.parentElement.parentElement.children[2].children[1].textContent)

    const updateItem = {
      link:params.target.parentElement.parentElement.parentElement.children[1].children[0].src , 

      price:params.target.parentElement.parentElement.parentElement.children[2].children[1].textContent , 

      description: params.target.parentElement.parentElement.parentElement.children[2].children[2].textContent
    }
    setUpdateItem(updateItem)
  }
  return (
    <>
      <div className='post' >

        <div className="header-post">
          <UilEllipsisH className="icon-list" onClick={handleToggle}
          />
          {toggle ? (<ul className='modify' >
            <li onClick={handleDelete} id={`${item.id}`}>Delete</li>
            <li onClick={handleUpdate}>Update</li>
          </ul>) : ''}
        </div>


        <div className='photo-post'>
          <img width="280px" height='250px' src={item.linkImage} alt={item.imageInfo.name} />
        </div>

        <div className="details-post">
          <p className='time'>{formatDistance(item.dateCreated, new Date())} ago</p>
          <p className='price'>{item.price ? item.price : 'free'}</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

      </div>
    </>
  )
}
