import React, { Component } from 'react';
import {  Footer } from 'react-bulma-components';

class MainFooter extends Component {
    render() {
        return (
            <Footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Santiago Dellepiane portfolio <span role="img" aria-label="rocket">🚀</span></strong> Powered by React .
                        </p>
                    </div>
                </div>
            </Footer>

        );
    }
}

export default MainFooter;