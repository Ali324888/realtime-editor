import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const createNewId = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);

    //toaster
    toast.success("New room created successfully");
  };

  //join room and nevigate to editor page

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id & Username is required");
      return;
    }

    //redirect to editor page using navigate
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  //join room on enter
  const handleEnterInput = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo.png" alt="alizee-logo" />
        <h4 className="mainLabel">Please add your room ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleEnterInput}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleEnterInput}
          />
          <button className="btn btnJoin" onClick={joinRoom}>
            JOIN
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn" onClick={createNewId}>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with ❤️ &nbsp; by &nbsp; <a href="#">Alizee</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
