import React from "react"
import PropTypes from "prop-types"

class TextField extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            focus: false,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const newValue = event.target.value
        this.props.handleChange(newValue)
    }

    render() {
        const styles = {
            container: {
                border: '1px solid #a6a6a6',
                backgroundColor: '#ffffff',
                boxShadow: 'none',
                height: 28,
                display: 'flex',
                alignItems: 'stretch',
            },
            // containerHover: {
            //     border: '1px solid #212121',
            //     backgroundColor: '#ffffff',
            //     height: 32,
            //     display: 'flex',
            //     alignItems: 'stretch',
            // },
            containerFocus: {
                border: '1px solid #0078d7',
                backgroundColor: '#ffffff',
                boxShadow: 'none',
                height: 28,
                display: 'flex',
                alignItems: 'stretch',
            },
            containerDisable: {
                borderColor: '#f4f4f4',
                backgroundColor: '#f4f4f4',
                boxShadow: 'none',
                height: 32,
                display: 'flex',
                alignItems: 'stretch',
                pointerEvent: 'none',
                cursor: 'default',
            },
            input: {
                width: '100%',
                padding: '0 12px 0 12px',
                fontSize: '14px',
                color: '#333333',
                lineHeight: 'normal',
                textOverflow: 'ellipsis',
                border: 'none',
                borderColor: 'transparent',
                boxShadow: 'none',
                outlineColor: 'transparent',
            },
            inputDisable: {
                width: '100%',
                padding: '0 12px 0 12px',
                outline: 0,
                fontSize: '14px',
                lineHeight: 'normal',
                textOverflow: 'ellipsis',
                color: 'rgba(0, 0, 0, .2)',
                backgroundColor: 'transparent',
                border: 'none',
                borderColor: 'transparent',
                pointerEvent: 'none',
                cursor: 'default',
                boxShadow: 'none',
            },
        }

        return (
            <div
                className="text-field-container"
                style={
                    this.props.disabled
                    ?
                    styles.containerDisable
                    :
                    this.state.focus
                        ?
                        styles.containerFocus
                        :
                        styles.container
                }
                onFocus={
                    () => {this.setState({focus: true})}
                }
                onBlur={
                    () => {this.setState({focus: false})}
                }
            >
                <input
                    type="text"
                    style={this.props.disabled ? styles.inputDisable : styles.input}
                    value={this.props.value}
                    onChange={this.handleChange}
                    disabled={this.props.disabled}
                />
            </div>
        )
    }
}

TextField.defaultProps = {
    disabled: false,
    handleChange: () => {},
}

TextField.propTypes = {
    disabled: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}

export default TextField
