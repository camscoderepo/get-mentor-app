import React, { useState } from 'react';
import { TextAreaContainer } from './text-area-styles';

const TextAreaFloatLabel = ({
  name,
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const renderLabel = () => label && <label>{label}</label>;

  const isFocused = focused || String(value).length;

  return (
    <TextAreaContainer focused={isFocused}>
      {renderLabel()}
      <textarea
        name={name}
        value={value}
        type={type}
        onChange={(e) => onChange(e)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={(ref) => setRef(ref)}
        {...props}
      />
    </TextAreaContainer>
  );
};
TextAreaFloatLabel.defaultProps = {
  type: 'text',
  label: '',
  onChange: (text) => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};

export default TextAreaFloatLabel;
