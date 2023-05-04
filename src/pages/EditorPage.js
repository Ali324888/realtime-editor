import React, { useState } from "react";
import Client from "../components/Client";
const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Alizee" },
    { socketId: 2, username: "John Doe" },
  ]);
  return (
    <div className="mainWrao">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img src="/logo.png" alt="alizee-logo" className="logoImage" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
      </div>
      <div className="editorWrap">Editor's code goes here...</div>
    </div>
  );
};

export default EditorPage;
