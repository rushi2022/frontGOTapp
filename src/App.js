import "./App.css";
import { useState } from "react";
function App() {
  const [name, setFname] = useState(["jhon", "Cersei"]);
  const arr = ["jhon", "Cersei"];

  const adeListerner = () => {
    setFname(arr.sort());
  };
  const dadeListerner = () => {
    setFname(arr.sort((a, b) => b - a));
  };
  return (
    <div className="App">
      <button onClick={adeListerner}>Sort ADE</button>
      <button onClick={dadeListerner}>Sort DADE</button>
      <table>
        <tr>
          <td>First Name</td>

          <td>Last Name</td>

          <td>Age</td>

          <td>FullName</td>
        </tr>
        <tr>
          <td>{name[0]}</td>

          <td>Snow</td>

          <td>35</td>

          <div
            style={name[0] === "jhon" ? { color: "green" } : { color: "red" }}
          >
            <td>{name[0]} Snow</td>
          </div>
        </tr>
        <tr>
          <td>{name[1]}</td>

          <td>Targerian</td>

          <td>42</td>
          <div
            style={name[1] === "Cersei" ? { color: "green" } : { color: "red" }}
          >
            <td>{name[1]} Targerian</td>
          </div>
        </tr>
      </table>
    </div>
  );
}

export default App;
