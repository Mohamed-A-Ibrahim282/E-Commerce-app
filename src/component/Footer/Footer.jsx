import React from "react";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className="bg-success mt-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-sm-6 col-md-4 py-5 d-flex flex-column">
            <h4 className="fst-italic">FOLLOW</h4>
            <div className="d-flex my-2">
              <div className={style.icon}>
                <i className="fa-brands fa-facebook-f text-white"></i>
              </div>
              <div className={style.icon}>
                <i className="fa-brands fa-twitter text-white"></i>
              </div>
              <div className={style.icon}>
                <i className="fa-brands fa-linkedin-in text-white"></i>
              </div>
              <div className={style.icon}>
                <i className="fa-brands fa-youtube text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 py-5 d-flex flex-column">
            <h4 className="fst-italic">Our information</h4>
            <h6 style={{ cursor: "pointer" }}>
              <i className="fas fa-angle-right me-2"></i> About
            </h6>
            <h6 style={{ cursor: "pointer" }}>
              <i className="fas fa-angle-right me-2"></i> Contact
            </h6>
            <h6 style={{ cursor: "pointer" }}>
              <i className="fas fa-angle-right me-2"></i> Help
            </h6>
            <h6 style={{ cursor: "pointer" }}>
              <i className="fas fa-angle-right me-2"></i> FAQ
            </h6>
            <h6 style={{ cursor: "pointer" }}>
              <i className="fas fa-angle-right me-2"></i> Our team
            </h6>
          </div>

          <div className="col-md-4 py-5 d-flex flex-column align-items-center">
            <h4 className="fst-italic">Supported payment systems</h4>
            <div className={style.paymentcompany + " row g-4 mt-1"}>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment1.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment2.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment3.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment4.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment5.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment6.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment7.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div className={style.paymenting}>
                  <img
                    src={require("../../images/payment8.png")}
                    className="w-100 rounded-1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 end d-flex align-items-center justify-content-center text-white">
        <h6 className="m-0">Copyright © Your Website 2021</h6>
      </div>
    </footer>
  );
};

export default Footer;
