import { $authHost,$host } from ".";

const getTicketsByDate = async (after, before) =>{
    const {data}= await $authHost.get('api/ticket/dateSorted', {after, before})
    return data;
}

const getTickets = async () =>{
    const {data}= await $authHost.get('api/ticket/getAll')
    return data;
}

const getTicketById = async (id) =>{
    const {data}= await $authHost.get('api/ticket/id/' + id)
    return data;
}


const searchTicket = async (flyingFrom, flyingTo, departing, returning, adults, children, travelClass, stops) =>{
    const {data}= await $authHost.post('api/ticket/searchTickets', {flyingFrom, flyingTo, departing, returning, adults, children, travelClass, stops})
    return data;
}

export {
    getTicketsByDate, 
    getTickets, 
    searchTicket,
    getTicketById
}