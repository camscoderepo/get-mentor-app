import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 100vh;
  @media screen and (max-width: 600px) {
    padding: 10%;
    margin-top: 25%;
    justify-content: flex-start;
  }
`;

export default PageContainer;
