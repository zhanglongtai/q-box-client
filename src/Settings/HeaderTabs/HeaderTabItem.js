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
                width: 60,
                height: 70,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
            },
            containerSelected: {
                width: 60,
                height: 70,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: '#d2d7dc',
            },
            iconContainer: {
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            textContainer: {
                width: '100%',
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="header-tab-item-container"
                style={this.props.selected ? styles.containerSelected : styles.container}
                onClick={this.props.setContent.bind(null, this.props.name)}
            >
                <div
                    className="header-tab-item-icon-container"
                    style={styles.iconContainer}
                >
                    <i
                        className="material-icons"
                        style={{
                            fontSize: 40,
                        }}
                    >{this.props.imgURL}</i>
                </div>
                <div
                    className="header-tab-item-text-container"
                    style={styles.textContainer}
                >
                    <p style={{margin: 0}}>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

HeaderTabItem.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    setContent: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
}

export default HeaderTabItem
