import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
import Collapse from "reactstrap";

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.listener = null;
    this.state = {
      status: "top"
    }
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e =>{
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 825) {
        if (this.state.status !== "body") {
          this.setState({status: "body"});
        }
      }
      else {
        if(this.state.status !== "top"){
          this.setState({status: "top"});
        }
      }
    });
  }

  componentDidUpdate() {
    document
        .removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <nav className ="nav-top" id="navbar" style={{width : "100%"}}>
        <div className="nav-content" style={{backgroundColor: this.state.status === "top" ? "transparent" : "#FAFAFA"}}>
          <p className="nav-header" style={{color :  this.state.status === "top" ? "#fafafa" : "#494949"}}>
            <b>P</b>ORTFOLIO
          </p>
          <ul className="nav-items">
            <li className={"nav-item " + (this.state.status === "top" ? "" : "nav-body")}>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className={"nav-item " + (this.state.status === "top" ? "" : "nav-body")}>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className={"nav-item " + (this.state.status === "top" ? "" : "nav-body")}>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
