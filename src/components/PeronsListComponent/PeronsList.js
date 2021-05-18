import React, { useContext } from "react";
import Person from "../PersonComponent/Person";
import StaticContext from "../../context/StaticContext";
const PeronsList = () => {
  const context = useContext(StaticContext);
  return (
    <div id="somos" className="container list">
      <div className="row">
        <p className="list__title">Quiénes somos</p>
        {context.map((item, index) => (
          <Person
            key={index}
            name={item.name}
            desc=""
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default PeronsList;
