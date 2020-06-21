import React, {Component} from 'react';
import './contacts.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class ContactComponent extends Component {

    onScrollToTop() {
        scrollTo(0, 0, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
            <div className="footer">
                <div className="link-list">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Xeno-404">
                        Github
                    </a>
                    /
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                        LinkedIn
                    </a>
                    /
                    <a target="_blank" rel="noopener noreferrer" href="mailto:anandsunderrajan29@gmail.com">
                        E-Mail
                    </a>
                </div>
                <FlatButton labelStyle={{
                    "color": "rgba(0, 0, 0, 0.65)"
                }} label="Back to top" onClick={this.onScrollToTop}/>
            </div>
        );
    }
}

export default ContactComponent;
