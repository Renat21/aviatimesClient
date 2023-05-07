import React, {useState} from "react";
import {observer} from "mobx-react-lite";


const Search = ({searchTic, setTicketPeople, ticket, setTicket}) =>{


    function search(event){
        event.preventDefault();

        const newTicket = {
            ...ticket
        }

		setTicketPeople([ticket.adults, ticket.children]);

        searchTic(newTicket)
    }

    return (
   <div>
     <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="booking-cta">
							<h1>ЗАБРОНИРУЙТЕ СВОЙ РЕЙС СЕГОДНЯ</h1>
							<p>Планируйте свою поездку с нами. Подходит для полетов с семьей и друзьями</p>
						</div>
					</div>
					<div class="col-md-7 col-md-offset-1">
						<div class="booking-form">
							<form>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Вылет из</span>
											<input class="form-control width-control" type="text" placeholder="Город или аэропорт" 
											value={ticket.flyingFrom} onChange={event => setTicket({...ticket, flyingFrom: event.target.value})}></input>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Прилет</span>
											<input class="form-control width-control" type="text" placeholder="Город или аэропорт" 
											value={ticket.flyingTo} onChange={event => setTicket({...ticket, flyingTo: event.target.value})}></input>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Дата вылета</span>
											<input class="form-control" type="date" required 
											value={ticket.departing} onChange={event => setTicket({...ticket, departing: event.target.value})}></input>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Дата возвращения</span>
											<input class="form-control" type="date" required 
											value={ticket.returning} onChange={event => setTicket({...ticket, returning: event.target.value})}></input>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<span class="form-label">Взрослые</span>
											<select class="form-control" 
											value={ticket.adults} onChange={event => setTicket({...ticket, adults: event.target.value})}>
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<span class="form-label">Дети (0-17)</span>
											<select class="form-control" 
											value={ticket.children} onChange={event => setTicket({...ticket, children: event.target.value})}> 
												<option>0</option>
												<option>1</option>
												<option>2</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<span class="form-label">Класс обслуживания</span>
											<select class="form-control" 
											value={ticket.travelClass} onChange={event => setTicket({...ticket, travelClass: event.target.value})}>
												<option>Economy</option>
												<option>Business</option>
												<option>First</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
								</div>
								<div class="form-btn">
									<button class="submit-btn" onClick={search}>Показать билеты</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
    );
}

export default Search;