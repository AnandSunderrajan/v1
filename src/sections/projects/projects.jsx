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
            expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
        this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
        this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
        this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleExpand2 = () => {
        this.setState({expanded2: true});
    };

    handleExpand3 = () => {
        this.setState({expanded3: true});
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

    render() {
        return (
            <div className="projects">
                <p className="headline">My Work</p>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="COVID-19 Tracker" subtitle="Side Project"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Tracks COVID-19 cases globally using API data available through <a href="https://google.com"> xyz PUT HERE </a>, and displays relevant data through text and visual aid . Builds upon a US statistic reporter from ECE498 ICC.
                            <br/>
                            <div className="projects-entries">
                                <div className="projects-entry-chip">
                                    <Chip label={"JavaScript"} />
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label="React"/>
                                </div>
                                <div className="projects-entry-chip">
                                    <Chip label="CSS"/>
                                </div>
                                <br/>
                                <div>
                                    <Button target={"_blank"} href={"https://github.com"} startIcon={<Github/>}>View Source</Button>
                                </div>
                                <Button target={"_blank"} href={"https://github.com"} startIcon={<Language/>}>Live Version</Button>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Pipelined LC3-b Microprocessor" subtitle="ECE385 Final Project"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            A pipelined version of the LC3-B Microprocessor with features such as cache, branch prediction, etc. Built as a final project for ECE385.

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
                                    <Button target={"_blank"} href={"https://github.com"} startIcon={<Github/>}>View Source</Button> </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                        <CardHeader title="Object Detection System" subtitle="ECE498"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            An object detection system for Fashion, built using two separate methods - Low-Level APIs, and Keras. It is trained on the Fashion MNIST database and achieves ~93% accuracy on test images through both methods.

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
                                    <Button target={"_blank"} href={"https://github.com"} startIcon={<Github/>}>View Source</Button>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <br/>
                <div>
                    <Button className={"inline-block justify-content-center"} target={"_blank"} href={"https://github.com/Xeno-404/"}>More Of My Work! </Button> </div>
            </div>

        );
    }
}

export default ProjectsComponent;