import React, {Component} from 'react';
import './intro.css';
import Button from "@material-ui/core/Button";

class IntroComponent extends Component {
    render() {
        return (
            <div className="introduction">
                <div className={"introduction-text"}>
                    <p className={"top"}>Hi, I'm
                        <a className={"name"}> Anand</a></p>
                </div>
                <p className="introduction-text">
                    A university student living in IL, US. I'm currently pursuing a B.Sc. in Computer Engineering from the University of Illinois at Urbana-Champaign.
                </p>
                <br/>
                <Button target={"_blank"} href={"https://github.com/Xeno-404/Resume/raw/master/Resume_AnandSunderrajan.pdf"} style={{color: 'white'}}>My Resume</Button>
            </div>
        );
    }
}

export default IntroComponent;
