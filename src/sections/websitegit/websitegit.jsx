import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './websitegit.css';

class WebsiteComponent extends Component {

    render() {
        return (
            <div className="websitegit">
                <p className="headline">Checkout the source code!!!</p>
                <Card>
                    <CardHeader
                        subtitle="Github Repository"
                        title="Xeno-404/Portfolio"
                        avatar="github.png"
                    />
                    <CardText>
                        This application is made with React and Material UI. Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/Xeno-404/" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default WebsiteComponent;
