import React from "react";
import "./index.css";
import { updateWeatherKey } from "../../../../api";
import { updateBotName } from "../../../../api";

const BotSettings = () => {
  const updateKey = () => {
    console.log("update key");
    const token = localStorage.getItem("key");
    console.log(token);
    if (!token) return;
    const key = (
      document.getElementsByClassName("update-input")[0] as HTMLInputElement
    ).value;
    console.log(key);
    if (!key) return;
    const response = updateWeatherKey(token, key)
      .then((res) => window.alert("Key updated successfully!"))
      .catch((err) => window.alert("Error updating key!"));
    console.log(response);
    (
      document.getElementsByClassName("update-input")[0] as HTMLInputElement
    ).value = "";
  };

  const updateName = async () => {
    console.log("update name");
    const token = localStorage.getItem("key");
    console.log(token);
    if (!token) return;
    const name = (
      document.getElementsByClassName("update-input")[1] as HTMLInputElement
    ).value;
    console.log(name);
    if (!name) return;
    const response = await updateBotName(token, name)
      .then((res) => window.alert("Name updated successfully!"))
      .catch((err) => window.alert("Error updating name!"));

    console.log(response);
    (
      document.getElementsByClassName("update-input")[1] as HTMLInputElement
    ).value = "";
  };

  return (
    <div className="botSettings-container">
      <div style={{ marginBottom: "10px", fontSize: "30px" }}>
        Bot Settings:
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ marginRight: "4px", marginBottom: "8px" }}>
            Update Weather API Key:
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              className="update-input"
              placeholder="Enter Key here"
            />
            <button className="update-button" onClick={() => updateKey()}>
              UPDATE
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ marginRight: "4px", marginBottom: "8px" }}>
            Set new bot name:
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              className="update-input"
              placeholder="Enter Key here"
            />
            <button className="update-button" onClick={() => updateName()}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSettings;
