import React from "react"
import PropTypes from "prop-types"

class OptionBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 350,
                minHeight: 30,
                margin: 10,
                border: '1px solid #e1e4e8',
                padding: 10,
                position: 'relative',
            },
            title: {
                height: 20,
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: -10,
                left: 20,
                backgroundColor: 'white',
            },
            children: {
                width: '100%',
                minHeight: 20,
            },
        }

        return (
            <div
                className="optionbox-container"
                style={styles.container}
            >
                <div
                    className="optionbox-title"
                    style={styles.title}
                >{this.props.title}</div>
                <div
                    className="option-children"
                    style={styles.children}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

OptionBox.defaultProps = {
    title: '',
}

OptionBox.propTypes = {
    title: PropTypes.string.isRequired,
}

export default OptionBox
