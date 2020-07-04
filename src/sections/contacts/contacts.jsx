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
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AnandSunderrajan" color={'white'}>
                        Github
                    </a>
                    /
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/AnandSunderrajan" color={'white'}>
                        LinkedIn
                    </a>
                    /
                    <a target="_blank" rel="noopener noreferrer" href="mailto:anandsunderrajan29@gmail.com" color={'white'}>
                        E-Mail
                    </a>
                </div>
                <FlatButton labelStyle={{
                    color:'white'
                }} label="Back to top" onClick={this.onScrollToTop}/>
            </div>
        );
    }
}

export default ContactComponent;
