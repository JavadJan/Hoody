
import React, { useEffect, useState,useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { userContext } from '../../../Context/userContext'
import userImg from '../../../assets/user.png';
import './ChatBox.css'
import {AiOutlineClose} from 'react-icons/ai';
import {IoSendSharp} from 'react-icons/io5'
// import InputEmoji from 'react-input-emoji';
// import e from "cors";
function ChatBox({ socket, username, room }) {
  const { user } = useContext(userContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const[show,setShow]=useState(true)

  const sendMessage = async (e) => {
    // e.preventDefault();
    if (currentMessage !== "") {
      setShow(true)
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          (new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes()),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
 


  return (
<>
    {show?

  <div className="chat-window">
    <div className="chat-header">
      <span className="logo">Hoody</span>
      <AiOutlineClose className="AiOutlineClose" onClick={()=>{
        setShow(false)}}></AiOutlineClose>
    </div>
    <div className="chat-body">
      <ScrollToBottom className="message-container">
        {messageList.map((messageContent) => {
          return (
           
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
               
              <div>
                <div className="message-content">
                <img src={userImg} alt="" />
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
    <div className="chat-footer">
      <input
        type="text"
        value={currentMessage}
        placeholder="write your message here..."
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        }}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
     
      />
         
         {/* <InputEmoji
        value={currentMessage}
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        }}
        cleanOnEnter
        onEnter={handleOnEnter}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
        placeholder="Type a message"
      /> */}
       
      <button onClick={(sendMessage)}><IoSendSharp></IoSendSharp></button>
    </div>
  </div> :null
  }
  </>
  );

}

export default ChatBox;