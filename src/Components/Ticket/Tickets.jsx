import React from 'react';
import styled from 'styled-components';

import Ticket from '.';
import SearchBar from './SearchBar';

const Tickets = props => {

  let ticketsTemplate;
 
  if (props.items.length)
    ticketsTemplate = props.items.map(item => {

      return <Ticket setTicketToBook={props.setTicketToBook} openWindowForm={props.openWindowForm} {...item} key={item.id} currency={props.currency} ticketPeople={props.ticketPeople} />;
    });
  else
    ticketsTemplate = <NotFindText>К сожалению, билеты не найдены</NotFindText>;

  return (
    <Searchs>
       <SearchBar stops={props.stops} setCurrency={props.setCurrency} setStops={props.setStops}/>
      <Container>
        {ticketsTemplate}
      </Container>
    </Searchs>
  );
};


export default Tickets;


const Container = styled.div`
  grid-area: tickets;

  width: 100%;

  // Разположение билетов по центру горизонтали
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
`;

const NotFindText = styled.span`
  color: #4a4a4a;
  font-size: 32px;
  margin-top: 20px;
`;

const Searchs = styled.main`
  display: grid;
  grid-template-areas:
    "sidebar tickets";
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  grid-gap: 5px 20px;

  height: 100%;
  max-width: 1024px;
    
  margin: 0 auto;

  margin-top:60px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 1px rgba(91, 137, 164, 0.25);
  
  padding: 30px;

  @media screen and (max-width: 1024px) {

    // Меняем расположение панели фильтрации и списка билетов с вертикального на горизонтальное
    & {
      grid-template-areas:
      "sidebar"
      "tickets";
      grid-template-rows: auto 1fr; // Высота панели фильтрации устанавливается в зависимости от содержимого
      grid-template-columns: 1fr;
      grid-gap: 5px 5px;
    }
  }
`;