import React from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";


const PostList = function({posts, title, remove, create, change}){
    return (
        <div>
            <table>
                <thead>
                    <PostForm create={create}/>
                    <tr>
                        <th>№</th>
                        <th>Email</th>
                        <th>Пароль</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map ((post, index) => 
                                <PostItem remove={remove} change={change} post={post} key={post.id}/>
                                )}
                </tbody>

            </table>
        </div>
    )
}

export default PostList;