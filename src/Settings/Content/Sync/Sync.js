import React from "react"
import PropTypes from "prop-types"

class Sync extends React.Component {
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
                className="sync-container"
                style={styles.container}
            >
                sync
            </div>
        )
    }
}

Sync.propTypes = {
    space: PropTypes.string.isRequired,
    relevance: PropTypes.string.isRequired,
}

export default Sync
