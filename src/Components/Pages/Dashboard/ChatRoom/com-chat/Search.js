import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { DbContext } from '../../../../../Context/DBContext'
import { userContext } from '../../../../../Context/userContext'

export const Search = () => {
  const [username, setUsername] = useState('')
  const [userSearch, setUserSearch] = useState('')
  const [err, setErr] = useState(false)
  const { user } = useContext(userContext)
  const { db } = useContext(DbContext)

  const searchUser = async (username) => {
    try {
      const q = query(collection(db, 'users'), where('displayName', '==', username))
      const snapShot = await getDocs(q)
      snapShot.docs.map((doc) => {setUserSearch(doc.data())})
      console.log('searching', userSearch)
    } catch (error) {
      setErr(true)
      console.log('user not find')
    }
    console.log('searchUser:' , userSearch)
  }

  function handleKey(e) {
    e.code === 'Enter' && searchUser(username)
  }

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      user.uid > userSearch.uid
        ? user.uid + userSearch.uid
        : userSearch.uid + user.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      //
      //if this is for the first time to chat
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        
        await updateDoc(doc(db, "userChats", userSearch.uid), {
          [combinedId + ".userInfo"]:
          {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          }
          , [combinedId + ".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]:
          {
            uid: userSearch.uid,
            displayName: userSearch.displayName,
            photoURL:  userSearch.photoURL
          }
          , [combinedId + ".date"]: serverTimestamp()
        });
      }
      console.log('userChats updated')
    } catch (err) { }
    console.log('error')
    setUserSearch(null);
    setUsername("")
  };

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" className="text" placeholder='find a user' onKeyDown={handleKey} value={username} onChange={({ target }) => { setUsername(target.value) }} />
      </div>
      {err && <span>user not found</span>}

      {userSearch && <div className="userChat" onClick={handleSelect}>
        <img src={userSearch.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{userSearch.displayName}</span>
        </div>
      </div>}
    </div>
  )
}
