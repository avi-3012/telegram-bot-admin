import React from "react";
import {
  getUsers,
  deleteSubscribedUser,
  blockUser,
  unblockUser,
  getBlockedUsers,
} from "../../../../api";
import "./index.css";

interface User {
  user: string;
  user_id: string;
}
const UserList = ({ setCounter, setBlocked }: { setCounter: any, setBlocked:any }) => {
  const [users, setUsers] = React.useState<User[]>();
  const [BlockedUsers, setBlockedUsers] = React.useState<string[]>([]);

  React.useEffect(() => {
    const token = localStorage.getItem("key");
    if (!token) return;
    const getUsersList = async () => {
      const response = await getUsers(token);
      setUsers(response.data);
      if (response.data.length === 0) return;
      setCounter(response.data.length);
      console.log(response.data);
    };
    getUsersList();
  }, [setCounter, BlockedUsers]);

  const handleDelete = async (e: any) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    const token = localStorage.getItem("key");
    if (!token) return;
    const user_id = (e.target as HTMLDivElement).parentElement?.children[1]
      .innerHTML;
    if (!user_id) return;
    const response = await deleteSubscribedUser(token, user_id);
    console.log(response);
    const getUsersList = async () => {
      const response = await getUsers(token);
      setUsers(response.data);
      setCounter(response.data.length);
      console.log(response.data);
    };
    getUsersList();
  };

  const checkUser = (id: any) => {
    console.log(id);
    try {
      BlockedUsers.forEach((user: any) => {
        if (user.toString() === id.toString()) {
          console.log("true");
          throw new Error("User blocked");
        } else {
        }
      });
    } catch (error) {
      console.log(error);
      return true;
    }
    return false;
  };
  async function GetBlockedUsers() {
    const token = localStorage.getItem("key");
    const temp: string[] = [];
    if (!token) return;
    const response = await getBlockedUsers(token);
    console.log(response.data);
    response.data.forEach((user: any) => {
      if (checkUser(user.user_id)) return;
      temp.push(user.user_id);
    });
    setBlockedUsers(temp);
    setBlocked(temp.length);
    console.log(BlockedUsers);
  }

  const handleBlock = async (e: any) => {
    const user_id = (e.target as HTMLDivElement).parentElement?.children[1]
      .innerHTML;
    if (!user_id) return;
    if (checkUser(user_id)) {
      const token = localStorage.getItem("key");
      if (!token) return;
      if (!window.confirm("Are you sure you want to unblock this user?")) {
        return;
      }
      const response = await unblockUser(token, user_id);
      console.log(response);
      const getUsersList = async () => {
        const response = await getUsers(token);
        setUsers(response.data);
        setCounter(response.data.length);
        console.log(response.data);
      };
      getUsersList();
      GetBlockedUsers();
      return;
    }
    if (!window.confirm("Are you sure you want to block this user?")) {
      return;
    }
    const token = localStorage.getItem("key");
    if (!token) return;

    const response = await blockUser(token, user_id);
    console.log(response);
    const getUsersList = async () => {
      const response = await getUsers(token);
      setUsers(response.data);
      setCounter(response.data.length);
      console.log(response.data);
    };
    getUsersList();
    GetBlockedUsers();
  };

  React.useEffect(() => {
    if (users?.length === 0) return;
    const token = localStorage.getItem("key");
    if (!token) return;
    GetBlockedUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="userlist-container">
      <div
        style={{
          border: "1px solid #ccc",
          height: "100%",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <div className="userlist-header" style={{ fontSize: "30px" }}>
          Users list:
        </div>
        <hr />
        <div className="userlist-item-container">
          <div className="userlist-item-name">Name</div>
          <div className="userlist-item-id">User Id</div>
          <div className="userlist-item-delete"></div>
          {/* <img src={user.picture} alt="user" className="userlist-item-image" /> */}
        </div>
        {users?.map((user, index) => {
          return (
            <div className="userlist-item-container" key={index}>
              <div className="userlist-item-name">{user.user}</div>
              <div className="userlist-item-id">{user.user_id}</div>
              {/* <div className="update-button" style={{cursor:'pointer'}} onClick={handleDelete}>Delete</div> */}
              <button
                className="update-button"
                onClick={(e) => handleDelete(e)}
              >
                Delete
              </button>
              <button className="block-button" onClick={(e) => handleBlock(e)}>
                {checkUser(user.user_id) ? "UNBLOCK" : "BLOCK"}
              </button>
              {/* <img src={user.picture} alt="user" className="userlist-item-image" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
