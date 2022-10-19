import React,{useState,useRef} from "react";
import "./Contact.css";

export const Contact = () => {

  const [name, setName] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const form=useRef()



  const init = () => {
    setName('')
    setLast('')
    setEmail('')
    setMessage('')
    setNumber('')
  }


  return (
    <div className="contact">
      <div className="contact-section">
        <div className="section1-contact">
          <h1>Send your message</h1>


          <form ref={form} className="form" onSubmit={init}>
            <div className="contact-div">
              <input type="text" placeholder="John"  
              value={name}
              onChange={(e) => setName(e.target.value)}
               required
              />
              <label htmlFor="firstName">First Name</label>
            </div>

            <div className="contact-div">
              <input type="text" placeholder="William" 
                 value={last}
                 onChange={(e) => setLast(e.target.value)}
                  required
              />
              <label htmlFor="lastName">Last Name </label>
            </div>

            <div className="contact-div">
              <input type="email" placeholder="Email@example.com" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                  required/>
              <label htmlFor="email">Email Address </label>
            </div>

            <div className="contact-div">
              <input type="number" placeholder="+251 .." 
                 value={number}
                 onChange={(e) => setNumber(e.target.value)}/>
              <label htmlFor="phoneNumber">Phone Number </label>
            </div>

            <div className="contact-div">
              <textarea
                name="comment"
                id=""
                cols="30"
                rows="8"
                placeholder="write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                 required
              ></textarea>
              <label htmlFor="text"></label>
            </div>

            <button className="btn-send" type="submit" >send</button>
          </form>
        </div>
        <div className="section2-contact">
          <span className="logo">Hoody</span>

          <h4>Contact Us</h4>
          <h5>Your small help matter</h5>
          <p>
            Need to get in touch with us?
            <br></br>
            For any comment or suggestion please fill this form.
          </p>

          <p>Email:email@email.com</p>
          <p>+21346497879</p>
        </div>
      </div>
    </div>
  );
};
