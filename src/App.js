import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { ListCompany } from "./pages/company/list";
import { NewCompany } from "./pages/company/new";
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
        </Routes>
      </Router>
  );
}

export default App;
