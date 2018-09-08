import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: #2C3A47; /*Navy*/
  position: absolute;
  text-align: center;`
  /* text-align: center; */

const Title = styled.h1`
  font-size: 3.5rem;
  color: #cd6133;
  margin: 0 auto;
  `;


const PageHeader = (props) => {
    return(
      <TitleWrapper>
        <Title>JSONATOR</Title>  
      </TitleWrapper>
    )
}

export default PageHeader;