import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from "react-scroll";



class MainHeader extends Component {


    render() {
        return (
            <Navbar className="is-fixed-top" role="navigation" color='white' >
                <Navbar.Brand>

                    <Navbar.Item renderAs="a" href="#about">
                        <h1 className='title is-1'>SD</h1>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container position="end">
                        <Link className="navbar-item" activeClass="navbar-item" to="about" spy={true} smooth={true} duration={800} >
                            <h3 className='title is-3'>Home</h3>
                        </Link>
                        <Link className="navbar-item" activeClass="navbar-item" to="works" spy={true} smooth={true} duration={800} >
                            <h3 className='title is-3'>Work</h3>
                        </Link>
                        <Link className="navbar-item" activeClass="navbar-item" to="contact" spy={true} smooth={true} duration={800} >
                            <h3 className='title is-3'>Contact</h3>
                        </Link>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default MainHeader;