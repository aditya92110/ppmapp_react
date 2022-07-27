import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import ScrollResult from "./pages/tableresult";
import Footer from "./pages/footer";
import Results from "./pages/results";
import JsonDataDisplay from "./pages/jasontable.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/projects" component={Results} /> */}
        <Route path="/projects" component={ScrollResult} />
        {/* <Route path="/projects" component={Projects} /> */}
        <Route path="/dictionary" component={JsonDataDisplay} />
        <Route path="/results" component={Results}/>
      </Switch>
      <Footer/>
     
    </Router>
    // <>
    // <JsonDataDisplay/>
    // </>
  );
}
export default App;
