import React, { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import SearchBox from '../../UserAccount/SearchBox';
import './Product.css';
import '../../UserAccount/SearchBox.css'
import {Nav} from '../../Navbar/Nav';
import {Footer} from '../../Footer/Footer';
// import { storage } from "../../DB/firebase";



 // Function for fetching Pins in firestore
//  fetchPins = () => {
//     const query = storage.collection("Pins").orderBy("createdAt");
//     query.onSnapshot((snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         const pinsObj = {};
//         pinsObj.data = change.doc.data();
//         pinsObj.id = change.doc.id;
//         this.setState({
//           ...this.state,
//           pins: [pinsObj, ...this.state.pins],
//         });
//       });
//     });
//   };
  //Function for rerendering pins in our app
//   componentDidMount() {
//     this.fetchPins();
//   }

// useEffect(() => {
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);

export function Product() {
  return (
    <div>
      <Nav/>
        
        <SearchBox/> 
   {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
      <Footer/>
    </div>
  )
}

