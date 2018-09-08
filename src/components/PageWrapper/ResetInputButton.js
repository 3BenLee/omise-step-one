import React from 'react';
import styled from 'styled-components';

const ResetButton = styled.button`
    /* width: 100%;
    height: 25px;
    border: 2px solid red;
    margin: auto 0 auto 0;
    font-family: 'Montserrat', sans-serif; */
`
const ResetInputButton = (props) => {

    return(
        <ResetButton
            onClick={props.onClick}>
            Reset Input
        </ResetButton>
    )  
}

export default ResetInputButton;