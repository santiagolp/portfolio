import React, { Component } from 'react';
import { Section, Form, Columns, Button } from 'react-bulma-components';

class Contact extends Component {



    constructor(props) {
        super(props);
        this.state = { name: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    handleSubmit(text) {
        return event => {
            let link = "";
            switch (text) {
                case "whatsapp":
                    link = `https://api.whatsapp.com/send?phone=542215948626&text=Hello ${this.state.name}`;
                    break;
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
        const { name } = this.state;
        return (
            <Section id="contact"><hr></hr> <h1 className=" has-text-centered title is-1">Contact</h1>
                <Columns>
                    <Columns.Column size={4} offset={4}>
                        <Form.Field>
                            <Form.Label>Name</Form.Label>
                            <Form.Control>
                                <Form.Input type="text" name="name" placeholder="Name" value={name} onChange={this.handleInputChange} />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                    {/* <Columns.Column size={4} offset={4}>
                        <Form.Field>
                            <Form.Label>Email</Form.Label>
                            <Form.Control  >
                                <Form.Input type="email" placeholder="hello@" />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                    <Columns.Column size={4} offset={4}>
                        <Form.Field>
                            <Form.Label>Message</Form.Label>
                            <Form.Control  >
                                <Form.Textarea placeholder="Textarea" />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column> */}
                    <Columns.Column size={4} offset={4}>
                        <Form.Field>
                            <Form.Control  >
                                <Columns className="has-text-centered">
                                    <Columns.Column>
                                        <Button type="primary" onClick={this.handleSubmit('whatsapp')} color="link" >Whatsapp</Button>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button type="primary" onClick={this.handleSubmit('facebook')} color="link" >Facebook</Button>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button type="primary" onClick={this.handleSubmit('linkedin')} color="link" >LinkedIn</Button>
                                    </Columns.Column>
                                </Columns>
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                </Columns>
            </Section>
        );
    }
}

export default Contact;