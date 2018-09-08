import React from 'react';
import styled from 'styled-components';

const InputBox = styled.textarea`
    width: 30%;
    height: 80vh;
    margin: 15vh auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
`;

const Input = (props) => {

        return(
            <InputBox 
                type="text"
                onChange={props.onChange}
                value={props.value}
            />  
        )  
}

export default Input;