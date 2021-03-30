import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from "@material-ui/core/Chip";
import Github from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import Language from "@material-ui/icons/Language";

import './projects.css';

class ProjectsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded1: false,
            expanded2: false,
            expanded3: false,
            expanded4: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange1 = (expanded1) => {
        this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
        this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
        this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
        this.setState({expanded4: expanded4});
    };


    handleExpand = () => {
        this.setState({expanded1: true});
    };

    handleExpand2 = () => {
        this.setState({expanded2: true});
    };

    handleExpand3 = () => {
        this.setState({expanded3: true});
    };

    handleExpand4 = () => {
        this.setState({expanded4: true});
    };

    handleReduce = () => {
        this.setState({expanded1: false});
    };

    handleReduce2 = () => {
        this.setState({expanded2: false});
    };

    handleReduce3 = () => {
        this.setState({expanded3: false});
    };

    handleReduce4 = () => {
        this.setState({expanded4: false});
    };

    render() {
        return (
            <div className="projects">
                <p className="headline">My Work</p>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange1}>
                        <CardHeader title="Trading Bot" subtitle="Side Project"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Algorithmic trading bot that provides output for specific technical indicators (moving averages, price level movements,
                            MACD, etc.) and sentiment analysis for tickers on high traffic subreddits. Achieved an alpha of 0.43 with a beta of 0.12
                            <br/>
                            <div className="projects-entries">
                                <div className="projects-entry-chip">
                                    <Chip label={"Python"} />
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label="PyTorch"/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label="Pandas"/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label="PRAW"/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label="Matplotlib"/>
                                </div>
                                <br/>
                                <div>
                                    <Button target={"_blank"} href={"https://github.com/AnandSunderrajan"} startIcon={<Github/>}>In Progress</Button>
                                </div>
                                {/*<Button target={"_blank"} href={"https://github.com"} startIcon={<Language/>}>Live Version</Button>*/}
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Event Attendance Tracker" subtitle="ECE445 Project (Fall 2020)"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Project for ECE 445 (Team 13), the capstone course for the ECE department at UIUC. A system that tracks event attendees at
                            a booth through custom designed hardware using an ESP32 micro-controller. Marks users as attended after certain user-configurable parameters are met (time and distance)

                            <div className="projects-entries">
                                <div className="projects-entry-chip">
                                    <Chip label={"EAGLE"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"C"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Java"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Android Studio"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Project Management"}/>
                                </div>
                                <br />
                                <div>
                                    <Button target={"_blank"} href={"https://courses.engr.illinois.edu/ece445/projects.asp"} startIcon={<Github/>}>View Project</Button> </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                        <CardHeader title="Pipelined LC3-b Microprocessor" subtitle="ECE385 Final Project"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            A pipelined version of the LC3-B Microprocessor with features such as cache, branch prediction, etc. Pipelined version built as a final project for ECE385 with additional features added subsequently.

                            <div className="projects-entries">
                                <div className="projects-entry-chip">
                                    <Chip label={"SystemVerilog"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"KiCad"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"FPGA Development"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Quartus Prime"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"TTL Logic"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"LaTeX"}/>
                                </div>
                                <br />
                                <div>
                                    <Button target={"_blank"} href={"https://github.com/AnandSunderrajan/Pipelined-lc3"} startIcon={<Github/>}>View Source</Button> </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                        <CardHeader title="Object Detection and Classification System" subtitle="ECE498"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            An object detection and classification system for fashion, built using two separate methods - Low-Level APIs, and Keras. It is trained on the Fashion MNIST database and achieves ~88% accuracy through both methods.

                            <div className="projects-entries">
                                <div className="projects-entry-chip">
                                    <Chip label={"Python"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"TensorFlow"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Machine Learning"}/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Classification"} />
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"NumPy"} />
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label={"Pandas"} />
                                </div>
                                <br/>
                                <div>
                                    <Button target={"_blank"} href={"https://github.com/AnandSunderrajan/FashionMNIST-Object-Detection"} startIcon={<Github/>}>View Source</Button>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <br/>
                <div>
                    <Button className={"inline-block justify-content-center"} target={"_blank"} href={"https://github.com/AnandSunderrajan/"} style={{color:'white'}}>More Of My Work! </Button> </div>
            </div>

        );
    }
}

export default ProjectsComponent;