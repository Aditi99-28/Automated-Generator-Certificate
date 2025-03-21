import React from "react";
import "./CertificatePreview.css"; // Import CSS file

const CertificatePreview = () => {
  return (
    <div className="certificate-container">
      {/* Background Image */}
      <div className="certificate-bg.png"></div>

      {/* Certificate Content */}
      <div className="certificate-content">
        <h1></h1>
        <p></p>
        <h2></h2>
        <p></p>
        <h3></h3>
      </div>
    </div>
  );
};

export default CertificatePreview;