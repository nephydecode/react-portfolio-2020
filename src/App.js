import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Header from "./Components/Header";
import About from "./Components/About"
import Resume from "./Components/Resume"
import { Element } from 'react-scroll';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar style={{background: "transparent"}}/>
        <Element id="section1">
        <Header/>
        </Element>
        <Element id="section2">
            <About/>
        </Element>
          <Element id="section3">
              <Resume/>
          </Element>
        {/*<Section*/}
        {/*  title="Section 4"*/}
        {/*  subtitle={dummyText}*/}
        {/*  dark={false}*/}
        {/*  id="section4"*/}
        {/*/>*/}
        <Section
          // title="Section 5"
          subtitle="© 2020 Koh Lung Kuang"
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
