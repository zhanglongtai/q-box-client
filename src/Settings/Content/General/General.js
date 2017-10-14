import React from "react"
import PropTypes from "prop-types"
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox"

class General extends React.Component {
    constructor(props) {
        super(props)

        this.toggleLaunchOption = this.toggleLaunchOption.bind(this)
    }

    toggleLaunchOption() {
        this.props.setLaunchAtLogin(!this.props.launchAtLogin)
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
            optionContainer: {
                width: 300,
                height: 100,
                display: 'flex',
                alignItems: 'center',
            },
        }

        return (
            <div
                className="general-container"
                style={styles.container}
            >
                <div
                    className="general-option-container"
                    style={styles.optionContainer}
                >
                    <Checkbox
                        label="系统启动时运行Q-box"
                        checked={this.props.launchAtLogin}
                        onChange={this.toggleLaunchOption}
                    />
                </div>
            </div>
        )
    }
}

General.propTypes = {
    launchAtLogin: PropTypes.bool.isRequired,
    setLaunchAtLogin: PropTypes.func.isRequired,
}

export default General
