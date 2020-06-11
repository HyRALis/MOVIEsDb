import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";

import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import SectionBar from "./Components/SectionBar";

import fetchLanding from "./Redux/Actions/landingActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLanding());
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
