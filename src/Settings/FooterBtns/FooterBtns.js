import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "@blueprintjs/core"
import { log } from '../../utils'

const { ipcRenderer } = window.require('electron')

// copy optionTemp value to option value
function optionsForConfirm(obj) {
    const newOptions = {}
    const keys = Object.keys(obj)
    for (let k of keys) {
        if (k.includes('Temp')) {
            const optionKey = k.split('Temp')[0]
            newOptions[k] = obj[k]
            newOptions[optionKey] = obj[k]
        }
    }

    return newOptions
}

class FooterBtns extends React.Component {
    constructor(props) {
        super(props)

        this.handleConfirm = this.handleConfirm.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleConfirm() {
        this.props.confirmSettings(this.props.options)
        const newOptions = optionsForConfirm(this.props.options)
        ipcRenderer.send('settings-update', newOptions)
        ipcRenderer.on('settings-updated', (event) => {
            event.sender.send('settings-close')
        })
    }

    handleCancel() {
        this.props.cancelSettings(this.props.options)
        ipcRenderer.send('settings-close')
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 50,
                margin: '0 5px 0 5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
            },
            btnContainer: {
                width: 60,
                height: 40,
                margin: '0 0 0 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="footer-container"
                style={styles.container}
            >
                <div
                    className="footer-btn-container"
                    style={styles.btnContainer}
                >
                    <Button
                        text="取消"
                        className="pt-fill"
                        onClick={this.handleCancel}
                    />
                </div>
                <div
                    className="footer-btn-container"
                    style={styles.btnContainer}
                >
                    <Button
                        text="确认"
                        className="pt-fill"
                        onClick={this.handleConfirm}
                    />
                </div>
            </div>
        )
    }
}

FooterBtns.propTypes = {
    options: PropTypes.object.isRequired,
    cancelSettings: PropTypes.func.isRequired,
    confirmSettings: PropTypes.func.isRequired,
}

export default FooterBtns
