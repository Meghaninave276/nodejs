import "./RightPanel.css";

const RightPanel = () => {
  return (
    <div className="right-panel">

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search Twitter" />
      </div>

      {/* Trends */}
      <div className="card">
        <h3>Trends for you</h3>

        <div className="trend">
          <span className="category">Trending worldwide</span>
          <strong>#BreakingNews</strong>
          <span className="count">10,094 Tweets</span>
        </div>

        <div className="trend">
          <span className="category">Space</span>
          <strong>Luna photography improves the discovery of the moon</strong>
          <span className="count">125K Tweets</span>
        </div>

        <div className="trend">
          <span className="category">Trending worldwide</span>
          <strong>#WorldNews</strong>
          <span className="count">6,094 Tweets</span>
        </div>

        <div className="trend">
          <span className="category">Animals</span>
          <strong>#InternationalCatDay</strong>
          <span className="count">2,757 Tweets</span>
        </div>

        <div className="show-more">Show more</div>
      </div>

      {/* Who to follow */}
      <div className="card">
        <h3>Who to follow</h3>

        <div className="follow">
          <div className="avatar">A</div>
          <div className="user">
            <strong>Andrea</strong>
            <span>@andrea</span>
          </div>
          <button>Follow</button>
        </div>

        <div className="follow">
          <div className="avatar">H</div>
          <div className="user">
            <strong>Harold</strong>
            <span>@harold</span>
          </div>
          <button>Follow</button>
        </div>

        <div className="show-more">Show more</div>
      </div>

    </div>
  );
};

export default RightPanel;
