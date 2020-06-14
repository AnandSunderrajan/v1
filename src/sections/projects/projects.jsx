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

import './timeline.css';

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

