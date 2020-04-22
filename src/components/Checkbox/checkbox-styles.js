import styled from 'styled-components';
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.checked ? 'rgba(245, 195, 65, 0.80)' : 'white'};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #000;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #f5c341;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
