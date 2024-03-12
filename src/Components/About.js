import React from "react";
import {Row, Col} from "reactstrap";
import AboutCard from "./AboutCard";
import Banner from "../Images/webportfolio-banner.png";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div>
                <div className="section-content">
                    <div className="section-title" style={{display:"inline"}}>
                        <b>A</b>BOUT
                    </div>
                    <div>
                        <Row>
                            <Col><AboutCard role={"frontend"}/></Col>
                            <Col><AboutCard role={"xr"}/></Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}



