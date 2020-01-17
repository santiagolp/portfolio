import React, { Component } from 'react';
import { Hero } from 'react-bulma-components';

class Works extends Component {
    render() {
        return (
            <Hero color="success" size="fullheight" >
                <Hero.Body>
                    <h1 className="title is-1"> Works.</h1>
                </Hero.Body>
            </Hero>
        );
    }
}

export default Works;