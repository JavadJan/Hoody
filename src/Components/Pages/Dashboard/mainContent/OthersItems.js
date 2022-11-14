import React, { useContext, useEffect, useState } from 'react'
import image1 from '../../../../assets/image1.jpg'
import img1 from '../../../../assets/img1.jpg'
import img2 from '../../../../assets/img2.jpg'
import img3 from '../../../../assets/img3.jpg'
import { Iframe } from './Iframe'
import { userContext } from '../../../../Context/userContext'
import haversine from 'haversine-distance'
import ChatBox from '../../ChatBox/ChatBox';


import io from "socket.io-client";
import { getItemsByCategory } from '../../../../DB/getItemsByCategory'
const socket = io.connect("http://localhost:3001/");



export const OthersItems = ({id}) => {
    const { user } = useContext(userContext);
    const [category, setICategoty] = useState(null)
    const [items, setItems] = useState(null)
    const [coordination, setCoordination] = useState({ latitude: null, longitude: null })
    const [openMap, setOpenMap] = useState(false)

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
    async function GetItemsByCategory(e) {
        //getting location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position) {
            setCoordination({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        }

        console.log('coordination0000000000000', coordination)

        //get items by filter category
        await getItemsByCategory(id, e.target.innerText, coordination).then((data) => {
          setItems(data)
        })
        await console.log('eeeeeeeeeeeeeeeeeeee',  items)
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

    console.log('dissssssssstance', tm.map((dt) => Number((haversine(a, dt) / 1000).toFixed(2))))

    return (
        <div className='others-items'>

            {/* <div className='google-map'> */}

            {/* <Iframe
                    src={src}
                    width={width}
                    height={height}
                    style={style}
                    allowFullScreen={""}
                    load={load}
                    referrerPolicy={referrerPolicy} />   */}
            {/* </div> */}

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
                {!showChat ? (
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
                            type="text"
                            placeholder="Room ID..."
                            onChange={(event) => {
                                setRoom(event.target.value);
                            }}
                        />
                        <button onClick={joinChat}>Join A Room</button>
                    </div>
                ) : (
                    <ChatBox socket={socket} username={username} room={room} />
                )}
                <div className="item-categories">
                <ul>
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
                    {/* 1 */}
                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: 10$</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p onClick={() => {
                                console.log('clicked')
                            }}>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>
                    {/* 1 */}


                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: 10$</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='item-img'>
                            <img src={image1} alt="" />
                        </div>

                        <div className='item-content'>
                            <h4>name</h4>
                            <h5>Price: free</h5>
                            <p>
                                <i className="uil uil-map-marker"></i> 500 m
                            </p>
                            <p>
                                <i className="fa-regular fa-comment-dots"></i> message
                            </p>
                            <p className='save'><i className="fa-regular fa-star"></i> <span className='details'>read more</span> </p>
                        </div>
                    </div>


                </div>
            </div>




        </div>
    )
}
