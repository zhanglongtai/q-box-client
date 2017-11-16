import React from "react"
// import PropTypes from "prop-types"

class Poster3D extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            frame: {
                width: 600,
                height: 600,
            },
        }

        return (
            <iframe
                src="./Particulate Medusae.html"
                style={styles.frame}
            />
        )
    }
}

// Poster3D.propTypes = {
//     imgURL: PropTypes.string.isRequired,
// }

export default Poster3D
