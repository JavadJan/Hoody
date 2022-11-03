import React, { useState } from "react";

import "./ModelTest.css";
import { storage } from "../../DB/firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Logo from "../../assets/logo1.png";

function upload_img(
  event,
  pinDetails,
  setPinDetails,
  setShowLabel,
  setShowModalPin
) {
  if (event.target.files && event.target.files[0]) {
    if (/image\/*/.test(event.target.files[0].type)) {
      const reader = new FileReader();

      reader.onload = function () {
        setPinDetails({
          ...pinDetails,
          img_blob: reader.result,
        });
        setShowLabel(false);
        setShowModalPin(true);
      };

      reader.readAsDataURL(event.target.files[0]);
      //   handleChangeToFirebaseStorage(event);
    }
  }
}

function check_size(event) {
  const image = event.target;

  image.classList.add("pin_max_width");

  if (
    image.getBoundingClientRect().width <
      image.parentElement.getBoundingClientRect().width ||
    image.getBoundingClientRect().height <
      image.parentElement.getBoundingClientRect().height
  ) {
    image.classList.remove("pin_max_width");
    image.classList.add("pin_max_height");
  }

  image.style.opacity = 1;
}

// function check_type(e) {
//   const productType = e.target;
//   productType.classList.add("pricing");
//   if (productType.value === "sell") {
//     productType.classList.add("pricing");
//   }
// }

function save_pin(pinDetails, add_pin) {
  const users_data = {
    ...pinDetails,
    author: "Jack",
    board: "default",
    title: document.querySelector("#pin_title").value,
    description: document.querySelector("#pin_description").value,
    destination: document.querySelector("#pin_destination").value,
    pin_type: document.querySelector("#pin_type").value,
    pin_size: document.querySelector("#pin_size").value,
  };

  add_pin(users_data);
}

function Model(props) {
  const [pinDetails, setPinDetails] = useState({
    author: "",
    board: "",
    title: "",
    description: "",
    destination: "",
    img_blob: "",
    pin_type: "",
    pin_size: "",
  });
  const [showLabel, setShowLabel] = useState(true);
  const [showModalPin, setShowModalPin] = useState(false);
 
  // progress
  const [progress, setProgress] = useState(0);
  // State to store uploaded file
  const [imageUploadToFirebase, setImageUploadToFirebase] = useState("");

  // Handles input change event and updates state
  function handleChangeToFirebaseStorage(event) {
    setImageUploadToFirebase(event.target.files[0]);
  }
  const handleImageUpload = () => {
    if (!imageUploadToFirebase) {
        alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${imageUploadToFirebase.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, imageUploadToFirebase);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setProgress(progress);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        }
    );
};

  return (
    <div className="add_pin_modal">
      <div className="add_pin_container">
        <div className="side" id="left_side">
          <div className="section1">
            <div className="pint_mock_icon_container">
              <img className="model-logo" src={Logo} alt="" />
            </div>
          </div>

          <div className="section2">
            <label
              htmlFor="upload_img"
              id="upload_img_label"
              style={{
                display: showLabel ? "block" : "none",
              }}
            >
              <div className="upload_img_container">
                <div id="dotted_border">
                  <div className="pint_mock_icon_container">
                    <i class="fa-solid fa-upload" id="up-arrow-icon"></i>
                  </div>
                  <div>Click to upload</div>
                  <div>Use high-quality image less than 10MB</div>
                </div>
              </div>

              <input
                onChange={(event) => {
                  upload_img(
                    event,
                    pinDetails,
                    setPinDetails,
                    setShowLabel,
                    setShowModalPin
                  );
                  handleChangeToFirebaseStorage(event, pinDetails);
                }}
                type="file"
                name="upload_img"
                accept="image/*"
                id="upload_img"
                value=""
              />
            </label>

            <div
              className="modals_pin"
              style={{
                display: showModalPin ? "block" : "none",
              }}
            >
              <div className="pin_image">
                <img
                  onLoad={check_size}
                  src={pinDetails.img_blob}
                  alt="pin_image"
                />
              </div>
            </div>
          </div>

          <div className="section3">
            <div className="save_from_site">Save from site</div>
          </div>
        </div>

        <div className="side" id="right_side">
          <div className="section1">
            <div className="select_size">
              {/* For selecting the layout of the product within three sizes */}
              <select defaultValue="Select" name="pin_size" id="pin_size">
                <option value="">Select Size</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
              {/* For selecting weather the product is for donation or sell  */}
              <select defaultValue="Select" name="pin_type" id="pin_type">
                <option value="">Select Type</option>
                <option value="donate">Donate</option>
                <option value="sell">Sell</option>
              </select>
              <div
                onClick={() => {save_pin(pinDetails, props.add_pin); handleImageUpload();}}
                className="save_pin"
              >
                Save
              </div>
              <p>{progress} "% done"</p>
            </div>
          </div>

          <div className="section2">
            <input
              placeholder="Add your item"
              type="text"
              className="new_pin_input"
              id="pin_title"
            />
            <input
              placeholder="Tell everyone what your item is about"
              type="text"
              className="new_pin_input"
              id="pin_description"
            />
            <input
              placeholder="Add your name"
              type="text"
              className="new_pin_input"
              id="pin_destination"
            />
            {pinDetails.pin_type.value === "sell" ? (
              <input
                placeholder="Max price = 50 $, & Min price = 10 $"
                type="text"
                className="new_pin_input"
                id="pin_pricing"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
