import React from "react"
import PropTypes from "prop-types"

class General extends React.Component {
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
                className="general-container"
                style={styles.container}
            >
                general
            </div>
        )
    }
}

General.propTypes = {
    launchAtLogin: PropTypes.bool.isRequired,
}

export default General
