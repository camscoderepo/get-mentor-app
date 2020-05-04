import React, { useState } from 'react';
import { FieldContainer, Title, CrossIcon } from './tags-ui-styles';
import Cross from '../../assets/images/cross.png';

const Title = (props) => {
  return (
    <Title>
      <span>{props.title.text}</span>
      <CrossIcon
        src={Cross}
        onClick={() => console.log('icon clicked')}
      ></CrossIcon>
    </Title>
  );
};

const TagInput = () => {
  return <div></div>;
};

const TagsUi = () => {
  return <FieldContainer></FieldContainer>;
};
export default TagsUi;
