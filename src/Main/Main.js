import React from 'react'
import PropTypes from 'prop-types';

import { HeaderContainer } from './Header'
import Content from './Content'
import Footer from './Footer'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 600,
            },
        }

        return (
            <div
                className="main-container"
                style={styles.container}
            >
                <HeaderContainer />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Main
