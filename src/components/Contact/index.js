import React, { Component } from 'react';
import { Hero } from 'react-bulma-components';

class Contact extends Component {
    render() {
        return (
            <Hero color="danger" size="fullheight" >
                <Hero.Body>
                    <h1 className="title is-1"> Contact.</h1>
                </Hero.Body>
            </Hero>
        );
    }
}

export default Contact;