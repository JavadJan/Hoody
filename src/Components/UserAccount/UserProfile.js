import React, {useEffect, useState} from 'react'
import './Pin.js';
import './Model.js';
import './UserProfile.css';

class UserProfile extends React.Component {
    // useEffect(()=>{
    //     const allIcon = document.querySelectorAll('.icon-container');
  
    //     function setMenuActive(){
    //         allIcon.forEach((e)=> e.classList.remove('active'));
    //         this.classList.add('active');
    //     }
    //     allIcon.forEach(e=> e.addEventListener('click', setMenuActive))
    // },[])
    constructor(props) {
      super(props);
  
      this.state = {
        pins: [],
        show_modal: false,
      };
    }
  
    add_pin = (pinDetails) => {
      this.setState((_state) => {
        const new_pins = [..._state.pins];
  
        new_pins.push(<Pin pinDetails={pinDetails} key={_state.pins.length} />);
  
        return {
          pins: new_pins,
          show_modal: false,
        };
      });
    };
  
    render() {
      return (
        <div>
          <div className="profile-container">
            <div className="menu-container">
              <div className="sub-menu">
                <div className="icon-container">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div className="icon-container">
                  <i class="fa-regular fa-bell"></i>
                </div>
                <div className="icon-container">
                  <i class="fa-regular fa-comment-dots"></i>
                </div>
                <div className="icon-container">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className="icon-container">
                  <i
                    class="fa-regular fa-plus"
                    onClick={() => this.setState({ show_modal: true })}
                    className="pint_mock_icon_container add_pin"
                  ></i>
                </div>
                <div className="icon-container">
                  <i class="fa-regular fa-question"></i>
                </div>
              </div>
            </div>
            <main>
              <div className="box">
                <div className="search-box">
                  <input type="text" placeholder="Search..." />
                  <label htmlFor="" className="icon">
                    <i class="fas fa-search"></i>
                  </label>
                </div>
              </div>
              <div className="main-container">
                <div className="pin_container">{this.state.pins}</div>
              </div>
            </main>
          </div>
          {/* <div className="navigation_bar">
            <div
              onClick={() => this.setState({ show_modal: true })}
              className="pint_mock_icon_container add_pin"
            >
              <img
                src="./images/add.png"
                alt="add_pin"
                className="pint_mock_icon"
              />
            </div>
          </div> */}
  
          {/* <div className="pin_container">{this.state.pins}</div> */}
  
          <div
            onClick={(event) =>
              event.target.className === "add_pin_modal"
                ? this.setState({ show_modal: false })
                : null
            }
            className="add_pin_modal_container"
          >
            {this.state.show_modal ? <Model add_pin={this.add_pin} /> : null}
          </div>
        </div>
      );
    }
  }

export default UserProfile