import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Service from "./components/services/Service";
import Job from "./components/jobs/Job";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
// import Webinar from "./components/webinar/Webinar";
// import Singleservice from "./components/singleservice/Singleservice";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Job />
        <Contact />
        {/* <Webinar /> */}
        {/* <Singleservice /> */}
        {/* <Switch>
          <Route path="/service:id" component={Singleservice} />
          <Route path="/webinar" component={Webinar} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
