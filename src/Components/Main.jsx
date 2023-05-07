import React from "react";
import {observer} from "mobx-react-lite";
import { getTickets, searchTicket, getTicketById} from "../http/ticketApi";
import { bookTicketToCard} from "../http/cardApi";

import Tickets from './Ticket/Tickets';
import Search from './Search/Search';
import { useState, useEffect } from "react";
import BookForm from "./Book/BookForm";

const Main = observer(({windowOpen, setWindowOpen}) =>{
    
    const [tickets, setTickets] = useState([])
    const [ticketPeople, setTicketPeople] = useState([1, 0])
    const [currency, setCurrency] = useState(1)
    const [ticket, setTicket] = useState({flyingFrom: '', flyingTo: '', 
		departing: '', returning: '', adults: 1, children: 0,  travelClass: 'Economy'})
    const [ticketBook, setTicketBook] = useState([])


    async function setTicketToBook(id){
        const data = await getTicketById(id);
        setTicketBook(data)
    }
    
    const openWindowForm = function(){ 
      setWindowOpen(!windowOpen);
    }
    const [stops, setStops] = useState([
        { 
          text: "Без пересадок",
          value: 0,
          checked: false
        },
        { 
          text: "1 пересадка",
          value: 1,
          checked: false
        },
        { 
          text: "2 пересадки",
          value: 2,
          checked: false
        },
        { 
          text: "3 пересадки",
          value: 3,
          checked: false
        }
      ])

    
    async function defineStops (stopsInfo) {
        
          setStops(stopsInfo)

          const stop = stopsInfo.map(item => {return item.checked});


          const data = await searchTicket(ticket.flyingFrom, ticket.flyingTo, ticket.departing, ticket.returning, 
            ticket.adults, ticket.children, ticket.travelClass, stop)

          if (data != undefined)
              setTickets([...data]);
          else
              setTickets([]);
    }

    

    function showTickets () {
        getTickets().then( data=>{
          setTickets(data);
        })
    }

    useEffect(()=>{showTickets()}, [])



    const search = async(search) => {
        try{
            const data = await searchTicket(search.flyingFrom, search.flyingTo, search.departing, 
              search.returning, search.adults, search.children, search.travelClass, [])
            console.log(data);
            if (data != undefined)
                setTickets([...data]);
            else
                setTickets([]);
        }catch(e){
            alert(e.response.data.message)
        }
    }

    const book = async(id, card) => {
      try{
          const data = await bookTicketToCard({id, card})
          console.log(data);
      }catch(e){
          alert(e.response.data.message)
      }
  }


    return (
        <div>
            <BookForm currency={currency} ticketPeople={ticketPeople} ticketBook={ticketBook} book={book} windowOpen={windowOpen} openWindowForm={openWindowForm}/>
            <Search ticket={ticket} setTicket={setTicket} searchTic={search} setTicketPeople={setTicketPeople}/>
            <Tickets setTicketToBook={setTicketToBook} openWindowForm={openWindowForm} stops={stops} setStops={defineStops} items={tickets} currency={currency} setCurrency={setCurrency} ticketPeople={ticketPeople}/>
        </div>
    );
})

export default Main;