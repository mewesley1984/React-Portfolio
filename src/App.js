import { Routes, Route, Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Home } from "./components/Home";
import Nav from "react-bootstrap/Nav";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav
          variant="pills"
          activeKey="home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/portfolio">Portfolio</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/resume">Resume</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <div className="App-content">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume></Resume>} />
          <Route path="contact" element={<Contact></Contact>} />
        </Routes>
      </div>
      <footer>

        <a href ="mailto: meugenewesley@gmail.com">Email</a>
        <a href="https://github.com/mewesley1984" >Follow Me on GitHub</a> | 
        <a href="https://www.linkedin.com"> Follow Me on LinkedIn</a> | 
        <a href="https://www.twitter.com">Follow Me on Twitter</a>
      </footer>
    </div>
  );
}

export default App;
