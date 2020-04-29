import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  padding: 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export default PageContainer;
