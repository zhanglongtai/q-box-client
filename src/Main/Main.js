import React from "react"
// import PropTypes from "prop-types"

import { HeaderContainer } from "./Header"
import { ActivityContainer } from "./Activity"
import { InformContainer } from "./Inform";
import { FooterContainer } from "./Footer"

const { ipcRenderer } = window.require('electron')

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    toogleDevTools(event) {
        if (event.keyCode === 123) {
            ipcRenderer.send('toogle-devtools')
        }
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
                onKeyDown={this.toogleDevTools}
                tabIndex="0"
            >
                <HeaderContainer />
                <InformContainer />
                <ActivityContainer />
                <FooterContainer />
            </div>
        )
    }
}

export default Main
