import React, { Component } from 'react';
import { Section, Container, Columns,  } from 'react-bulma-components';
import Work from './Work';
import seguridad from './../../img/seguridad.jpg';
import fulisoft from './../../img/fulisoft.jpg';
import hc from './../../img/hc.jpg';
import thumb from './../../img/seguridadthumb.png';
import thumbcodeigniter from './../../img/codeigniterthumb.png';
import thumbphp from './../../img/phpthumb.jpg';

class Works extends Component {
    render() {
        return (
            <div id="works">
                <Section  className="hero" >
                    <Container >
                        <Columns>
                            <Columns.Column className="has-text-centered"  >
                               <h1 className="title is-1 mb-5"> Latest Work <span role="img" aria-label="portfolio">💼</span></h1>
                            </Columns.Column>
                        </Columns>
                        {/* #007bfd; */}
                        <Columns>
                            <Work image={seguridad} thumb={thumb} title='Seguridad Circular' company="VeoliaLamcef" description="Mobile app to manage security and health of the company" technologies="#ionic #angular #ios #android #nodejs" date="2019"></Work>
                            <Work image={fulisoft} thumb={thumbphp} title='Fulisoft web' company="Fulisoft" description="Full responsive webpage" technologies="#php #wordpress #mysql" date="2019"></Work>
                            <Work image={hc} thumb={thumbcodeigniter} title='HC' company="SPB" description="Medical history online system" technologies="#Codeigniter #php #mysql" date="2017"></Work>
                        </Columns>
                    </Container>
                </Section>
            </div>
        );
    }
}

export default Works;