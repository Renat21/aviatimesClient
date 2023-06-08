import React, {useState} from "react";

import MyButton from "./UI/buttons/MyButton";
import MyInput from './UI/input/MyInput';

const PostItem = function (props){

  const [changing, setChanging] = useState(false)
  const [post, setPost] = useState(props.post)


  function changePost(event){
    event.preventDefault();
    if (changing) {
      props.change(post)
      setChanging(false) 
    }
    else {
      setChanging(true)
    }
  }
    return (
            <tr>
              <td>{props.post.id}.</td>
              <td>
              {!changing?
                props.post.email: 
                <MyInput
                  value={post.email}
                  onChange={event => setPost({...post, email: event.target.value})}
                  type="text" 
                  placeholder="Email"/>}
              </td>
              <td>
              {!changing?
                props.post.password: 
                <MyInput
                  value={post.password}
                  onChange={event => setPost({...post, password: event.target.value})}
                  type="text" 
                  placeholder="Password"/>}
              </td>
              <td>
              {!changing?
                props.post.username: 
                <MyInput
                  value={post.username}
                  onChange={event => setPost({...post, username: event.target.value})}
                  type="text" 
                  placeholder="username"/>}
              </td>
              <td>
                <div className="post__btns">
                  <MyButton onClick={()=>props.remove(props.post)} key={props.post.id}>Удалить</MyButton>
                </div>
                {/* <div className="post__btns">
                  <MyButton onClick={changePost} key={props.post.id + 1}>Изменить</MyButton>
                </div> */}
              </td>
            </tr>
      
    );
}

export default PostItem;