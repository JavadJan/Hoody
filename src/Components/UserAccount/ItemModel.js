import React from "react";
import "./ItemModel.css";
import img1 from "../../assets/img/image1.jpg";

function ItemModel() {
  return (
    <div className="itemModel-container">
      <div className="left-itemModel">
        <div className="img-container">
          <img src={img1} alt="" className="itemModel-image" />
        </div>
      </div>
      <div className="right-itemModel">
        <div className="sec-1">
          <div className="itemModel-icon-container">
            <div className="icons">
              <i class="fa-solid fa-ellipsis"></i>
              <i class="fa-solid fa-location-dot"></i>
              <i class="fa-solid fa-comment-dots"></i>
              <button className="cart-btn">
                Add To Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="sec-2">
          <h2 className="upload-heading-1">Uploaded By</h2>
          <h3 className="upload-heading-2">Hoody Management Team</h3>
          <div className="owner-heading">
            <i class="fa-regular fa-user"></i>
            <span>Hoody Management Team</span>
          </div>
        </div>
        <div className="sec-3">
          <div className="item-description">
            <p>
              Color pens used for different purpose like writing on paper and
              other materials.
            </p>
          </div>
        </div>
        <div className="sec-4">
          <div className="comment-heading">
            <span>2</span>
            <h3>Comments</h3>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="comment-box">
            <i class="fa-regular fa-user" id="user-icon"></i>
            <input
              type="text"
              placeholder="Add Comment"
              className="input-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModel;
