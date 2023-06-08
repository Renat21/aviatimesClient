import React from "react";
import { getAllUsers } from "../http/userApi";
import { useState, useEffect } from "react";
import PostList from "../Components/PostList";
import { createUser, deleteUser, updateUser} from "../http/userApi";

const AdminPanel = () => {

    const [users, setUsers] = useState([])

    function showUsers () {
        getAllUsers().then( data=>{
            setUsers(data)
            console.log(data);
        })
    }

    useEffect(()=>{showUsers()}, [])


    const createPost = async(newPost) => {
        try{
            const data = await createUser(newPost.email, newPost.password, newPost.username)
            setUsers([...users, data])
        }catch(e){
            alert(e.response.data.message)
        }
    }

    const removePost = async(post) =>{
        try{
            const data = await deleteUser(post.id)
            setUsers(users.filter(p => p.id !== post.id))
        }catch(e){
            alert(e.response.data.message)
        }
    }

    const changePost = async(post) =>{
        try{
            const data = await updateUser(post)
            console.log(data.id);

            setUsers([...users.filter(p => p.id !== data.id), data])
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return (
        
        <div style ={{minHeight: "90vh", display: "flex",
        justifyContent: "center"}}  className="posts">
            <div>
            {users.length !== 0 
                ? <PostList create={createPost} remove={removePost} change={changePost} posts={users} title="Список пользователей"/>
                : <h1 style={{textAlign: 'center'}}>
                    Не найдены
                </h1>
            }
            </div>
        </div>
    )
}

export default AdminPanel;
