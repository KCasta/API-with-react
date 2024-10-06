import React from "react";
import "./index.css";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Directory</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;
