import React, { useState } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { useUser } from "./utils/hooks/useUser";
// import { signIn } from "./api";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {!login && (
          <SignIn setLogin={setLogin}/>
        )}
        {login && (
          <div>
            <Admin />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
