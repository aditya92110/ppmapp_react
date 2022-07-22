import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Dictionary from "./pages/dictionary";
import Footer from "./pages/footer";
import Results from "./pages/results";
import JsonDataDisplay from "C:/Users/ASUS/matui/src/pages/jasontable.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
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