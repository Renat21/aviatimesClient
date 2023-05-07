import React from "react";
import {observer} from "mobx-react-lite";


const Card = observer((props) =>{
    
    


    return (
		<div class="cardWrap">
			<div class="card5 cardLeft">
				<h1>Авиалинии <span>{props.card.ticket.company}</span></h1>
				<div class="seat" style={{marginTop: "1.8em"}}>
				<h2>Вылет {props.card.ticket.arrivalDate.replace("T", " ").replaceAll("-", "/").slice(0, -3)}</h2>
				<span>{props.card.ticket.origin} {props.card.ticket.originName}</span>
				</div>
				<div class="seat" style={{marginTop: "1.8em"}}>
				<h2>Прилет {props.card.ticket.departureDate.replace("T", " ").replaceAll("-", "/").slice(0, -3)}</h2>
				<span>{props.card.ticket.destination} {props.card.ticket.destinationName}</span>
				</div>
				<div class="seat">
				<h2>{props.card.surname} {props.card.name} {props.card.middleName}</h2>
				<span>name</span>
				</div>
				<div class="seat">
				<h2>{props.card.ticket.luggage} кг</h2>
				<span>багаж</span>
				</div>
				<div class="time">
				<h2>{props.card.gender}</h2>
				<span>пол</span>
				</div>
				
			</div>
			<div class="card5 cardRight">
				<div class="eye"></div>
				<div class="number">
				<h3>{props.card.ticket.flight}</h3>
				<span>рейс</span>
				</div>
				<div class="barcode"></div>
			</div>
		</div>    
    );
})

export default Card;