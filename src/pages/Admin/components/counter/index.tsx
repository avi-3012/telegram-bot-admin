import "./index.css";

const Counter = ({ counter, blocked }: { counter: number, blocked:number }) => {
  return (
    <div className="counter">
      <div className="userCount">
        <div style={{ textAlign: "center" }}>Total Subscribed Users</div>
        <div
          style={{ fontWeight: "bold", fontSize: "24px", marginTop: "10px"}}
        >
          {counter-blocked}
        </div>
      </div>
      <div className="userCount">
        <div style={{ textAlign: "center" }}>Total Blocked Users</div>
        <div
          style={{ fontWeight: "bold", fontSize: "24px", marginTop: "10px"}}
        >
          {blocked}
        </div>
      </div>
    </div>
  );
};

export default Counter;
