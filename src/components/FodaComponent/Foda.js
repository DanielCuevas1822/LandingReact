import React from "react";
const Foda = () => {
  return (
    <div className="container-fluid foda">
      <div className="container">
        <div className="row">
          <div className="triangulo"></div>
          <div className="col-12 col-md-6 foda__text d-flex flex-column justify-content-center align-items-center">
            <p className="foda__title">Fortalezas</p>
            <p className="foda__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis sodales urna et placerat. Praesent interdum odio nisl, et
              interdum mi faucibus id. Ut a tellus ac quam auctor cursus. In
              consequat sapien turpis, vel ullamcorper nunc lacinia vel. Vivamus
              elit erat, finibus at tellus in, mattis tincidunt lorem.
            </p>
          </div>
          <div className="col-12 col-md-6 foda__text d-flex flex-column justify-content-center align-items-center">
            <p className="foda__title">Debilidades</p>
            <p className="foda__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis sodales urna et placerat. Praesent interdum odio nisl, et
              interdum mi faucibus id. Ut a tellus ac quam auctor cursus. In
              consequat sapien turpis, vel ullamcorper nunc lacinia vel. Vivamus
              elit erat, finibus at tellus in, mattis tincidunt lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Foda;
