import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthorPage } from "./pages/AuthorPage/index.jsx";
import { ArtworkPage } from "./pages/ArtworkPage/index.jsx";
import { Main } from "./component/Main/index.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/authors/:id" element={<AuthorPage />} />
      <Route
        exact
        path="/authors/:authorId/artworks/:artworkId"
        element={<ArtworkPage />}
      />
    </Routes>
  </Router>
);

export default App;
