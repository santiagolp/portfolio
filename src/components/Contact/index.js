import React, { Component } from 'react';
import { Section, Form, Columns, Button, Container } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(text) {
        return event => {
            let link;
            switch (text) {
                case "facebook":
                    link = `http://m.me/sanlp`;
                    break;
                case "linkedin":
                    link = `http://www.linkedin.com/in/santiago-dellepiane-b829a952`;
                    break;
                default:
                    break;
            }

            window.open(
                link,
                '_blank' // <- This is what makes it open in a new window.
            );

            event.preventDefault()

        }
    }



    render() {
        return (
            <div id="contact" className="background">
                <Section className="hero">
                    <Container >
                        <Columns >
                            <Columns.Column size={8} offset={2} className="is-vcentered">
                                <h1 className=" has-text-centered title is-1">Contact me <span role="img" aria-label="contactme">🤙</span></h1>

                            </Columns.Column>

                            <Columns.Column size={8} offset={2}>
                                <Form.Field>
                                    <Form.Control>
                                        <Columns className="has-text-centered">
                                            
                                            <Columns.Column size={6}>
                                                <Button type="primary" onClick={this.handleSubmit('facebook')} color="link" ><FontAwesomeIcon icon={faFacebookMessenger} />&nbsp;Facebook</Button>
                                            </Columns.Column>
                                            <Columns.Column size={6}>
                                                <Button type="primary" onClick={this.handleSubmit('linkedin')} color="link" ><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</Button>
                                            </Columns.Column>
                                        </Columns>
                                    </Form.Control>
                                </Form.Field>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </div>
        );
    }
}

export default Contact;
