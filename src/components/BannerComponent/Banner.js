import React from "react";
const Banner = (props) => {
  const iscontact = props.contact;
  return (
    <div className="container-fluid banner">
      <div className="container">
        {iscontact ? (
          <div></div>
        ) : (
          <div className="banner__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
