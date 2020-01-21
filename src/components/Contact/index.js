import React, { Component } from 'react';
import { Hero,Section } from 'react-bulma-components';

class Contact extends Component {
    render() {
        return (
            <Section id="contact" >
                <Hero color="danger" size="fullheight" >
                    <Hero.Body>
                        <h1 className="title is-1"> Contact.</h1>
                    </Hero.Body>
                </Hero>
            </Section>
        );
    }
}

export default Contact;