import React from "react"
import PropTypes from "prop-types"

class Proxy extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 250,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
        }

        return (
            <div
                className="proxy-container"
                style={styles.container}
            >
                proxy
            </div>
        )
    }
}

Proxy.propTypes = {
    option: PropTypes.string.isRequired,
    defaultOption: PropTypes.string.isRequired,
    protocol: PropTypes.string.isRequired,
    defaultProtocol: PropTypes.string.isRequired,
    serverIP: PropTypes.string.isRequired,
    defaultServerIP: PropTypes.string.isRequired,
    serverPort: PropTypes.string.isRequired,
    defaultServerPort: PropTypes.string.isRequired,
}

export default Proxy
