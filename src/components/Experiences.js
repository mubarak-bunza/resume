import React, { Component } from 'react'

export default class Experiences extends Component {
    render() {
        return (
            <div id="experiences">
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>Experiences</strong>
                        </h6>
                        {/* row */}
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    May <strong>2021</strong> - July <strong>2021</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        Full Stack Engineer at Xantos Labs, Austin, TX.
                                    </h6>
                                        <ul>
                                            <li>
                                                Key contributor to the launch of the firm's first mobile Fintech app for investment management and cross- border payments.
                                            </li>
                                            <li>
                                                Led multiple projects including revamp of backend architecture, AWS cloud infrastructure (lambda, Cognito, DynamoDB, CloudWatch, S3 and more) and web refresh.
                                            </li>
                                            <li>
                                                Implemented scalable cross-border payments solution using APIs from CurrencyCloud (now part of Visa) in Elixir for seamless transfer of funds in multiple currencies at competitive FX rates.
                                            </li>
                                            <li>
                                                Designed, built, and deployed the startup’s website (xantoslabs.com) using Figma, SCSS, and Javascript, implementing Google Analytics and Intercom.
                                            </li>
                                            <li>
                                                Deployed marketing automation solutions using SendGrid and AWS.
                                            </li>
                                            <li>
                                                Oversaw multiple simultaneous projects with changing priorities and various stakeholders across several organizations under direct report to the firm’s executive team leveraging collaboration tools like Trello and Slack.
                                            </li>
                                        </ul> 
                                </blockquote>
                            </div>
                        </div>
                        {/* /row */}
                        {/* row */}
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    November <strong>2020</strong> - May <strong>2021</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        Software Engineer at Decagon, Lagos.
                                    </h6>
                                    <ul>
                                        <li>Setup and Manage CI using Github actions and CD on Heroku for Hotel Management System</li>
                                        <li>Built authentication system for Hotel Management System using Django and PostgreSQL</li>
                                        <li>Implement plug-able Restful API for Authentication System using DRF</li>
                                        <li>Built projects with Python, Django, and Django Rest Framework</li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                        {/* /row */}
                        {/* row */}
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    Septemter <strong>2019</strong> - March <strong>2020</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        Web Developer at Start Innovation Hub, Uyo.
                                    </h6>
                                    <ul>
                                        <li>Worked with a team in developing web applications using latest web technologies.</li>
                                        <li>Mentored interns on Web Development.</li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                        {/* /row */}
                    </div>
                </div>
            </div>
        )
    }
}
