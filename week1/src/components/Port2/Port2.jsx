import React, { useEffect, useState } from 'react'
import axios from "axios"

function Port2() {
  const[title, setTitle] = useState("");
  const[post, setPost] = useState([]);
  const tabs = ["posts","comments","albums"];
  const [type, setType] = useState("posts"); // mac dinh posts

  useEffect(() => {
    const fetchPost = async () =>{
      try{
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${type}`
        );
        setPost(response.data);
      }catch(error){
        console.error("Loi khi fetch du lieu", error);
      }
    };
    fetchPost();
  },[type]);
  return (
    <div>
      {
        tabs.map((tab) =>(
          <button key={tab}
          onClick={() => setType(tab)}
          >
            {tab}
          </button>
        )
      )
      }
      <input type="text" value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <p>Port2 Hello</p>
      {console.log("re-render")}
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title} {posts.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Port2