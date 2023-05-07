import React from 'react';

import TicketArrivalDeparture from './TicketArrivalDeparture';
import TicketStops from './TicketStops';

const TicketInfo = ticket => {

  const {
    departureDate,
    origin,
    originName,
    arrivalDate,
    destination,
    destinationName,
    stops
  } = ticket;


  const cityOrigin = origin + ', ' + originName;
  const cityDest = destination + ', ' + destinationName;
  const originTime = departureDate.split("T")[0]
  const originDate = departureDate.split("T")[1]
  const destinationTime = arrivalDate.split("T")[0]
  const destinationDate = arrivalDate.split("T")[1]

  return (
    <>
      <TicketArrivalDeparture date={originDate} time={originTime} city={cityOrigin} textAlign="left"/>
      <TicketStops stops={stops} />
      <TicketArrivalDeparture date={destinationDate} time={destinationTime} city={cityDest} textAlign="right"/>
    </>
  );
}

export default TicketInfo;
