import React from "react";
import Modal from "../ModalComponent/Modal";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact" className="container contact">
        <div className="row">
          <div className="col-12 contact__container">
            <p className="contact__title">Contacto</p>
            <p className="contact__description">
              Lorem ipsum sit amet, consectetur adipiscing elit. Nunc rutrum
              ullamcpocrm mauris elefield in.
            </p>
            <p className="contact__info">
              Todos los campos con <span>*</span> son obligatorios.
            </p>
          </div>

          <div className="col-12">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/xwkwzdya"
              method="POST"
              className="row g-3"
            >
              <div className="col-12">
                <label className="form-label">Nombre completo:</label>
                <input
                  required
                  type="text"
                  name="nombre"
                  placeholder="Nombre..."
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="form-label">Email:</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="nombre.apellido@mail.com"
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="form-label">Teléfono:</label>
                <input
                  required
                  type="tel"
                  name="teléfono"
                  placeholder="Ejm: 123456789"
                  className="form-control"
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="col-12">
                <label className="form-label">Mensaje:</label>
                <textarea
                  required
                  className="form-control"
                  type="text"
                  name="mensaje"
                  placeholder="¿Qué necesitas?"
                  rows="3"
                />
              </div>
              {status === "SUCCESS" ? (
                <React.Fragment>
                  <Modal />
                  <p className="notification">Tu mensaje fue enviado.</p>
                </React.Fragment>
              ) : (
                <div className="col-12 contact__button">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              )}
              {status === "ERROR" && (
                <p className="notification warning">¡Vaya! Hubo un error.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
