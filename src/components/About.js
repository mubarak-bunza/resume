import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>About Me</strong>    
                        </h6>
                        <p className="grey-text">
                            As a passionate Software Engineer, I enjoy building light web solutions using best Software Development practices for the satisfaction I get by overcoming challenges. I easily adapt to latest technological advancements and build solutions around them.
                        </p>
                    </div>  
                    <div className="card-action">
                        <h6>Personal Info</h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Email:</strong> mubarakabubakar227@gmail.com</p>
                                <p><strong>Phone:</strong> +234-8060788108</p>
                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Address:</strong> 7 Asajon Way, Sangotedo, Lagos.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
