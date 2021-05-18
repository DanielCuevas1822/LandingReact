import React, { useState } from "react";

const Modal = () => {
  const [isShow, setisShow] = useState(true);

  const closeModal = () => {
    setisShow(false);
  };

  return (
    <React.Fragment>
      {isShow ? (
        <React.Fragment>
          <div className="mymodal">
            <div className="contenido-modal">
              <h1>¡Gracias!</h1>
              <h3>Pronto nos pondremos en contacto contigo</h3>
              <button onClick={closeModal} className="btn btn-primary my-btn">Entendido</button>
            </div>
          </div>
          <div className="capa"></div>
        </React.Fragment>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default Modal;
