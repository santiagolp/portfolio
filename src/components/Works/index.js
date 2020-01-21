import React, { Component } from 'react';
import { Section, Container, Columns,  } from 'react-bulma-components';
import Work from './Work';
import seguridad from './../../img/seguridad.jpg';
import thumb from './../../img/seguridad.jpg';


class Works extends Component {
    render() {
        return (
            <div><hr></hr>
                <Section id="works" >
                    <Container >
                        <Columns>
                            <Columns.Column className="has-text-centered"  >
                               <h1 className="title is-1 mb-5"> Latest Work</h1>
                            </Columns.Column>
                        </Columns>
                        {/* #007bfd; */}
                        <Columns>
                            <Work imagen={seguridad} thumb={thumb} title='Seguridad Circular' company="VeoliaLamcef" description="Mobile app to manage security and health of the company" technologies="#ionic #angular #ios #android #nodejs" date="3 Mar 2019"></Work>
                            <Work imagen={seguridad} thumb={thumb} title='HC' company="SPB" description="Clinical history online system" technologies="#Codeigniter #php #mysql" date="1 Dic 2017"></Work>
                            <Work imagen={seguridad} thumb={thumb} title='Fulisoft web' company="Fulisoft" description="Full responsive webpage" technologies="#php #wordpress #mysql" date="6 Ago 2019"></Work>
                        </Columns>
                    </Container>
                </Section>
            </div>
        );
    }
}

export default Works;