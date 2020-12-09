import React, { useState, useEffect } from "react";
import './styles/App.css';
import Axios from "axios";

import NavSearch from "./components/NavSearch";
const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('https://eapi.fod247.io/v2/videos', {
      headers: {
        'Authorization': API_KEY
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
      <NavSearch />
      {data?.map((item) => (
        <p key={item.ID}>{item.Name}</p>
      ))}
    </div>
  );
}

export default App;
