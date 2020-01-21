import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';



class MainHeader extends Component {
    render() {
        return (
            <Navbar className="is-fixed-top" role="navigation" color='white' >
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <h1 className='title is-1'>SD</h1>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container position="end">
                        <Navbar.Item href="#about">
                            <h3 className='title is-3'>Home</h3>
                        </Navbar.Item>
                        <Navbar.Item href="#works">
                            <h3 className='title is-3'>Work</h3>
                        </Navbar.Item>
                        <Navbar.Item href="#contact">
                            <h3 className='title is-3'>Contact</h3>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default MainHeader;