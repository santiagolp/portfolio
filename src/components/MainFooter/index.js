import React, { Component } from 'react';
import { Hero, Container, Content, Footer, Columns } from 'react-bulma-components';

class MainFooter extends Component {
    render() {
        return (
            <Footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Santiago Dellepiane</strong> Powered by React.
                        </p>
                    </div>
                </div>
            </Footer>

        );
    }
}

export default MainFooter;