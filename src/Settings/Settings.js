import React from "react"
import PropTypes from "prop-types"
import { HeaderTabsContainer } from "./HeaderTabs";
import { FooterBtnsContainer } from "./FooterBtns";
import {
    AccountContainer,
    BandwidthContainer,
    GeneralContainer,
    ProxyContainer,
    SyncContainer,
} from "./Content";
import { log } from "../utils"

const { ipcRenderer } = window.require('electron')

class Settings extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        ipcRenderer.send('settings-ready')
        ipcRenderer.on('settings-options', (event, options) => {
            this.props.initSettings(options)
            event.sender.send('settings-options-received')
        })
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
                height: 500,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
        }

        const content = {
            general: <GeneralContainer />,
            account: <AccountContainer />,
            bandwidth: <BandwidthContainer />,
            proxy: <ProxyContainer />,
            sync: <SyncContainer />,
        }

        return (
            <div
                className="settings-container"
                style={styles.container}
                onKeyDown={this.toogleDevTools}
                tabIndex="0"
            >
                <HeaderTabsContainer />
                {content[this.props.content]}
                <FooterBtnsContainer />
            </div>
        )
    }
}

Settings.propTypes = {
    content: PropTypes.string.isRequired,
    initSettings: PropTypes.func.isRequired,
}

export default Settings
