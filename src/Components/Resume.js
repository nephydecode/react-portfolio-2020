import React from "react";
import {Row, Col} from "reactstrap";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './Resume.css';
import dbsLogo from '../Images/dbs-logo.png'
import cloneLogo from '../Images/clone-logo.png'

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div>
                <div className="section-content">
                    <div className="section-title" style={{display:"inline"}}>
                        <b>R</b>ESUME
                    </div>
                    <div>
                        <Timeline lineColor={'#ddd'}>
                            <TimelineItem
                                key="001"
                                dateText="Jan 2020 – Present"
                                style={{ color: '#61b8ff' }}
                                dateInnerStyle={{ background: '#219BFE', color: '#fff' }}
                                bodyContainerStyle={{
                                    background: '#f9f9f9',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                }}>

                                    <Row className="timeline-item-row">
                                        <Col xs={{size: "auto"}}>
                                            <div style={{ padding: 10}}>
                                            <img src={cloneLogo}/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{ marginLeft: -20 }}>
                                                <div className="timeline-title">Clone</div>
                                                <div className="timeline-subtitle">
                                                    Overseas Entrepreneurship Programme<br/><br/>
                                                    Software Engineer Intern
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                <Row>
                                    <Col>
                                        <div style={{padding: 5}} className="timeline-details">
                                            Clone is a deep tech startup based in Tel Aviv, Israel.
                                            The company leverages on Real-time Data Streaming & Spatial  Modelling to recreate the user’s environments & allow real-time
                                            collaborations in a Cross-Reality environment.
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <br/>
                                        <div style={{padding: 5}} className="timeline-subtitle">
                                            3D VR engineering
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{marginLeft: -20, padding: 5}} className="timeline-details">
                                            <ul>
                                                <li>Innovating & building product features for VR for Oculus Quest, Rift S & Microsoft HoloLens 2 (Unity, Zenject)</li>
                                                <li>Integrating the developed product features into multi-user networking system (Photon Unity Networking 2)</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{padding: 5}} className="timeline-subtitle">
                                            Frontend Engineering
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{marginLeft: -20, padding: 5}} className="timeline-details">
                                            <ul>
                                                <li> Implementing Webviewer features, displaying data & tools from VR sessions (AngularJS, ThreeJS)</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </TimelineItem>
                            <TimelineItem
                                key="002"
                                dateText="May 2019 – Aug 2019"
                                style={{ color: '#e86971' }}
                                dateInnerStyle={{ background: '#e86971', color: '#fff' }}
                                bodyContainerStyle={{
                                    background: '#f9f9f9',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                }}>

                                <Row className="timeline-item-row">
                                    <Col xs={{size: "auto"}}>
                                        <div style={{ padding: 10, marginLeft: 12, marginRight: 12}}>
                                            <img src={dbsLogo}/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div style={{ marginLeft: -20 }}>
                                            <div style={{color: "#e86971"}} className="timeline-title">DBS Bank</div>
                                            <div style={{color: "#e86971"}} className="timeline-subtitle">
                                                UNI.CORN+ Tech Programme<br/><br/>
                                                Tech Innovation & Developer Intern
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{padding: 5}} className="timeline-details">
                                            Over the past few years, DBS has been garnering numerous
                                            prestigious global awards in Banking, Innovation & Digital.
                                            UNI.CORN+ Tech Internship is a 12-week programme where
                                            interns get to solve real-world problems faced by the bank.

                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <br/>
                                        <div style={{padding: 5, color: "#e86971"}} className="timeline-subtitle">
                                            Tech Innovation
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{marginLeft: -20, padding: 5}} className="timeline-details">
                                            <ul>
                                                <li>Designed & prototyped User Interface for mobile web landing page
                                                    & mobile app (Sketch & Flinto)</li>
                                                <li>Collaborated with Business, Technology, Innovation & UX units to
                                                    devise ideal & practical solutions
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{padding: 5, color: "#e86971"}} className="timeline-subtitle">
                                            Frontend Development
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div style={{marginLeft: -20, padding: 5}} className="timeline-details">
                                            <ul>
                                                <li> Developed web landing page (ReactJS) and implemented QR
                                                Multi-Scan feature for DBS PayLah! App (Android) </li>
                                                <li> Innovated, implemented & tested QR Payment project for
                                                    Chinese New Year 2020 January Release </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        );
    }
}



