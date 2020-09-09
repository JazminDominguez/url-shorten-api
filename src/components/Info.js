import React from "react";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

const Info = () => {
  return (
    <section className="info-container">
      <h2>Advance Statistics</h2>
      <p>
        Track how your links are performing across the web with
        <span> our advanced statistics dashboard.</span>
      </p>
      <div className="cards-container">
        <div className="card brand-recognition">
          <h3>Brand Recognition</h3>
          <p>
            Boost your band recognition with each click. Generic links don&#39;t
            mean a thing. Branded links help instil confidence in your content
          </p>
          <div className="info-icon">
            <img src={brandRecognition} alt="chart" />
          </div>
        </div>
        <div className="card detailed-records">
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
          <div className="info-icon">
            <img src={detailedRecords} alt="chart" />
          </div>
        </div>
        <div className="card fully-customizable">
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement
          </p>
          <div className="info-icon">
            <img src={fullyCustomizable} alt="chart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
