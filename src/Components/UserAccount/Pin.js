import React, { useState } from "react";

import "./Pin.css";

// function upload_img(event, setPinImage) {
//     if (event.target.files && event.target.files[0]) {
//         if (/image\/*/.test(event.target.files[0].type)) {
//             const reader = new FileReader();

//             reader.onload = function() {
//                 setPinImage(reader.result);
//             }

//             reader.readAsDataURL(event.target.files[0]);
//         }
//     }
// }

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

function Pin(props) {
  // const [pinImage, setPinImage] = useState();

  return (
    <div className={`card card_${props.pinDetails.pin_size}`}>
      <div className="pin_title">{props.pinDetails.title}</div>

      <div className="pin_modal">
        <div className="modal_head">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share"></i>
          <i class="fa-solid fa-download"></i>
        </div>

        <div className="modal_foot">
          <div className="description">
            <span>{props.pinDetails.description}</span>
          </div>
          <div className="destination">
            <span>{`${"Owner"} ${props.pinDetails.destination}`}</span>
          </div>
          {props.pinDetails.pin_type.value === "sell" ? (
            <div className="pricing">
              <span>{`${"Price"} ${props.pinDetails.pin_type}`}</span>
            </div>
          ) : null}
          <div className="wrapper">
            <div className="cart-btn">
              <div className="icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <span>Get Product</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pin_image">
        <img
          onLoad={check_size}
          src={props.pinDetails.img_blob}
          alt="pin_image"
        />
      </div>
    </div>
  );
}

export default Pin;
