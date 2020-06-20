import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import ContactComponent from "./sections/contacts/contacts";
import LanguagesComponent from "./sections/programming/programming";
import FrameworksComponent from "./sections/frameworks/frameworks";
import LandingComponent from "./sections/landing/landing";
import ProjectsComponent from "./sections/projects/projects";
import IntroComponent from "./sections/intro/intro";
import WebsiteComponent from "./sections/websitegit/websitegit";


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <div className="section header-section">
              <div className="section-container header-component">
                <LandingComponent></LandingComponent>
              </div>
            </div>
            <div className="section colored">
              <div className="section-container">
                <IntroComponent></IntroComponent>
              </div>
            </div>
            <div className="section">
              <div className="section-container">
                <ProjectsComponent></ProjectsComponent>
              </div>
            </div>
            <div className="section colored">
              <div className="section-container">
                <LanguagesComponent></LanguagesComponent>
              </div>
            </div>
            <div className="section">
              <div className="section-container">
                <FrameworksComponent></FrameworksComponent>
              </div>
            </div>
            <div className="section">
              <div className="section-container">
                <WebsiteComponent></WebsiteComponent>
              </div>
            </div>
            <div className="section colored">
              <div className="section-container">
                <ContactComponent></ContactComponent>
                <MyForm/>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
