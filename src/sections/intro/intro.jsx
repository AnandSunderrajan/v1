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
                    A motivated young professional with an amalgam of unique experiences looking to further knowledge and experience while contributing to society. Currently pursuing a B.Sc. in Computer Engineering from the University of Illinois at Urbana-Champaign. Currently looking for full-time Machine Learning, Software Development or FPGA Design opportunities. Feel free to contact me regarding any positions you might have!
                </p>
                <br/>
                <Button target={"_blank"} href={"https://github.com/AnandSunderrajan/anandsunderrajan.github.io/raw/master/src/sections/documents/Anand_Sunderrajan_Resume.pdf"} style={{color: 'white'}}>My Resume</Button>
            </div>
        );
    }
}

export default IntroComponent;
