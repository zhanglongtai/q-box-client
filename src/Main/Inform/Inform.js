import React from "react"
import PropTypes from "prop-types"

class Inform extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                display: this.props.content === 'inform' ? 'flex' : 'none',
                width: 400,
                height: 498,
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="inform-container"
                style={styles.container}
            >Inform</div>
        )
    }
}

Inform.propTypes = {
    content: PropTypes.string.isRequired,
}

export default Inform
