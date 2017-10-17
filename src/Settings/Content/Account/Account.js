import React from "react"
import PropTypes from "prop-types"

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
        }

        return (
            <div
                className="account-container"
                style={styles.container}
            >
                account
            </div>
        )
    }
}

Account.propTypes = {
    space: PropTypes.string.isRequired,
    relevance: PropTypes.string.isRequired,
}

export default Account
