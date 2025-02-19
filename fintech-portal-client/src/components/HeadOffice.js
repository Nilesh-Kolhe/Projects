import React from "react";
import "./Footer.css";

const HeadOffice = () => {
  return (
    <div className="footer-sub-section" style={{ width: "400px" }}>
      <p className="footer-heading"> Head Office </p>
      <p>
        No. 184/A, Second Floor, First Main Road, Sharadha Colony, Basaveshwara
        Nagar, Bengaluru - 560079
      </p>
      <p>
        <i className="bi bi-envelope" style={{ paddingRight: "8px" }}></i>
        <label> connect@capitalflex.org </label>
      </p>
      <p>
        <i className="bi bi-telephone" style={{ paddingRight: "8px" }}></i>
        <label>(080) - 41273280</label>
      </p>
    </div>
  );
};

export default HeadOffice;
