import React from 'react';
import "./ContentSession.scss";
import { FiActivity } from "react-icons/fi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import ContentSession from './ContentSession';
// import ContentSession from "./ContentSession";

function IndexCs({setAdd}) {
  return (
    <>
      <div className="csession">
        <ContentSession 
        titleCsession="Lorem Ipsum"
        desCsession="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        iconCsession={FiActivity}
        setDark={setAdd}
      />
      <ContentSession 
        titleCsession="Sed ut perspici"
        desCsession="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        iconCsession={BsBoundingBoxCircles}
        setDark={setAdd}
      />
      <ContentSession 
        titleCsession="Lorem Ipsum"
        desCsession="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        iconCsession={BsCalendar4Week}
        setDark={setAdd}
      />
      </div>
      
    </>
  );
}

export default IndexCs;