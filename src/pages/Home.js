import React from "react";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo.png" alt="alizee-logo" />
        <h4 className="mainLabel">Please add your room ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn btnJoin">JOIN</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with ❤️ &nbsp; by <a href="#">Alizee</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
