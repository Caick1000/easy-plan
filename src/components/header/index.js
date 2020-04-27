import React from "react";

const Header = (props) => {
    const { title, description } = props;
    return (
        <>
            <h1 className="h1-header">{title ? title : null}</h1>
            <p className="header-description">{description ? description : null}</p>
        </>
    )
}

export default Header