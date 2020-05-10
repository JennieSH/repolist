import React from "react";
import styled from "styled-components";
import loading from "../imgs/loading.gif";

const LoadingStyle = styled.div`
    margin-top: 25%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;


const Loading = () => (
    <LoadingStyle>
        <img src={loading} alt="loading" />
    </LoadingStyle>

);


export default Loading;