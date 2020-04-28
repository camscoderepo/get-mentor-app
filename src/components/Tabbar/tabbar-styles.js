import styled from 'styled-components';

export const TabbarWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    height: 100px;
    background-color: #ffffff;
    box-shadow: 0px 0px 14px rgba(121, 136, 149, 0.25);
    border-radius: 31px 31px 0px 0px;
  }
`;

export const TabbarLinks = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: 1;
  }
`;

export const MobileIconWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
