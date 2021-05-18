import React from "react";
import Contact from "../components/ContactComponent/Contact";
import Banner from "../components/BannerComponent/Banner";
const Contactus = () => {
  return (
    <React.Fragment>
      <Banner contact={true} />
      <Contact />
    </React.Fragment>
  );
};

export default Contactus;
