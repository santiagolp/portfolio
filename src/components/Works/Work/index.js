import React, { Component } from 'react';
import { Columns, Card, Content, Media, Heading, Image } from 'react-bulma-components';


class Work extends Component {


    render() {
        console.log(this.props);
        const { title, description, technologies, date, company, image, thumb } = this.props;
        return (
            <Columns.Column size={4}>
                <Card>
                    <Card.Header>
                        <p class="card-header-title">
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
                        <Content>
                            {description}<br /> <a href="#1">{technologies}</a>
                            <br />
                            <time > {date}</time>
                        </Content>
                    </Card.Content>
                </Card>
            </Columns.Column>
        );
    }
}

export default Work;