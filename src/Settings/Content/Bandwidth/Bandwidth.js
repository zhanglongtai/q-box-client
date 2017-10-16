import React from "react"
import PropTypes from "prop-types"
// import { ChoiceGroup } from "office-ui-fabric-react/lib/ChoiceGroup"
// import { TextField as Text } from "office-ui-fabric-react/lib/TextField"
import CheckCircle from "../../CheckCircle"
import TextField from "../../TextField"
import { log } from "../../../utils"

function verifyInputSpeed(speed) {
    // log(speed)
    if(speed !== '') {
        const tables = '1234567890.'
        
        // first letter can not be '.'
        if(speed[0] === '.') {
            return false
        }
        // log('first letter pass')

        // speed value contains only number and '.'
        // amount of '.' is 1 or 0
        let pointNum = 0
        for(let s of speed) {
            if(tables.includes(s) === false) {
                return false
            }

            if(s === '.') {
                pointNum += 1

                if(pointNum > 1) {
                    return false
                }
            }
        }
        // log('contains pass')
        // log('point num pass')

        // two digits after the decimal point
        if(speed.includes('.')) {
            const pointIndex = speed.indexOf('.')
            const lastIndex = speed.length - 1
            if((lastIndex - pointIndex) > 2) {
                return false
            }
            // log('two digits pass')
        }

        return true
    } else {
        return true
    }
}

class Bandwidth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 250,
                display: 'flex',
                flexDirection: 'column',
            },
            title: {
                height: 20,
                margin: '10px 0 10px 0',
            },
            optionContainer: {
                width: 300,
                height: 32,
                display: 'flex',
                alignItems: 'center',
            },
            inputContainer: {
                width: 120,
                height: 30,
                display: 'flex',
                alignItems: 'center',
            },
        }

        return (
            <div
                className="bandwidth-container"
                style={styles.container}
            >
                {/* 下载速度 */}
                <div
                    className="bandwidth-option-title"
                    style={styles.title}
                >下载速度</div>
                <div
                    className="bandwidth-option-container"
                    style={styles.optionContainer}
                >
                    <CheckCircle
                        style={{width: 120}}
                        text="不限制"
                        selected={this.props.downloadLimit === false}
                        onToggle={() => {
                            this.props.setDownloadLimit(false)
                            this.props.setDownloadLimitSpeed(this.props.downloadLimitSpeedDefault)
                        }}
                    />
                </div>
                <div
                    className="bandwidth-option-container"
                    style={styles.optionContainer}
                >
                    <CheckCircle
                        style={{width: 100}}
                        text="限制为:"
                        selected={this.props.downloadLimit === true}
                        onToggle={this.props.setDownloadLimit.bind(null, true)}
                    />
                    <div
                        className="bandwidth-option-input"
                        style={styles.inputContainer}
                    >
                        <TextField
                            value={
                                this.props.downloadLimit === true
                                ?
                                this.props.downloadLimitSpeed
                                :
                                this.props.downloadLimitSpeedDefault
                            }
                            disabled={this.props.downloadLimit === false}
                            handleChange={(newValue) => {
                                log('verify', verifyInputSpeed(newValue))
                                if (verifyInputSpeed(newValue)) {
                                    this.props.setDownloadLimitSpeed(newValue)
                                }
                            }}
                        />
                    </div>
                    <div
                        style={{
                            margin: '0 0 0 5px',
                            fontSize: '14px',
                        }}
                    >KB/S</div>
                </div>
                {/* 上传速度 */}
                <div
                    className="bandwidth-option-title"
                    style={styles.title}
                >上传速度</div>
                <div
                    className="bandwidth-option-container"
                    style={styles.optionContainer}
                >
                    <CheckCircle
                        style={{width: 120}}
                        text="不限制"
                        selected={this.props.uploadLimit === false}
                        onToggle={() => {
                            this.props.setUploadLimit(false)
                            this.props.setUploadLimitSpeed(this.props.uploadLimitSpeedDefault)
                        }}
                    />
                </div>
                <div
                    className="bandwidth-option-container"
                    style={styles.optionContainer}
                >
                    <CheckCircle
                        style={{width: 100}}
                        text="限制为:"
                        selected={this.props.uploadLimit === true}
                        onToggle={this.props.setUploadLimit.bind(null, true)}
                    />
                    <div
                        className="bandwidth-option-input"
                        style={styles.inputContainer}
                    >
                        <TextField
                            value={
                                this.props.uploadLimit === true
                                ?
                                this.props.uploadLimitSpeed
                                :
                                this.props.uploadLimitSpeedDefault
                            }
                            disabled={this.props.uploadLimit === false}
                            handleChange={(newValue) => {
                                log('verify', verifyInputSpeed(newValue))
                                if (verifyInputSpeed(newValue)) {
                                    this.props.setUploadLimitSpeed(newValue)
                                }
                            }}
                        />
                    </div>
                    <div
                        style={{
                            margin: '0 0 0 5px',
                            fontSize: '14px',
                        }}
                    >KB/S</div>
                </div>
            </div>
        )
    }
}

Bandwidth.propTypes = {
    downloadLimit: PropTypes.bool.isRequired,
    downloadLimitSpeedDefault: PropTypes.string.isRequired,
    downloadLimitSpeed: PropTypes.string.isRequired,
    uploadLimit: PropTypes.bool.isRequired,
    uploadLimitSpeedDefault: PropTypes.string.isRequired,
    uploadLimitSpeed: PropTypes.string.isRequired,
    lanSync: PropTypes.bool.isRequired,
    setDownloadLimit: PropTypes.func.isRequired,
    setDownloadLimitSpeed: PropTypes.func.isRequired,
    setUploadLimit: PropTypes.func.isRequired,
    setUploadLimitSpeed: PropTypes.func.isRequired,
}

export default Bandwidth
