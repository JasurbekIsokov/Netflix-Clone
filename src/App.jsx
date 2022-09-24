import { useState, useEffect } from "react";
import "./App.css";

import firebase from "./Firebase/config";

import Main from "./Components/Main";
import Login from "./SignIn/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // firebase orqali auth bo'ladi va kelgan datani setUserga berib yubordik
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  // Agar user auth qilgan bo'lsa Main componentga o'tdi aks holda Loginda turaveradi
  return <div className="app">{user ? <Main user={user} /> : <Login />}</div>;
}

export default App;
