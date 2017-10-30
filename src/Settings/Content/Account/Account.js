import React from "react"
import PropTypes from "prop-types"
import OptionBox from "../../OptionBox"

class Account extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 350,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            text: {
                height: 30,
                fontSize: '20px Helvetica,Arial,sans-serif',
                lineHeight: 30,
            },
        }

        return (
            <div
                className="account-container"
                style={styles.container}
            >
                <OptionBox
                    title="空间"
                >
                    <div
                        className="account-text"
                        style={styles.text}
                    >已使用{this.props.space}空间</div>
                </OptionBox>
                <OptionBox
                    title="关联的账户"
                >
                </OptionBox>
            </div>
        )
    }
}

Account.propTypes = {
    space: PropTypes.string.isRequired,
    relevance: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default Account
