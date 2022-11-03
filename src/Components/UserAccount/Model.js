import React, { useState, useEffect } from "react";

import "./Model.css";
import { storage } from "../../DB/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
// import { getDownloadUrl, ref, uploadBytesResumable } from "firebase/firestore";

function upload_img(
  event,
  pinDetails,
  setPinDetails,
  setShowLabel,
  setShowModalPin,
  setImageUpload,
  imageUpload,
  setImageUrls
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
    }
  }
  // const imagesListRef = ref(storage, "Pins/");
  if (imageUpload == null) return;
  const imageRef = ref(storage, `Pins/${imageUpload.name}`);
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrls((prev) => [...prev, url]);
    });
  });
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
function check_item_type(event){
  const itemType = event.target;
}
function save_pin(pinDetails, add_pin) {
  const users_data = {
    ...pinDetails,
    author: "Jack",
    board: "default",
    title: document.querySelector("#pin_title").value,
    description: document.querySelector("#pin_description").value,
    destination: document.querySelector("#pin_destination").value,
    pin_size: document.querySelector("#pin_size").value,
  };

  add_pin(users_data);
  // uploadFile(users_data);
  // console.log(users_data);
}

function Model(props) {
  const [showLabel, setShowLabel] = useState(true);
  const [showModalPin, setShowModalPin] = useState(false);
  const [pinDetails, setPinDetails] = useState({
    author: "",
    board: "",
    title: "",
    description: "",
    destination: "",
    img_blob: "",
    pin_size: "",
  });
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "Pins/");
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);

  // const imagesListRef = ref(storage, "Pins/");
  // const uploadFile = ()=> {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `Pins/${imageUpload.name}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="add_pin_modal">
      <div className="add_pin_container">
        <div className="side" id="left_side">
          <div className="section1">
            <div className="pint_mock_icon_container">
              {/* <img src="./images/ellipse.png" alt="edit" className="pint_mock_icon" /> */}
              <i class="fa-solid fa-ellipsis" id="ellipsis-icon"></i>
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
                    {/* <img src="./images/up-arrow.png" alt="upload_img" className="pint_mock_icon" /> */}
                    <i class="fa-solid fa-arrow-down" id="up-arrow-icon"></i>
                  </div>
                  <div>Click to upload</div>
                  <div>Use high-quality image less than 10MB</div>
                </div>
              </div>

              <input
                onChange={(event) =>
                  upload_img(
                    event,
                    pinDetails,
                    setPinDetails,
                    setShowLabel,
                    setShowModalPin,
                    setImageUpload(event.target.files[0])
                  )
                }
                type="file"
                name="upload_img"
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
              <select defaultValue="Select" name="pin_size" id="pin_size">
                <option value="">Select Size</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
              <select defaultValue="Select" name="item_option" id="item_option">
                <option value="">Select Type</option>
                <option value="donate">Donate</option>
                <option value="sell">Sell</option>
              </select>
              <div
                onClick={() =>
                  save_pin(pinDetails, props.add_pin, props.uploadFile)
                }
                className="save_pin"
              >
                Save
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;

// It was for uploading the pins to the firebase
// const [progress, setProgress] = useState(0);

// const uploadFile = (file) => {
//   if (!file) return;
//   const storageRef = ref(db, `/files/${file.name}`);

//   const uploadTask = uploadBytesResumable(storageRef, file);
//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const prog = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       setProgress(prog);
//     },
//     (err) => console.log(err),
//     () => {
//       getDownloadUrl(uploadTask.snapshot.ref).then((url) => console.log(url));
//     }
//   );
// };
