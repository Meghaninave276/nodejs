import { useEffect, useState } from "react";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [username, setUsername] = useState("");
  const [tweet, setTweet] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Fetch all tweets
  const fetchTweets = async () => {
    const res = await fetch("/api/tweets");
    const data = await res.json();
    setTweets(data.reverse());
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  // Add or Update tweet ONLY on button click
  const submitTweet = async () => {
    if (!tweet) {
      alert("Tweet cannot be empty");
      return;
    }

    if (editingId) {
      // UPDATE TWEET
      await fetch(`/api/tweets/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tweet })
      });

      setTweets(prev =>
        prev.map(t =>
          t.id === editingId ? { ...t, tweet, edited: true } : t
        )
      );

      setEditingId(null);
    } else {
      // ADD TWEET
      if (!username) {
        alert("Username is required");
        return;
      }

      const res = await fetch("/api/tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, tweet })
      });

      const newTweet = await res.json();
      setTweets(prev => [newTweet, ...prev]);
    }

    setTweet("");
  };

  // Delete tweet
  const deleteTweet = async (id) => {
    await fetch(`/api/tweets/${id}`, { method: "DELETE" });
    setTweets(prev => prev.filter(t => t.id !== id));
  };

  // Edit tweet
  const editTweet = (t) => {
    setEditingId(t.id);
    setTweet(t.tweet);
  };

  return (
    <div className="container">
      <h2>Mini Twitter</h2>

      <div className="tweet-box">
        {!editingId && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}

        <textarea
          placeholder="What's happening?"
          value={tweet}
          maxLength={280}
          onChange={(e) => setTweet(e.target.value)}
        />

        <div className="count">{tweet.length}/280</div>

        <button onClick={submitTweet}>
          {editingId ? "Update Tweet" : "Tweet"}
        </button>
      </div>

      {tweets.map(t => (
        <div className="tweet" key={t.id}>
          <strong>@{t.username}</strong>
          <p>{t.tweet}</p>
          <small>
            {new Date(t.createdAt).toLocaleString()}
            {t.edited && " • Edited"}
          </small>
          <div>
            <button onClick={() => editTweet(t)}>Edit</button>
            <button onClick={() => deleteTweet(t.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
