import React, {useState, useEffect} from "react";
import axios from "axios";

function ListPages () {
    const [posts, setPosts] = useState ([]);

    const getPosts =( ) => {
        axios.get ('http://localhost:3001/posts').then((res)=>{
            setPosts(res.data);
            
        })
    }
    useEffect(() => {
        getPosts();
    }, []);
   
    

    return (
        <div>
           <h1>user</h1>
           {posts.map(post => {
               return (
                   
                   <div className="card mb-3" key={post.id}>
                       <div className="card-body">
                       ID:{post.id}&nbsp;&nbsp; 
                       PASSWORD:{post.password}
                           </div>
                   </div>
               );
           })}
        </div>
    );
}
export default ListPages;