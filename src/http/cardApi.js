import { $authHost,$host } from ".";



const bookTicketToCard = async ({card, id}) =>{
    const {data}= await $authHost.post('api/card/bookTicket/' + id, {...card})
    return data;
}

const usersCards = async () =>{
    const {data}= await $authHost.get('api/card/getCards')
    return data;
}

export {
    bookTicketToCard, 
    usersCards
}