import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import auth from "../firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const GoogleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result)
        setUser(result.user)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <h1>Simple Dimple Fire base</h1>
      <button onClick={handleGoogleSignIn}>Login With Google</button>
      {
        user && <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </>
  );
}

export default App;
