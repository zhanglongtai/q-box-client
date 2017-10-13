import React from "react"
import PropTypes from "prop-types"

class Bandwidth extends React.Component {
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
                className="bandwidth-container"
                style={styles.container}
            >
                bandwidth
            </div>
        )
    }
}

Bandwidth.propTypes = {
    downloadLimit: PropTypes.bool.isRequired,
    downloadDefaultLimitSpeed: PropTypes.string.isRequired,
    downloadLimitSpeed: PropTypes.string.isRequired,
    uploadLimit: PropTypes.bool.isRequired,
    uploadDefaultLimitSpeed: PropTypes.string.isRequired,
    uploadLimitSpeed: PropTypes.string.isRequired,
    lanSync: PropTypes.bool.isRequired,
}

export default Bandwidth
