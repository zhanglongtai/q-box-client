import React from 'react'
import PropTypes from 'prop-types';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class MainWin extends React.Component {
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
                className="main-win-container"
                style={styles.container}
            >
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default MainWin
