import React, { Component } from 'react';
import { Section, Container, Columns } from 'react-bulma-components';
import Work from './Work';
import seguridad from './../../img/seguridad.jpg';
import fulisoft from './../../img/fulisoft.jpg';
import pont from './../../img/pont.jpg';
import hc from './../../img/hc.jpg';
import pos from './../../img/pos.jpg';
import thumb from './../../img/seguridadthumb.png';
import thumbcodeigniter from './../../img/codeigniterthumb.png';
import thumbphp from './../../img/phpthumb.jpg';
import electron from './../../img/electron.svg';
import portfolio from './../../img/portfolio.jpg';
import react from './../../img/react.png';
class Works extends Component {


    render() {
        return (
            <div id="works">
                <Section className="hero" >
                    <Container >
                        <Columns>
                            <Columns.Column className="has-text-centered"  >
                                <h1 className="title is-1 mb-5"> Latest Work <span role="img" aria-label="portfolio">💼</span></h1>
                            </Columns.Column>
                        </Columns>
                        {/* #007bfd; */}
                        <Columns>
                            <Work image={portfolio} thumb={react} title='Portfolio' company="SD" description="Portfolio example made with react and bulma css" technologies="#react" date="2020" link={`https://github.com/santiagolp/portfolio`}></Work>
                            <Work image={seguridad} thumb={thumb} title='Seguridad Circular' company="VeoliaLamcef" description="Mobile app to manage security and health of the company, backend with nodejs + mysql and front end with angular + ionic" technologies="#ionic #angular #ios #android #nodejs" date="2019" link="https://play.google.com/store/apps/details?id=seguridad.circular.lamcef"></Work>
                            <Work image={fulisoft} thumb={thumbphp} title='Fulisoft web' company="Fulisoft" description="Full responsive webpage made with wordpress and custom php plugins" technologies="#php #wordpress #mysql" date="2019" link="https://www.fulisoft.com"></Work>
                            <Work image={pos} thumb={electron} title='Restaurant POS ' company="POS" description="Restaurant point of sale software with ESC/POS printer communication, nodejs + electron + jquery" technologies="#electron #node #jquery" date="2019" link={`http://m.me/sanlp`}></Work>
                            <Work image={pont} thumb={thumbcodeigniter} title='Medical scheduling software ' company="PaulaOntivero" description="Clinic Management software with appointment scheduling, made with codeigniter + mysql " technologies="#php #mysql" date="2019" link="https://www.drapaulaontivero.com.ar/turnos/auth/login"></Work>
                            <Work image={hc} thumb={thumbcodeigniter} title='HC' company="SPB" description="Medical history online system, made with codeigniter + mysql" technologies="#Codeigniter #php #mysql" date="2017" link={`http://m.me/sanlp`}></Work>
                        </Columns>
                    </Container>
                </Section>
            </div>
        );
    }
}

export default Works;