import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import WordsList from "./components/words-list.component";
import EditWord from "./components/edit-word.component";
import CreateWord from "./components/create-word.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={WordsList} />
      <Route path="/edit/:id" component={EditWord} />
      <Route path="/create" component={CreateWord} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
