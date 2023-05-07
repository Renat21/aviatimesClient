import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButton from './RadioButton';


const RadioGroup = ({groupName, items, onItemClick}) => {
  
  if (!Array.isArray(items) || !items.length) // Если не был передан массив кнопок или он пустой
    return null;


  const buttons = items.map(item => 
    <RadioButton key={item.value} 
                text={item.text} 
                group={groupName} 
                value={item.value} 
                click={onItemClick} 
                isChecked={item.checked} 
                isDisabled={item.disabled}/>
  );

  return (
    <Container>
      {buttons}
    </Container>
  );
};

export default RadioGroup;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  min-width: 270px;
  width: 70%;
  padding: 4px 16px;
  margin: 0 auto 16px;
`;