import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './programming.css';

class LanguagesComponent extends Component {

    render() {
        const style = {
            width: '100%',
            display: 'inline-block',
            background: '#263238'
        };
        return (
            <div className="programming">
                <p className="headline"> Programming skills</p>
                <div className="programming-console">
                    <Paper zDepth={3} style={style}>
                        <div className="console-header">
                            <div className="console-buttons">
                                <div className="console-button btn-1"></div>
                                <div className="console-button btn-2"></div>
                                <div className="console-button btn-3"></div>
                            </div>
                        </div>
