import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <div className="card">
                    <div className="card-content">
                        <h6><strong>Professional Skills</strong></h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>HTML</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>CSS</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '70%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>SCSS</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '60%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Bootstrap</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '70%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>ReactJS</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '35%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Python</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '75%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Elixir</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '40%'}}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>DevOps</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{width: '50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
