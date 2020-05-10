/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Context = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    font-size: 48px;
    font-weight: bold;
    
    p{
        font-size: 20px;
        font-weight: normal;
        margin: 20px 0;
    }

    a{
        text-decoration:none;
        color: #3e3d37;
        background-color: #b5b3ab;
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: normal;
        &:hover{
            background-color: #3e3d37;
            color:#b5b3ab;
        }
    }
`;

const RepoItem = (props) => {
    const { name, url, description } = props;
    const [parallaxOffset, setparallaxOffset] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offset = window.pageYOffset;
            setparallaxOffset(-offset * 0.75);
        }, [parallaxOffset]);
    });
    return (
        <>
            <Context className="context" id="parallax" style={{ backgroundPositionY: `${parallaxOffset}px` }} />
            <Context className="context">
                <div>{name}</div>
                <p>{description}</p>
                { url && <a href={url}>Go</a> }
            </Context>
        </>
    );
};

export default RepoItem;