import styled from 'styled-components';
import media from '../Media';

export const Container = styled.div`
  background-color: ${(props) => props.setBgColor || 'transparent'};
  max-width: ${(props) => props.setWidth || '1440px'};
  margin-top: ${(props) => props.setMarTop || '8%'};
  padding-left: ${(props) => props.setPadLeft || '4.2%'};
  padding-right: ${(props) => props.setPadRight || '4.2%'};

  ${media.custom1`
   margin-top: 20%;
  `}

  ${media.mdPhPort`
   margin-top: 25%;
  `}
`;
