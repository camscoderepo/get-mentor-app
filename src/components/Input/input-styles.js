import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 5px; */
  position: relative;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  padding-left: 20px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
`;

export const Input = styled.input`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 30px;
  text-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15); */
  color: #000;
  flex: 1 1 auto;
  order: 2;
  /* padding: 10px; */

  &:focus {
    outline: 0;
  }

  &:not(:focus) {
    color: transparent;
  }

  &:focus + ${Label} {
    color: #3949ab;
    opacity: 1;
    transform: scale(0.8) translate3d(0, 5px, 0);
  }
`;
