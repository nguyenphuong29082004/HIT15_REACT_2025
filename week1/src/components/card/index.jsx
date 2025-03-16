import React from "react";

const Card = ({item}) => {
    return (
        <>
        <p>Name: {item.name} </p>
        <p>Age: {item.age} </p>
        <p>Gender: {item.gender}</p>
        <br />
        </>
    )
}

export default Card