import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { ListCompany } from "./pages/company/list";
import { NewCompany } from "./pages/company/new";
import { ListProperties } from "./pages/properties";
import { ListUser } from "./pages/user/list";
import { NewUser } from "./pages/user/new";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/user/new" element={<NewUser />} />
          <Route path="/user" element={<ListUser />} />
          <Route path="/company/new" element={<NewCompany />} />
          <Route path="/company" element={<ListCompany />} />
          <Route path="/properties" element={<ListProperties />} />
          <Route path="/" element={<ListUser />} />
        </Routes>
      </Router>
  );
}

export default App;
