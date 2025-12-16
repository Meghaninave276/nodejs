import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [title,setTitle]=useState("");
  const [twitts,setTwitts]=useState("");
const [tweets, setTweets] = useState([])


  const handlesubmit=()=>{
     axios.get("http://localhost:3400").then((res)=>setTweets(res.data));
   


  }
  const handlepost=async()=>{
     const newtweet={
      id:Date.now(),
      title:title,
      twitts:twitts,

    }
    await axios.post("http://localhost:3400",newtweet);
    setTweets(prev=>[...prev,newtweet]);
    setTitle("");
    setTwitts("")
   

  }

  const handledelete=async()=>{
    await axios.delete("http://localhost:3400",{
       params: { title: title }
    })
    setTweets(prev=>prev.filter((t)=>t.title!==title))
     

  }
  

  return (
    <>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter a title'/>
    <input type="text" value={twitts} onChange={(e)=>setTwitts(e.target.value)} placeholder='whats happening' />
      <button onClick={handlesubmit}>fetch</button>
      <button onClick={handlepost}>post</button>
      <hr />
      
     <div>
      {
         tweets.map((t,i)=>(
          <div key={i}>
            <h3>title:{t.title}</h3>
          <p>twit:{t.twitts}</p>
          <button onClick={()=>handledelete(t.title)}>delete</button>
          </div>
         )
      )}
     </div>

    </>
  )
}

export default App;
