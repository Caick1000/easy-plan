import React from "react";

const Header = (props) => {
    return (
        <>
            <h1 className="h1-header">{props.title? props.title : null}</h1>
            <p>{props.description ? props.description : null}</p>
        </>
    )
}

export default Header