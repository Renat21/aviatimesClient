import React, {useState} from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {
    const [post, setPost] = useState({email: '', password: '', username: ''})

    function addNewPost(event){
        event.preventDefault();

        const newPost = {
            ...post
        }

        create(newPost)
        
        setPost({email: '', password: '', username: ''})
    }

    return (
                <tr>
                    <th></th>
                    <th><MyInput
                value={post.email}
                onChange={event => setPost({...post, email: event.target.value})}
                type="text" 
                placeholder="Email"/></th>
                    <th><MyInput
                value={post.password}
                onChange={event => setPost({...post, password: event.target.value})}
                type="text" 
                placeholder="Пароль"/></th>
                
                <th><MyInput
                value={post.username}
                onChange={event => setPost({...post, username: event.target.value})}
                type="text" 
                placeholder="username"/></th>
                    <th><MyButton onClick={addNewPost}>Создать пользователя</MyButton></th>
                </tr>
    )
}

export default PostForm;