import React, { Component } from 'react';
import { Hero, Container,  Section } from 'react-bulma-components';

class About extends Component {
    render() {
        return (
            <Section id="about" className="hero is-fullheight">
                <Hero.Body>
                    <Container>
                        <h2 className="subtitle is-2 "> Full stack developer. <span role="img" aria-label="dev">👨‍💻</span> </h2> 
                        <h1 className="title is-1"> Santiago Dellepiane.</h1>
                    </Container>
                </Hero.Body>
            </Section>
        );
    }
}

export default About;