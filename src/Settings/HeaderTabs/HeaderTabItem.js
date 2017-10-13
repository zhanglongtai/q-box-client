import React from 'react'
import PropTypes from 'prop-types'
import { log } from '../../utils'

class HeaderTabItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 50,
                height: 70,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconContainer: {
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            textContainer: {
                width: '100%',
                height: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="header-tab-item-container"
                style={styles.container}
            >
                <div
                    className="header-tab-item-icon-container"
                    style={styles.iconContainer}
                >
                    <i
                        className="material-icons"
                        style={{
                            fontSize: 30,
                        }}
                    >{this.props.imgURL}</i>
                </div>
                <div
                    className="header-tab-item-text-container"
                >
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

HeaderTabItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    setContent: PropTypes.func.isRequired,
}

export default HeaderTabItem
