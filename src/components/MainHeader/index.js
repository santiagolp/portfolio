import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';

const colors = {
    Default: '',
    primary: 'primary',
    info: 'info',
    danger: 'danger',
    warning: 'warning',
    success: 'success',
    white: 'white',
    black: 'black',
    light: 'light',
    dark: 'dark',
    link: 'link',
};

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
                        <Navbar.Item href="#">
                            <h3 className='title is-3'>Home</h3>
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            <h3 className='title is-3'>About</h3>
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            <h3 className='title is-3'>Works</h3>
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            <h3 className='title is-3'>Contact</h3>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default MainHeader;