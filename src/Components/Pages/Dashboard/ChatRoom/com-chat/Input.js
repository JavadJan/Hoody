import React, { useContext, useState } from 'react'
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { ChatContext } from '../context/chatContext'
import { userContext } from '../../../../../Context/userContext'

import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
// import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { DbContext } from '../../../../../Context/DBContext'

export const Input = () => {
  const { user } = useContext(userContext)
  const { data } = useContext(ChatContext)
  const { db , storage } = useContext(DbContext)
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const handleSend = async () => {
    console.log(img, text)
    if (img) {
      const storageRef = ref(storage, uuid())
      const uploadTask = uploadBytesResumable(storageRef, img)
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('File available at', downloadURL);
            console.log('adding link!', downloadURL)
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })
          });
        }
      );
    } else {

      if (text !== "") {
        console.log('start to update chats!', data.chatId)
        await updateDoc(doc(db, 'chats', data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: user.uid,
            date: Timestamp.now()
          })
        })
      }

    }

    console.log(data.chatId)
    if (text !== "") {
      await updateDoc(doc(db, "userChats", user.uid), {
        [data.chatId + ".lastMessage"]:
        {
          text: text
        }
        , [data.chatId + ".date"]: serverTimestamp()
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]:
        {
          text: text
        }
        , [data.chatId + ".date"]: serverTimestamp()
      });
      console.log('uppppdated')
      setText('')
      setImg(null)
    }

  }

  return (
    <div className='input'>
      <input type="text" placeholder='Type Message' value={text} onChange={({ target }) => { setText(target.value) }} />
      <div className='send'>
        <UilMessage className="twit i" onClick={handleSend} />
        <input type="file" style={{ display: "none" }} id="file" onChange={({ target }) => { setImg(target.files[0]) }} />
        <label htmlFor="file" className='i'><UilImagePlus /></label>
      </div>
    </div>
  )
}
