import React from 'react';
import styled from 'styled-components';

import Border from '../Controls/Border';
import GroupBox from '../Controls/GroupBox/index';
import CheckGroup from '../Controls/Check/CheckGroup';
import RadioGroup from '../Controls/Radio/RadioGroup';

const SearchBar = (props) => {

   // Кнопки переключения валют
   const currencies = [
    { 
      text: "Rub",
      value: 1,
      checked: true
    },
    { 
      text: "Usd",
      value: 0.09
    },
    { 
      text: "Gbp",
      value: 3.6
    },
    { 
      text: "Eur",
      value: 0.07
    }
  ];

  // Кнопки выбора пересадок

  return(
      <Container>
        <GroupBox header="Валюта">
          <RadioGroup groupName="currency" items={currencies} onItemClick={props.setCurrency}/>
        </GroupBox>
        <GroupBox header="Количество пересадок">
          <CheckGroup setStops={props.setStops} items={props.stops} onCheckBoxClick={props.changeStops}/>
        </GroupBox>
      </Container>
    );
};


export default SearchBar;

const Container = styled.aside`
  grid-area: sidebar;

  width: 100%;
  min-width: 300px;
  max-width: 700px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  
  ${Border};
`;