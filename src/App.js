import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { ListUser } from "./pages/user/list";
import { NewUser } from "./pages/user/new";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/user/new" element={<NewUser />} />
          <Route path="/user" element={<ListUser />} />
        </Routes>
      </Router>
  );
}

export default App;
