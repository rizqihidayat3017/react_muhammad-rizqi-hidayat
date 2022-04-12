import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AboutApp } from "./components/Aboutapp/AboutApp";
import { AboutAuthor } from "./components/AboutAuthor/AboutAuthor";
import { Pagenotfound } from "./components/pagenotfound/Pagenotfound";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutApp" element={<AboutApp />} />
          <Route path="/aboutAuthor" element={<AboutAuthor />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
