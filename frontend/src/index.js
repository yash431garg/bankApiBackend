import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../src/dashboard/dashboard";
import { Balance } from "../src/balance/balance";
// import { Dashboard } from "../src/dashboard/dashboard";
// import { Dashboard } from "../src/dashboard/dashboard";
// import { Dashboard } from "../src/dashboard/dashboard";
// import { Dashboard } from "../src/dashboard/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/balance" element={<Balance />} />
        {/*  <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
