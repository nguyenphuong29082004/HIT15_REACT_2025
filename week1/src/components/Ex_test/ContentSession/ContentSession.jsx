import React from 'react';
import "./ContentSession.scss"

function ContentSession({ titleCsession, desCsession, iconCsession: IconCsession, setDark }) {
  return (
    <div className="csession__wrapper">
      <div className={`csession__sub-container ${setDark ? "csession__sub-container--light" : "csession__sub-container--dark"}`}>
        <div className="csession__icon-wrapper">
          <IconCsession className="csession__icon" />
        </div>
        <div className="csession__title-wrapper">
          <h4 className="csession__title-csession">{titleCsession}</h4>
          <p className="csession__description-csession">{desCsession}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSession;