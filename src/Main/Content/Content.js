import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 498,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="content-container"
                style={styles.container}
            >Content</div>
        )
    }
}

export default Content
