import React from "react"
import PropTypes from "prop-types"

const { ipcRenderer } = window.require('electron')

class Poster extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            image: {
                width: 400,
                height: 400,
            },
        }

        return (
            <div
                className="poster-container"
                style={styles.container}
            >
                <img
                    src={this.props.imgURL}
                    alt="login-poster"
                    style={styles.image}
                />
            </div>
        )
    }
}

Poster.propTypes = {
    imgURL: PropTypes.string.isRequired,
}

export default Poster
