import React, { Component } from 'react';
import { Columns, Card, Content, Media, Heading, Image, Modal, Button } from 'react-bulma-components';


class Work extends Component {
    state = {
        show: false,
    }

    open = () => this.setState({ show: true });
    close = () => this.setState({ show: false });

    handleClick(link) {

        return event => {

            window.open(
                link,
                '_blank' // <- This is what makes it open in a new window.
            );

            event.preventDefault()

        }
    }


    render() {
        const { title, description, technologies, date, company, image, thumb, link } = this.props;
        return (
            <Columns.Column size={4} >
                <Card onClick={this.open}>
                    <Card.Header>
                        <p className="card-header-title">
                            <span>{title}</span>
                            <span className="is-pulled-right">
                            </span>
                        </p>
                    </Card.Header>
                    <Card.Image size="4by3" src={image} />
                    <Card.Content>
                        <Media>
                            <Media.Item renderAs="figure" position="left">
                                <Image size={64} alt="64x64" src={thumb} />
                            </Media.Item>
                            <Media.Item>
                                <Heading size={4}>{title}</Heading>
                                <Heading subtitle size={6}>@{company}</Heading>
                            </Media.Item>
                        </Media>
                    </Card.Content>
                </Card>

                <Modal show={this.state.show} onClose={this.close} closeOnBlur={true} showClose={true}>
                    <Modal.Card>
                        <Modal.Card.Head showClose={true} onClose={this.close}>
                            <Modal.Card.Title>
                                {title}
                            </Modal.Card.Title>
                        </Modal.Card.Head>
                        <Modal.Card.Body>
                            <Columns>
                                <Columns.Column>
                                    <Image rounded={false} src={image} size="4by3" />
                                </Columns.Column>
                            </Columns>
                            <Content>
                                <p>{description}</p><br /> <a href="#1">{technologies}</a>
                                <br />
                                <time > {date}</time>
                            </Content>

                        </Modal.Card.Body>
                        <Modal.Card.Foot>
                            <Button color="info" onClick={this.handleClick(link)}>More info</Button>
                        </Modal.Card.Foot>
                    </Modal.Card>
                </Modal>

            </Columns.Column>
        );
    }
}

export default Work;