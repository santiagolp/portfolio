import React, { Component } from 'react';
import { Hero, Container, Content, Footer, Columns } from 'react-bulma-components';

class About extends Component {
    render() {
        return (
            <Hero color="primary" size="fullheight" >
                <Hero.Body>
                    <h1 className="title is-1"> Hello friend.</h1>
                </Hero.Body>
            </Hero>
        );
    }
}

export default About;