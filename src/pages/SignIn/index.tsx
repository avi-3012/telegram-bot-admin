import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { signIn } from "../../api";
import { useUser } from "../../utils/hooks/useUser";

const SignIn = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user, setUserInStore } = useUser();
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  const setKey = React.useCallback(async ({credential}:CredentialResponse) => {
    if(!credential) return;
    localStorage.setItem("key", credential);
    const response = await signIn(credential);
    setUserInStore(response.data);
  }, [setUserInStore]);

  useEffect(() => {
    if (user.name) {
      console.log(user);
      setLogin(true);
    }
  }, [user, setLogin]);

  useEffect(() => {
    const key = localStorage.getItem("key");
    if (key) {
      setKey({credential:key});
    }
  }, [setKey]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Admin Panel
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >

      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin onSuccess={setKey} onError={console.error} />
      </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default SignIn;
