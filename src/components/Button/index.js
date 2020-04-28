import React from 'react';
import Loader from '../Loader';
import { StyledButton } from './button-styles';
const Button = ({
  primary,
  big,
  inverse,
  loading,
  children,
  hidemobile,
  hidedesktop,
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      big={big}
      inverse={inverse}
      hidedesktop={hidedesktop}
      hidemobile={hidemobile}
      {...props}
    >
      {loading ? <Loader small white /> : children}
    </StyledButton>
  );
};
export default Button;
