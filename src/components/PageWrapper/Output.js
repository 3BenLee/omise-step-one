import React from 'react';
import styled from 'styled-components';

const OutputBox = styled.textarea`
    width: 30%;
    height: 80vh;
    margin: 15vh auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
`;

const Output = (props) => {
    return(
        <OutputBox 
        type="text"
        value = {props.value}
        >
        {props.value}
        </OutputBox>
    )
}

export default Output;