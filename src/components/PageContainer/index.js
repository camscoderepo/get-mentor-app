import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: block;
  margin-bottom: 150px;
  padding: 0;
  max-width: 1440px;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    padding: 0;
    height: auto;
  }
`;

export default PageContainer;
