import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path={"/"} element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
