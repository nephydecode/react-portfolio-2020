import React from "react";
import {Row, Col} from "reactstrap";
import About from "./About";
import './AboutCard.css';
import devIcon from "../Images/dev-icon.svg";
import xrIcon from "../Images/xr-icon.svg";
import angularIcon from "../Images/FrameworkIcons/angular-icon.svg"
import mayaIcon from "../Images/FrameworkIcons/maya-icon.svg"
import reactIcon from "../Images/FrameworkIcons/react-icon.svg"
import sketchIcon from "../Images/FrameworkIcons/sketch-icon.svg"
import unityIcon from "../Images/FrameworkIcons/unity-icon.svg"
import zenjectIcon from "../Images/FrameworkIcons/zenject-icon.svg"


export default class AboutCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let role = this.props.role;
        var border, color, icon, title, caption1, caption2,
        framework1, framework2, framework3;

        if(role == "frontend"){
            border = "border-green";
            color = "green";
            icon = devIcon;
            title = "Frontend Developer";
            caption1 = "I enjoy creating intuitive user interfaces &\n" +
                "aesthetics that enhances one’s experience.\n";
            caption2 = "Bringing the designs to life using the power\n" +
                "of coding brings me great satisfaction.";
            framework1 = { icon : sketchIcon, name : "Sketch"};
            framework2 = { icon : reactIcon, name : "React"};
            framework3 = { icon : angularIcon, name : "Angular"};

        }

        else if (role == "xr"){
            border = "border-blue";
            color = "blue";
            icon = xrIcon;
            title = "XR Developer";
            caption1 = "What kind of experience could possibly be\n" +
                "more enriching that a full 360 immersive one? \n"
            caption2 =  "I believe that there will come a day when all\n" +
                "our 2D flat screens get replaced by 3D devices."
            framework1 = { icon : mayaIcon, name : "Maya"};
            framework2 = { icon : unityIcon, name : "Unity"};
            framework3 = { icon : zenjectIcon, name : "Zenject"};
            // framework2 = ({unityIcon}, "Unity");
            // framework3 = ({zenjectIcon}, "Zenject");
        }

        return (
            <div>
                <div className="section-content">
                    <div className = {border}>
                        <img style={{marginBottom: 19}} src={icon}/>
                        <div style={{margin: 19, paddingVertical: 5}} className={"card-title-" + color}>
                            {title}
                        </div>
                        <div style={{paddingTop: 17}}className="card-caption">
                            {caption1}
                            <br/><br/>
                            {caption2}
                        </div>
                        <div style={{padding: 20}} className={"card-subtitle-" + color}>
                            Framework & Softwares
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <div className="card-framework-icon">
                                    <img src={framework1.icon}/>
                                    </div>
                                    <div style={{paddingTop: 12}}>
                                    {framework1.name}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card-framework-icon">
                                        <img src={framework2.icon}/>
                                    </div>
                                    <div className="card-framework-title">
                                        {framework2.name}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card-framework-icon">
                                        <img src={framework3.icon}/>
                                    </div>
                                    <div className="card-framework-title">
                                        {framework3.name}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                        {/*The data from parent is: {this.props.color}*/}

                        {/*The Color Settings is {colorSettings};*/}
                </div>
            </div>
        );
    }
}
