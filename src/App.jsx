import { useState, useEffect } from "react";
import "./App.css";

import firebase from "./Firebase/config";

import Main from "./Components/Main";
import Login from "./SignIn/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return <div className="app">{user ? <Main user={user} /> : <Login />}</div>;
}

export default App;
