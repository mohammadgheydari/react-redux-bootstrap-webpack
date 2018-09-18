import React from "react";
import "./dynamicBox.scss";
const DynamicBox = props => {
  return (
    <div className="pt-5 pb-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 left">
            <a
              href="http://tour.flightio.com/?utm_source=homepage&amp;amp;utm_medium=dbox"
              className="DynamicBox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://flightio.com/Uploads/Contents/Dbox/flightio-summer.jpg"
                alt="flightio-tour-visa"
              />
              <h2>بهترین قیمت بلیط هواپیما</h2>
              <p>همین حالا پرواز خود را رزرو کنید</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 left">
            <a
              href="http://tour.flightio.com/?utm_source=homepage&amp;amp;utm_medium=dbox"
              className="DynamicBox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://flightio.com/Uploads/Contents/Dbox/dubai.jpg"
                alt="flightio-tour-visa"
              />
              <h2>بهترین نرخ پرواز ماهان به دبی</h2>
              <p>همین حالا پرواز خود را رزرو کنید</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 left">
            <a
              href="http://tour.flightio.com/?utm_source=homepage&amp;amp;utm_medium=dbox"
              className="DynamicBox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://flightio.com/Uploads/Contents/Dbox/visa.jpg"
                alt="flightio-tour-visa"
              />
              <h2>ارایه ویزا و تورهای مسافرتی</h2>
              <p>ویزا و تورهای فلایتیو</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 left">
            <a
              href="http://tour.flightio.com/?utm_source=homepage&amp;amp;utm_medium=dbox"
              className="DynamicBox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://flightio.com/Uploads/Contents/Dbox/image.jpg"
                alt="flightio-tour-visa"
              />
              <h2>بهترین نرخ پرواز به استانبول</h2>
              <p>حالا پرواز خود به استانبول را رزرو کنید</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBox;
