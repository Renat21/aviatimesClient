import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';


const CheckGroup = ({items, onCheckBoxClick, setStops}) => {
  
  if (!Array.isArray(items) || !items.length) // Если не был передан массив "галочек" или он пустой
    return null;

  const checkBoxes = items.map(item => 
    <Container key={item.value}>
      <CheckBox text={item.text}
                value={item.value} 
                checked={item.checked} 
                disabled={item.disabled} 
                stops={items} 
                setStops={setStops}/>
      </Container>
  );

  return (
    <Grid>
      {checkBoxes}
    </Grid>
  );
};

export default CheckGroup;

const Grid = styled.div`
  display: grid;
  
  @media screen and (max-width: 1024px) {
    & {
      // Автозаполнение чекбоксов по горизонтали
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

const Container = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 16px;
  overflow: hidden;

 // width: 300px;

  &:hover {
    background-color: #f2fcff;
  }
  

`;