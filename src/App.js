import React from "react";
import About from "./pages/About";
import Experience from "./pages/Experience";
import "./App.css";
import Education from "./pages/Education";
import Divider from "@material-ui/core/Divider";
import Skills from "./pages/Skills";
import Contact from "./pages/ContactMe";
import data from "./data";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SkillsMobile from './pages/SkillMobile'

function App() {
  return (
    <div className='root'>
      <AppBar position="fixed" className="app-header">
        <Toolbar className="header-container">
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography className="text-color-light" variant="h4">
            <Button className="text-color-light" href="#about">
              <Typography className="text-color-light" variant="h5">
                {data.About.FirstName}
              </Typography>
            </Button>
          </Typography>
          <div className="header_options">
            {data.About && (
              <Button className="text-color-light" href="#about">
                <Typography className="text-color-light" variant="h5">
                  About
                </Typography>
              </Button>
            )}
            {data.Experience && (
              <Button className="text-color-light" href="#experience">
                <Typography className="text-color-light" variant="h5">
                  Experience
                </Typography>
              </Button>
            )}
            {data.Education && (
              <Button className="text-color-light" href="#education">
                <Typography className="text-color-light" variant="h5">
                  Education
                </Typography>
              </Button>
            )}
            {data.Skills && (
              <Button className="text-color-light" href="#skills">
                <Typography className="text-color-light" variant="h5">
                  Skills
                </Typography>
              </Button>
            )}
            {data.About && (
              <Button className="text-color-light" href="#contact">
                <Typography className="text-color-light" variant="h5">
                  Contact Me
                </Typography>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className="about-empty" id="about"/>
      <About about={data.About} />
      <Divider className="divider-mobile"/>
      <Experience experience={data.Experience} />
      <Divider />
      <Education education={data.Education} />
      <Divider />
      <SkillsMobile skills={data.Skills}/>
      <Skills skills={data.Skills} />
      <Divider />
      <Contact about={data.About} />
    </div>
  );
}

export default App;
