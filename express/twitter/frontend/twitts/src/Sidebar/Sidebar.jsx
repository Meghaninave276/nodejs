import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">🐦</div>

      <div className="menu">
        <div className="item active">🏠 Home</div>
        <div className="item">🔍 Explore</div>
        <div className="item">🔔 Notifications</div>
        <div className="item">✉️ Messages</div>
        <div className="item">🔖 Bookmarks</div>
        <div className="item">👤 Profile</div>
      </div>

      <button className="tweet-btn">Tweet</button>
    </div>
  );
};

export default Sidebar;
