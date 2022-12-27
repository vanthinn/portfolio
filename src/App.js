import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import GlobalStyles from "./styles/GlobalStyles/GlobalStyles.js";
import styled from "styled-components";
import HomePage from "./Page/HomePage/HomePage.js";
import AboutPage from "./Page/AboutPage/AboutPage.js";
import ResumePage from "./Page/ResumePage/ResumePage.js";
import ProjectPage from "./Page/ProjectPage/ProjectPage.js";
import ContactPage from "./Page/ContactPage/ContactPage.js";
import Particle from "./Components/Particles/Particle.js";
import Arrayparticles from "./Data/particles.js";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import Switch from "@mui/material/Switch";
import "./App.css";
import { useState, useRef } from "react";
import clsx from "clsx";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [theme, SetTheme] = useState("dark-mode");
  const [nav, setNav] = useState("");
  let particle = useRef(Arrayparticles[5].options);
  let animate = useRef("");
  theme === "dark-mode"
    ? (particle.current = Arrayparticles[5].options)
    : (particle.current = Arrayparticles[1].options);
  const handleClickTheme = () => {
    theme === "dark-mode" ? SetTheme("light-mode") : SetTheme("dark-mode");
  };

  const handleMenu = () => {
    animate.current === "animateOn linear 1s"
      ? (animate.current = "animateOff linear 1.2s")
      : (animate.current = "animateOn linear 1s");
    nav === "" ? setNav("respone") : setNav("");
  };

  return (
    <GlobalStyles>
      <div className={clsx(theme)}>
        <div className="App">
          <Sidebar name={nav} animation={animate.current} />
          <div className="theme-section">
            <div className="light-dark-mode">
              <div className="left-content">
                <Brightness6Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  inputProps={{ "aria-label": "" }}
                  size="medium"
                  onClick={handleClickTheme}
                />
              </div>
            </div>
          </div>
          <div className="sidebarmobile" onClick={handleMenu}>
            <MenuIcon />
          </div>

          <MainContainer>
            <div className="lines">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
            </div>
            <Particle par={particle.current} />
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/About" element={<AboutPage />} exact />
              <Route path="/Resume" element={<ResumePage />} exact />
              <Route path="/Project" element={<ProjectPage />} exact />
              <Route path="/Contact" element={<ContactPage />} exact />
            </Routes>
          </MainContainer>
        </div>
      </div>
    </GlobalStyles>
  );
}

const MainContainer = styled.main`
  position: relative;
  margin-left: 14rem;
  min-height: 100vh;
  height: 100%;
  background-color: var(--background-dark-color);
  z-index: 10;
  overflow: hidden;

  .lines {
    position: absolute;
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
  @media (max-width: 1023px) {
    margin-left: 0;
    min-height: 40vh;

    .lines {
      .line-1,
      .line-2,
      .line-3,
      .line-4 {
        min-height: 40vh;
      }
    }
  }

  @media (min-width: 740px) and (max-width: 1023px) {
  }

  @media (max-width: 739px) {
  }
`;

export default App;
