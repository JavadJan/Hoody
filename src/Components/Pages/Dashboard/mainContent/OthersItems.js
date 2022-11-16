import React, { useContext, useEffect, useState } from 'react'
import image1 from '../../../../assets/image1.jpg'
// import img1 from '../../../../assets/img1.jpg'
// import img2 from '../../../../assets/img2.jpg'
// import img3 from '../../../../assets/img3.jpg'
// import { Iframe } from './Iframe'
import { userContext } from '../../../../Context/userContext'
import haversine from 'haversine-distance'
import ChatBox from '../../ChatBox/ChatBox';
import { Items } from './Items';

import io from "socket.io-client";
import { getItemsByCategory } from '../../../../DB/getItemsByCategory'
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { DbContext } from '../../../../Context/DBContext';
import { async } from '@firebase/util';
import { CardItems } from './CardItems';
const socket = io.connect("http://localhost:3001/");



export const OthersItems = ({ uid ,setOpenModalChat }) => {
    const { user } = useContext(userContext);
    const [category, setICategoty] = useState(null)
    const [items, setItems] = useState(null)
    const [coordination, setCoordination] = useState({ latitude: null, longitude: null })
    const [openMap, setOpenMap] = useState(false)
    const { db } = useContext(DbContext)
    const [room, setRoom] = useState('');
    const [showChat, setShowChat] = useState(false);
    const [username, setUsername] = useState("");
    const style = { border: 0 }
    const src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12109.26968137635!2d22.9416259!3d40.64493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1666177116930!5m2!1sen!2sgr'
    const width = '100%'
    const height = '100%'
    const load = 'lazy'
    const referrerPolicy = "no-referrer-when-downgrade"
    const joinChat = () => {
        if (user && room !== '') {
            console.log("a user exist")
            socket.emit("join-chat", room);
            setShowChat(true)
        }
    };

    //open map
    function handleMap(params) {
        setOpenMap(true)

    }
    
    //GetAllItems
    async function GetAllItems(params) {
        await getDocs(collection(db, 'items')).then((data) => {
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    }

    //by default
    useEffect(() => {
        //get coordination
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
        function showPosition(position) {
            setCoordination({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        }

        async function allItems() {
            await getDocs(collection(db, 'items')).then((data) => {
                setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
            // console.log('resssssssssss' ,items )
        }

        return (() => { allItems() })

    }, [uid])

    //by click on category 
    async function GetItemsByCategory(e) {

        const currentLocation = { latitude: coordination.latitude, longitude: coordination.longitude }
        const q = query(collection(db, "items"), where("category", "==", e.target.innerText));
        onSnapshot(q, async (querySnapshot) => {
            const dst = [];
            querySnapshot.forEach((doc) => {
                dst.push(doc.data());
            });

            console.log("Current category ========>", dst.filter((prof) => prof.uid !== uid));
            setItems(dst.filter((prof) => prof.uid !== uid).filter((dt) => 5.2 > Number((haversine(currentLocation, dt.coordination) / 1000).toFixed(2))))
            // console.log(items)
        });

        // && Number((haversine(currentLocation, prof.coordination)/1000).toFixed(2))>1

        //this test worked well
        // data.filter((dt)=> Number((haversine(a, dt.coordination)/1000).toFixed(2))>0.41) ,
        // data.map((dt)=> Number((haversine(a, dt.coordination)/1000).toFixed(2))),
    }

    //home 
    const a = { latitude: 40.6477262, longitude: 22.9393645 }

    // masoom's home
    // const b = { latitude: 40.6500294, longitude: 22.9365368 }                   
    const tm = [{ latitude: 40.6500294, longitude: 22.9365368 }, { latitude: 40.6380324, longitude: 22.9412795 }, { latitude: 50.0981675, longitude: 8.6449389 }]
    //Red cross
    const b = { latitude: 40.6380324, longitude: 22.9412795 }

    //reza's home
    // const b = { latitude: 50.0981675, longitude: 8.6449389 }

    // console.log('dissssssssstance', tm.map((dt) => Number((haversine(a, dt) / 1000).toFixed(2))))

    return (
        <div className='others-items'>
            <div className='map'>
                <div className='location'>
                    <div className='your-location'>
                        <i className="fas fa-location"></i>
                    </div>
                    <div className='flash-down'>
                        <i className="uil uil-angle-down"></i>
                    </div>
                    <div className="search-box-loc">
                        <input type="text" placeholder='Search location ...' />
                        {/* style="font-family:Arial, FontAwesome" */}
                        {/* placeholder="&#xF002;" */}
                        <span htmlFor="" className="search-icon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                {/* {!showChat ? (
                <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                <input
                    type="text"
                    placeholder="John..."
                    onChange={(event) => {
                    setUsername(event.target.value);
                    }}
          />
          <input
            type="number"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinChat}>Join A Room</button>
        </div>
    ) : ( 
        <ChatBox socket={socket} username={username} room={room} />
      )} */}

                <div className="item-categories">
                    <ul>
                        <li onClick={GetAllItems}>All</li>
                        <li onClick={GetItemsByCategory}>Costume</li>
                        <li onClick={GetItemsByCategory}>Sports</li>
                        <li onClick={GetItemsByCategory}>Appliance Home</li>
                        <li onClick={GetItemsByCategory}>Toys</li>
                        <li onClick={GetItemsByCategory}>Electronic</li>
                        <li onClick={GetItemsByCategory}>Gaming</li>
                        <li onClick={GetItemsByCategory}>Discount</li>
                    </ul>
                </div>

                <div className='items-box'>
                    {items && items.map((item, i) => {
                        return (
                            <CardItems item={item} key={i} setOpenModalChat={setOpenModalChat} />
                        );
                    })}
                </div>
            </div>




        </div>
    )
}
