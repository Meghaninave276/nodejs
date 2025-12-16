import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

import Sidebar from "../Sidebar/Sidebar";
import RightPanel from "../RightPanel/RightPanel";
import "./Thome.css";

function Thome() {
  const [title, setTitle] = useState("");
  const [twitts, setTwitts] = useState("");
  const [tweets, setTweets] = useState([]);
  const [editId, setEditId] = useState(null);
const USER = {
  name: "John Doe",
  username: "@johndoe",
  avatar: "https://i.pravatar.cc/150?img=5"
};

  useEffect(() => {
    axios.get("http://localhost:3400").then(res => setTweets(res.data));
  }, []);

  const handlePost = async () => {
    const newTweet = {
      id: Date.now(),
      title,
      twitts,
    };
    await axios.post("http://localhost:3400", newTweet);
    setTweets([newTweet, ...tweets]);
    setTitle("");
    setTwitts("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3400/${id}`);
    setTweets(tweets.filter(t => t.id !== id));
  };

  const startEdit = (tweet) => {
    setEditId(tweet.id);
    setTitle(tweet.title);
    setTwitts(tweet.twitts);
  };

  const handleUpdate = async () => {
    const updated = { id: editId, title, twitts };
    await axios.put("http://localhost:3400", updated);
    setTweets(tweets.map(t => (t.id === editId ? updated : t)));
    setEditId(null);
    setTitle("");
    setTwitts("");
  };

  return (
<div className="layout">
      <Sidebar />

      <div className="feed">
        <div className="feed-header">
          <h2>Home</h2>
        </div>

        <div className="tweet-box">
          <input
            value={title} 
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={twitts} className="mt-2"
            onChange={e => setTwitts(e.target.value)}
            placeholder="What's happening?"
          />
          <button onClick={editId ? handleUpdate : handlePost}>
            {editId ? "Update" : "Tweet"}
          </button>
        </div>

        {tweets.map(t => (
  <div className="tweet-card" key={t.id}>
    
    {/* Avatar */}
    <img src={USER.avatar} className="tweet-avatar" alt="dp" />

    <div className="tweet-body">
      <div className="tweet-header">
        <div className="user-info">
          <span className="name">{USER.name}</span>
          <span className="username">{USER.username}</span>
        </div>

        <div className="tweet-actions">
          <FaEdit
            className="icon edit"
            onClick={() => startEdit(t)}
          />
          <FaTrash
            className="icon delete"
            onClick={() => handleDelete(t.id)}
          />
        </div>
      </div>

      <h4 className="tweet-title">{t.title}</h4>
      <p className="tweet-text">{t.twitts}</p>
    </div>

  </div>
))}

      </div>

      <RightPanel />
    </div>
  );
}

export default Thome;
