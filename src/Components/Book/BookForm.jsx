import React from "react";
import {observer} from "mobx-react-lite";
import { useState, useEffect } from "react";


const BookForm = observer((props) =>{

  const [card, setCard] = useState({surname: '', name: '', 
		middleName: '', birthday: '', gender: 'male', luggage: false})

  const [luggage, setLuggage] = useState(false)

  function setLuggageForm(){
    setLuggage(!luggage)
    setCard({...card, luggage: !luggage})
  }

  function book(event){
    event.preventDefault();
    setLuggage(false)
    props.openWindowForm()

    const newCard = {
        ...card
    }

      props.book(props.ticketBook.id, newCard)
      setCard({surname: '', name: '', 
      middleName: '', birthday: '', gender: 'male', luggage: false})
    }


    if (!props.windowOpen || props.ticketBook.departureDate == undefined)
        return null;

    return (
        
  <div class="window">


    <div class="order-info">
      <div class="order-info-content">
        <h2 style={{marginTop: "20px"}}>Билет</h2>
        <div class="line"></div>
        <table class="order-table">
          <tbody>
            <tr>
              
            
            <div class="route">
               <h2>{props.ticketBook.origin}</h2>
               <svg class="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
                  <path fill="#3f32e5" d="M497.25 357v-51l-204-127.5V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V178.5L12.75 306v51l204-63.75V433.5l-51 38.25V510L255 484.5l89.25 25.5v-38.25l-51-38.25V293.25l204 63.75z"/>
               </svg>
               <h2>{props.ticketBook.destination}</h2>
            </div>
              
            </tr>
            <tr>
            <div class="details">
               <div class="item">
                  <span>Компания</span>
                  <h3>{props.ticketBook.company}</h3>
               </div>
               <div class="item">
                  <span>№ рейса</span>
                  <h3>US696912</h3>
               </div>
               <div class="item">
                  <span>Вылет</span>
                  <h3>{props.ticketBook.departureDate.replace("T", " ").replaceAll("-", "/").slice(0, -3)}</h3>
               </div>
               <div class="item">
                  <span>Из города</span>
                  <h3>{props.ticketBook.originName}</h3>
               </div>
               <div class="item">
                  <span>Прилет</span>
                  <h3>{props.ticketBook.departureDate.replace("T", " ").replaceAll("-", "/").slice(0, -3)}</h3>
               </div>
               <div class="item">
                  <span>В город</span>
                  <h3>{props.ticketBook.destinationName}</h3>
               </div>
               <div class="item">
                  <span>Ручная кладь</span>
                  <h3>включена</h3>
               </div>
               <div class="item">
                  
               </div>
            </div>
            </tr>
          </tbody>
        </table>
        <div class="line"></div>

        <div class="order-table">
          
            <div class="details">
               <div class="item">
                  <h3>Багаж</h3>
               </div>
               <div class="item">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input value={luggage} defaultChecked={luggage} onChange={event => setLuggageForm()} 
                      type="checkbox" class="checkbox"></input>
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
               </div>
            </div>
        </div>

        {luggage && <div class="details">
               <div class="item">
                  <span>Багаж до {props.ticketBook.luggage} кг </span>
               </div>
               <div class="item">
                  <h3>+{props.ticketBook.luggageCost}</h3>
               </div>
            </div>}
        <div class="line"></div>
        <div class="total">
          <span style={{float:"left"}}>
            Цена
          </span>
          <span style={{float:"right", textAlign:"right"}}>
          { (luggage ? props.ticketBook.luggageCost: 0) + Math.round((props.ticketBook.priceChild * props.ticketPeople[0] + props.ticketBook.priceAdult) * props.currency * 100) / 100}
          </span>
        </div>
</div>
</div>
        <div class="credit-info">
          <div class="credit-info-content">
            <table class="half-input-table">
              <tr >
                <td></td>
                <td style={{display: "flex", justifyContent: "right"}}>
                    <button onClick={props.openWindowForm} class="icon-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                        </svg>
                    </button>
                </td>
               </tr>
            </table>
            <table class="half-input-table">
              <tr>
                <td> Фамилия
                  <input class="input-field" 
                  value={card.surname} onChange={event => setCard({...card, surname: event.target.value})}></input>
                </td>
                <td>Имя
                  <input class="input-field" 
                  value={card.name} onChange={event => setCard({...card, name: event.target.value})}></input>
                </td>
              </tr>
            </table>
            Отчество
            <input class="input-field" 
            value={card.middleName} onChange={event => setCard({...card, middleName: event.target.value})}></input>
            <table class="half-input-table">
              <tr>
                <td> Дата рождения
                  <input class="input-field" 
                  value={card.birthday} onChange={event => setCard({...card, birthday: event.target.value})}></input>
                </td>
                <td> Пол
                <select class="input-field" id="standard-select" 
                value={card.gender} onChange={event => setCard({...card, gender: event.target.value})}>
                  <option value="male">Муж</option>
                  <option value="female">Жен</option>
                </select>
                </td>
              </tr>
            </table>
            Номер карты
            <input class="input-field"
            value={card.cardNumber} onChange={event => setCard({...card, cardNumber: event.target.value})}></input>
            Владелец карточки
            <input class="input-field" 
            value={card.cardOwner} onChange={event => setCard({...card, cardOwner: event.target.value})}></input>
            <table class="half-input-table">
              <tr>
                <td> Дата
                  <input class="input-field" 
                  value={card.date} onChange={event => setCard({...card, date: event.target.value})}></input>
                </td>
                <td>CVC
                  <input class="input-field" 
                  value={card.CVC} onChange={event => setCard({...card, CVC: event.target.value})}></input>
                </td>
              </tr>
            </table>
            <button onClick={book} class="pay-btn">Забронировать</button>

          </div>

        </div>
        
      </div>
    );
})

export default BookForm;