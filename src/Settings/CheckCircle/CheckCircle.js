import React from "react"
import PropTypes from "prop-types"

class CheckCircle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: '100%',
                height: 25,
                margin: '0 5px 0 5px',
                display: 'flex',
                alignItems: 'center',
            },
            checkCircle: {
                width: 20,
                height: 20,
                margin: '0 5px 0 0',
                backgroundColor: '#ffffff',
                border: '1px solid #a6a6a6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            checkCircleSelected: {
                width: 20,
                height: 20,
                margin: '0 5px 0 0',
                backgroundColor: '#ffffff',
                border: '1px solid #0078d7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            checkPoint: {
                width: 0,
                height: 0,
                borderRadius: '50%',
            },
            checkPointSelected: {
                width: 10,
                height: 10,
                border: '5px solid #0078d7',
                borderRadius: '50%',
            },
            text: {
                fontSize: '14px',
                fontWeight: '400',
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="check-circle-container"
                style={Object.assign(styles.container, this.props.style)}
                onClick={this.props.onToggle}
            >
                <div
                    className="check-circle"
                    style={this.props.selected ? styles.checkCircleSelected : styles.checkCircle}
                >
                    <div
                        className="check-point"
                        style={this.props.selected ? styles.checkPointSelected : styles.checkPoint}
                    >
                    </div>
                </div>
                <div
                    className="check-circle-text"
                    style={styles.text}
                >
                    {this.props.text}
                </div>
            </div>
        )
    }
}

CheckCircle.defaultProps = {
    style: {},
    onToggle: () => {},
}

CheckCircle.propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    style: PropTypes.object,
    onToggle: PropTypes.func,
}

export default CheckCircle
