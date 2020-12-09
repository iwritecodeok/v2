import React, { useState, useEffect } from "react";
import './styles/App.css';
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('https://eapi.fod247.io/v2/videos', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlMDM2YmNjOTA3ODFlODcxODFjMWZkZWQ2MjgzMDZmIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2MDc0ODEyNTcsImV4cCI6MTYwNzQ4NDg1NywiaXNzIjoiaHR0cHM6Ly9hdXRoLmZvZDI0Ny5pbyIsImF1ZCI6WyJodHRwczovL2F1dGguZm9kMjQ3LmlvL3Jlc291cmNlcyIsImZvZGVhcGkiXSwiY2xpZW50X2lkIjoiZm9kLWVhcGktZ3ltZmFybSIsInJvbGVzIjoiZm9kZWFwaS5yZWFkIiwic2NvcGUiOlsiZm9kZWFwaSJdfQ.uJ0WQHwGIaMy8H2JTbB1wBzDMW3_iXSVTpkbzabpCLVjcpWHfyDhMja4btN4J2VYlspydvP-H0WHgR08oOMSxxJI7pNAs5eEX4zEKqOr9FCVFmU1m7L-vl7kkAj3G0S0yLar3Xb-39hl7pUCxDbCX3bOP5P1PfGP1hjZ2jepxLpCKwsMEjZj5qxC9_7aacGOAZCiyduIi6mQh777GW2GpIJvaTVzTtZtBW6lz-46SXPOn2VvXnc6vmFrVgSLYWky-KfxUlAXxNcegxfjMDT5tVTAWo1h7-vIt25J107J1n1ux95hiYvQBbDONrT0HuBS95-fFiiWPx5j-g9i5nnTUg'
      }
    })
      .then(res => {
        setData(res.data.Results)
        console.log("HERE", data)

      }).catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <div className="App">
      <h1>hi</h1>
      {data?.map((item) => (
        <p key={item.ID}>{item.Name}</p>
      ))}
    </div>
  );
}

export default App;
