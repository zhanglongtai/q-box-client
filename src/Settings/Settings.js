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

class Settings extends React.Component {
    constructor(props) {
        super(props)
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
}

export default Settings
