import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import Card from "./Card/Card";
import {usersCards} from "../http/cardApi";
import {getUserInfo, saveChanges} from "../http/userApi";
import { useState, useEffect } from "react";
const Profile = () =>{
    const [user, setUser] = useState({username:"", email: "", password: "", oldPassword: ""})
	const [cards, setCards] = useState([])
	const [error, setError] = useState("")


	async function saveChangesForm(){
		const data = await saveChanges(user)
		setError(data.data.message);
	}

	async function getInfo(){
		setCards(await usersCards())
		const data = await getUserInfo();
		setUser({username: data.data.userName, email: data.data.email, password: "", oldPassword: ""})
	}

	useEffect(()=>{
		getInfo();
	}, [])


    return (
	<div>
       <div class="container" style={{marginTop: "60px", marginBottom: "60px"}}>
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110"></img>
								<div class="mt-3">
									<h4>{user.username}</h4>
									<p class="text-secondary mb-1">{user.email}</p>
								</div>
							</div>
							<hr class="my-4"></hr>
						</div>
					</div>
				</div>
				<div class="col-lg-7">
					<div class="card">
						<div class="card-body">
						<div class="row mb-3">
							<div class="col-sm-3">
									<h6 class="mb-0"></h6>
								</div>
								<div class="col-sm-7">
									<h6 class="mb-0">{error}</h6>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Имя пользователя</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input class="form-control" value={user.username} onChange={event => setUser({...user, username: event.target.value})}></input>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input class="form-control" value={user.email} onChange={event => setUser({...user, email: event.target.value})}></input>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Новый пароль</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input class="form-control" ></input>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Повторите старый пароль</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input class="form-control" ></input>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" onClick={saveChangesForm} value="Сохранить изменения"></input>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-20">
							<div >
								<div>
									<h5 class="d-flex align-items-center mb-3">Мои билеты</h5>
									{cards.map(card => {return <Card key={card.id} card={card}/>;})}
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Profile;