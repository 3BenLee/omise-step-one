import React from 'react';
import styled from 'styled-components';

const InputButton = styled.button`
    width: 100%;
    height: 2.2rem;
    border: 2px solid #2C3A47;
    margin: auto 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    outline: none;
    border-radius: 4px;
    background-color: lightgrey;
    color: #2C3A47;
    
    &:hover {
    background: #cd6133; /*Chile Spice*/
    color: #f7f1e3;
    transition: 500ms;
  }`; 

const ValidateButton = (props) => {

    return(
        <InputButton
            onClick={props.onClick}>
            {props.title} 
        </InputButton>
    )  
}

export default ValidateButton;