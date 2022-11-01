import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Pin from "./Pin.js";
import Model from "./ModelTest.js";
import Plus from "../../assets/plus.png";
import SearchBox from "./SearchBox";
// import { db } from "../DB/firebase";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      show_modal: false,
    };
  }
  // Function for fetching Pins in firestore
  // fetchPins = () => {
  //   const query = db.collection("Pins").orderBy("createdAt");
  //   query.onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       const pinsObj = {};
  //       pinsObj.data = change.doc.data();
  //       pinsObj.id = change.doc.id;
  //       this.setState({
  //         ...this.state,
  //         pins: [pinsObj, ...this.state.pins],
  //       });
  //     });
  //   });
  // };
  // //Function for rerendering pins in our app
  // componentDidMount() {
  //   this.fetchPins();
  // }
  // Function for adding pins
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
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="icon-container">
                <i className="fa-regular fa-bell"></i>
              </div>
              <div className="icon-container">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
              <div className="icon-container">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="icon-container">
                <img
                  src={Plus}
                  alt=""
                  className="plusIcon pint_mock_icon_container add_pin"
                  onClick={() => this.setState({ show_modal: true })}
                  // className="pint_mock_icon_container add_pin"
                />
                {/* <i
                    className="fa-regular fa-plus pint_mock_icon_container add_pin"
                    onClick={() => this.setState({ show_modal: true })}
                  ></i> */}
              </div>
              <div className="icon-container">
                <i className="fa-regular fa-question"></i>
              </div>
            </div>
          </div>
          <main>
            <SearchBox />
            <div className="main-container">
              <div className="pin_container">{this.state.pins}</div>

              {/* {data
            .filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.first_name.toLocaleLowerCase().includes(search);
            })
            .map((item) => (
                {item.first_name}
                {
                  ...pinDetails,
                  author: "Jack",
                  board: "default",
                  title: document.querySelector("#pin_title").value,
                  description: document.querySelector("#pin_description").value,
                  destination: document.querySelector("#pin_destination").value,
                  pin_size: document.querySelector("#pin_size").value,
                };
            ))} */}
            </div>
          </main>
        </div>

        <div
          onClick={(event) =>
            event.target.className === "add_pin_modal"
              ? this.setState({ show_modal: false })
              : null
          }
          className="add_pin_modal_container"
        >
          {this.state.show_modal ? <Model add_pin={this.add_pin} /> : null}
          {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
        </div>
      </div>
    );
  }
}

export default UserProfile;
