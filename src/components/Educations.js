import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default class Educations extends Component {
    render() {
        return (
            <div id="education">
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>Education and Certifications</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Associate Cloud Engineer (Google Cloud) </td>
                                    <td>July, 2021</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Software Engineering and Leadership (Decagon)</td>
                                    <td>June, 2021</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creating Web App with Django + PostgreSQL (Udemy)</td>
                                    <td>February, 2021</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>Bsc Computer Science (Federal University Birnin Kebbi)</td>
                                    <td>November, 2018</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
