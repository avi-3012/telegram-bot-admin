import React from "react";
import "./index.css";
// import { useUser } from "../../utils/hooks/useUser";
import Counter from "./components/counter";
import UserList from "./components/userList";
import BotSettings from "./components/botSettings";

const Admin = () => {
//   const { user } = useUser();
//   const [name, setName] = React.useState(user.name);
  const [counter, setCounter] = React.useState(0);
  const [BlockedUsers, setBlockedUsers] = React.useState(0);

  const handleLogOut = () => {
    localStorage.removeItem("key");
    window.location.reload();
  }
  
  return (
    <div className="container">
      <div className="header">
        <div className="title">Admin Panel</div>

        <div className="account">
          <div className="name" onClick={()=>handleLogOut()}>
            LOG OUT
          </div>
        </div>
      </div>
      <div className="container-body">
        <div className="container-body-left">
          <Counter counter={counter} blocked={BlockedUsers}/>
          <BotSettings />
        </div>
        <div className="container-body-right">
          <UserList setCounter={setCounter} setBlocked={setBlockedUsers}/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
