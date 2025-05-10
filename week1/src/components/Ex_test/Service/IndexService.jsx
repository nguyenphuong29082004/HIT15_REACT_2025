import React from "react";
import "./Service.scss"

function IndexService({title, description, iconService: IconService, setDark}) {
  return (
    <div className={`service__content ${setDark ? "service__content--light" : "service__content--dark"}`}>
      <div className="service__icon-wrapper">
        <IconService className="service__icon" />
      </div>
      <h3 className="service__sub-title">{title}</h3>
      <p className="service__sub-description">{description}</p>
    </div>
  );
}

export default IndexService;
