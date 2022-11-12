import React from 'react'
import { useEffect } from 'react'
import './Modal.scss'
import logo1 from '../../../../assets/logo1.png'
import { useState } from 'react'
import { storage } from '../../../../DB/firebase'
import { UilPlus } from '@iconscout/react-unicons'
import { UilCloudUpload } from '@iconscout/react-unicons'
import { useUser } from '../../../../DB/useUser'
import { userContext } from '../../../../Context/userContext'
import { useContext } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { DbContext } from '../../../../Context/DBContext'
import { getDownloadURL, ref, updateMetadata, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { getUserById } from '../../../../DB/DoesUserExist'
import { setPersistence } from 'firebase/auth'
import { getItemsById } from '../../../../DB/getItems'

export const UpdateModal = ({ updateModalOpen, setUpdateModalOpen, setTurnLocation, coordination, setItems ,updateItem}) => {

    const { db, storage } = useContext(DbContext)
    const [image, setImage] = useState(null)
    const [type, setType] = useState('donate')
    const [category, setCategory] = useState(null)
    const [explain, setExplain] = useState('')
    const [price, setPrice] = useState(0)

    const { user: { username, userId, id } } = useUser()

    console.log('updateItem' , updateItem)

    //close modal
    if (!updateModalOpen) return null
    async function closeModal() {

        //when close the modal userItem component should refresh
        // await getItemsById(id).then((data) => {
        //     setItems(data)
        // })
        setUpdateModalOpen(false)
        console.log('updateModalOpen','updateModalOpen',updateModalOpen)
        setImage(null)
        setType('')
        setCategory(null)
        setExplain('')
    }

    console.log(image, id, userId)

    //for saving image
    async function handleUpdateImage(e) {
        e.preventDefault()

        // if category !=null the user can store
        if (category) {
            const item = {
                imageInfo: { name: image.name, size: image.size },
                type: type,
                category: category,
                explain: explain,
                coordination: coordination,
                userDocId: id,
                dateCreated: Date.now(),
                owner: username,
                price: price
            }
            console.log('item ,' , item)



            //---------------------add picture in storage 

            // const storageRef = ref(storage, `${id}/` + image.name);
            // const uploadTask = uploadBytesResumable(storageRef, image)

            // // Listen for state changes, errors, and completion of the upload.
            // uploadTask.on('state_changed',
            //     (snapshot) => {
            //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //         console.log('Upload is ' + progress + '% done');

            //         switch (snapshot.state) {
            //             case 'paused':
            //                 console.log('Upload is paused');
            //                 break;
            //             case 'running':
            //                 console.log('Upload is running');
            //                 break;
            //         }
            //     },
            //     (error) => {
            //         // A full list of error codes is available at
            //         // https://firebase.google.com/docs/storage/web/handle-errors
            //         switch (error.code) {
            //             case 'storage/unauthorized':
            //                 // User doesn't have permission to access the object
            //                 break;
            //             case 'storage/canceled':
            //                 // User canceled the upload
            //                 break;

            //             // ...

            //             case 'storage/unknown':
            //                 // Unknown error occurred, inspect error.serverResponse
            //                 break;
            //         }
            //     },
            //     () => {
            //         // Upload completed successfully, now we can get the download URL
            //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            //             console.log('File available at', downloadURL);
            //             console.log('adding link!', downloadURL)
            //             const metadata = { ...item, uid: userId, linkImage: downloadURL }
            //             addItem(metadata)
            //         });
            //     }
            // );

            // //add items in fireStore
            // async function addItem(metadata) {
            //     console.log('addinggggggggggggggggg!')
            //     await addDoc(collection(db, 'items'), metadata)
            //     setImage(null)
            //     setType('')
            //     setCategory(null)
            //     setExplain('')
            // }


        }
        else {
            return null
        }


        //<--------------------------------

    }

    console.log('coordination', coordination)





    return (
        <div id="myModal" className="modal">
            <div className="modal-content">

                <div className='modal-head'>
                    <img src={logo1} alt="" />
                    <span className="close" onClick={closeModal}>&times;</span>
                </div>

                <div id="upload-image">
                    <form id='form' onSubmit={handleUpdateImage}>

                        <div className="content-form">

                            <div className='upload'>

                                <div className='upload-content'>
                                    <input className="file" type="file" accept='image/*' onChange={({ target }) => { setImage(target.files[0]) }} />
                                    <span className='btnUpload'><UilPlus />Upload</span>
                                </div>

                                <div className='preview'>
                                    {!image && <UilCloudUpload className="cloud" />}
                                    {image ? <img src={URL.createObjectURL(image)} alt="arr" /> : <img src={updateItem.link} alt="arr" /> }
                                </div>

                            </div>

                            <div className='info'>

                                <div className='get-info'>

                                    {/* choose the type of donating or selling */}
                                    <div className='choose-type'>
                                        <span><h5 className='title'>Are you going to? </h5></span>
                                        <span>
                                            <input type="radio" id='sell' value="sell" name='type' onChange={({ target }) => { setType(target.value) }} />
                                            <label htmlFor="sell">Sell</label>

                                            {/* by choosing selling radio display the price   */}
                                            <input value={price} className='price' type="number" onChange={({ target }) => { setPrice(target.value) }} />
                                        </span>
                                        <span>
                                            <input type="radio" id='donate' value="Donate" name='type' onChange={({ target }) => { setType(target.value) }} />
                                            <label htmlFor="donate">Donate</label>


                                        </span>
                                    </div>

                                    {/* choose your category of your items */}
                                    <div className='categories'>

                                        <label className='title' for="category">what is kind of?</label>
                                        <select id="category" onChange={({ target }) => { setCategory(target.value) }}>
                                            <option value="Costume">Costume</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Appliance Home">Appliance Home</option>
                                            <option value="Toys">Toys</option>
                                            <option value="Electronic">Electronic</option>
                                            <option value="Gaming">Gaming</option>
                                            <option value="Discount">Discount</option>
                                            <option value="Select Category" selected>Select Category</option>
                                        </select>
                                    </div>

                                    {/* turn on your location */}
                                    <div className='current-location'>
                                        <h5 className='title'>Find items in your neighborhood!</h5>
                                        <input type="checkbox" className='turn-location' onChange={({ target }) => { setTurnLocation(target.checked) }} />
                                    </div>

                                    <div className='explain'>
                                        <h5 className="title">please explain your stock!</h5>
                                        <textarea name="" id="" cols="30" rows="8" onChange={({ target }) => { setExplain(target.value) }}>
                                            {updateItem.description}
                                        </textarea>
                                    </div>

                                </div>

                                <button type='submit'>Update</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
