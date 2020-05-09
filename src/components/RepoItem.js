/* eslint-disable react/prop-types */
import React from "react";


const RepoItem = (props) => {
    const { name, url } = props;
    return (
        <>
            <div className="parallax" />
            <div className="context">{name}</div>
            <div className="context">{url}</div>

        </>
    );
};

export default RepoItem;