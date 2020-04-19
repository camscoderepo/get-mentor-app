import React, { useState } from 'react';
import { FormWrapper } from './form-styles';

const ShowPasswordForm = () => {
  const [isVisible, setIsVisable] = useState(false);
  return (
    <div>
      <FormWrapper></FormWrapper>
    </div>
  );
};

export default ShowPasswordForm;
