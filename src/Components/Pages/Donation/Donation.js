import React from "react";
import "./Donation.css";
import { DonationObj } from "./DonationObj";
import data from "./countries.json";
import logo from '../../../assets/logo1.png'
function Donation() {
  
    
  return (
    <div className="donation-section" id="donation">

        <div className="donation-content">
      <div className="section-content">
       
            <img src={logo} alt="" className="logoD"/>
      
        <h1>DONATION FORM</h1>
        <h3>MAKE OUR WORLD ONE STEP FURTHER THROUGH SHARING WHAT WE HAVE</h3>
      </div>
      <div className="donation-form">
        <div className="dot-part">

            <h5>Personal Details</h5>

<div className="dot-part-form">
          {DonationObj.map((donation, index) => {
            if (index < 4) {
              return (
                <div className="PRT" key={index} id={donation.index}>
                  <label htmlFor="">{donation.label}</label>
                  <input
                    type={donation.type}
                    placeholder={donation.placeHolder}
                  />
                </div>
              );
            }
          })}

          <div className="PRT">
            <label htmlFor="">Country</label>
            <select name="country" id="">
              <option disabled selected >
                Select a country
              </option>

              {data.map((country) => {
                return <option>{country.name}</option>;
              })}
            </select>
          </div>

          {DonationObj.map((donation, index) => {
            if (index > 3) {
              return (
                <div className="PRT" key={index} id={donation.index}>
                  <label htmlFor="">{donation.label}</label>
                  <input
                    type={donation.type}
                    placeholder={donation.placeHolder}
                  />
                </div>
              );
            }
          })}
        </div>

      
        </div>

<div className="dot-part">
<h5>Donation Details</h5>
        <div className="dot-part-form">
            
            <div className="PRT">
                <label htmlFor="">Donation type</label>
                <select name="donationType" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div className="PRT">
                <label htmlFor="">Amount</label>
                <input type="number" name="" id="" placeholder="2000 $" />
            </div>
        </div>
        


        <button className="donateBtn">
            Donate
        </button>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Donation;
