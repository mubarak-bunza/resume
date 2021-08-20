import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">About Me</h6>
                        <p className="grey-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nulla voluptatem asperiores a ut cupiditate minima voluptatum explicabo nesciunt aut, commodi cum nemo iure amet iusto? Quae tempora placeat accusantium.
                        </p>
                    </div>  
                    <div className="card-action">
                        <h6>Personal Info</h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><em>Address:</em> 123 Lorem</p>
                                <p><em>Address:</em> 123 Lorem</p>
                                <p><em>Address:</em> 123 Lorem</p>
                                <p><em>Address:</em> 123 Lorem</p>
                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <p><em>Address:</em> 123 Lorem</p>
                                <p><em>Address:</em> 123 Lorem</p>
                                <p><em>Address:</em> 123 Lorem</p>
                                <p><em>Address:</em> 123 Lorem</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
