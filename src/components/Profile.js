import React, { Component } from 'react'
import ProfileImg from '../images/muba.jpeg'
import { HashLink as Link } from 'react-router-hash-link'

export default class Profile extends Component {
    render() {
        return (
            <div id="profile">
               <div className="card">
                    <div className="card-image">
                        <img src={ProfileImg} alt="Mubarak" />
                        <Link className="btn-floating halfway-fab waves-effect red">
                            <i className="material-icons activator">more_vert</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <p>
                            <span className="card-title activator grey-text text-darken-4">
                                Mubarak Abubakar    
                            </span>   
                        </p>
                        <p>Full Stack Engineer</p> 
                    </div> 
                    <div className="card-reveal">
                        <span style={{}} className="card-title grey-text text-darken-4">
                            Follow Me
                            <i className="material-icons">close</i>
                        </span>
                        <p className="flex-container">
                            <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
                            <i className="fab fa-twitter grey-text text-darken-4 social-style"></i>
                            <a href="https://www.linkedin.com/in/mubarak-bunza/">
                                <i className="fab fa-linkedin grey-text text-darken-4 social-style"></i>
                            </a>
                        </p>
                    </div>  
                </div> 
            </div>
        )
    }
}
