import React from 'react';
import styled from 'styled-components';

const ResetButton = styled.button

const ResetInputButton = (props) => {

    return(
        <ResetButton
            onClick={props.onClick}>
            Reset Input
        </ResetButton>
    )  
}

export default ResetInputButton;