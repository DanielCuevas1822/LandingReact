import React from "react";
import Person from "../PersonComponent/Person";
const PeronsList = () => {
  return (
    <div id="somos" className="container list">
      <div className="row">
        <p className="list__title">Quiénes somos</p>
        <Person
          name="Marie Mortensen"
          desc=""
          image="https://randomuser.me/api/portraits/women/27.jpg"
          id="1"
        />
        <Person
          name="Natalia Soto"
          desc=""
          image="https://randomuser.me/api/portraits/women/12.jpg"
          id="2"
        />
        <Person
          name="Thomas Meyer"
          desc=""
          image="https://randomuser.me/api/portraits/men/65.jpg"
          id="3"
        />
        <Person
          name="Hunter Walker"
          desc=""
          image="https://randomuser.me/api/portraits/men/1.jpg"
          id="4"
        />
      </div>
    </div>
  );
};
export default PeronsList;
