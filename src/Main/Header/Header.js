import React from 'react'
import PropTypes from 'prop-types'
import { log } from '../../utils'

const { ipcRenderer, shell } = window.require('electron')

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: '', // 'inform', 'recentActivity', 'folder', 'website', 'settings'
        }

        this.changeContent = this.changeContent.bind(this)
    }

    changeContent(content) {
        this.props.setContent(content)
    }

    showMenu(event) {
        const position = {
            x: event.screenX,
            y: event.screenY,
        }

        // const h = event.currentTarget.clientHeight
        // const w = event.currentTarget.clientWidth

        // position.x += h / 2
        // position.y += w / 2

        ipcRenderer.send('main-header-settings-clicked', position)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 50,
                borderBottom: '1px solid #d1d5da',
                display: 'flex',
                justifyContent: 'space-between',
            },
            tabsContainer: {
                height: 50,
                display: 'flex',
                alignItems: 'center',
            },
            tabItem: {
                height: 50,
            },
            tabItemHover: {
                height: 50,
                backgroundColor: '#f6f8fa',
                cursor: 'pointer',
            },
            tabText: {
                margin: '0 10px 0 10px',
                height: 45,
                lineHeight: '45px',
            },
            tabTextSelected: {
                margin: '0 10px 0 10px',
                height: 45,
                lineHeight: '45px',
                color: 'blue',
            },
            tabSlider: {
                margin: '0 10px 0 10px',
                height: 5,
            },
            tabSliderSelected: {
                margin: '0 10px 0 10px',
                height: 5,
                backgroundColor: 'blue',
            },
            btnsContainer: {
                height: 50,
                display: 'flex',
                alignItems: 'center',
            },
            btnItem: {
                height: 50,
                width: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            },
            btnItemHover: {
                height: 50,
                width: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f6f8fa',
                cursor: 'pointer',
                position: 'relative',
            },
            btnTooltip: {
                display: 'none',
                height: 20,
                minWidth: 50,
                width: 80,
                maxWidth: 100,
                lineHeight: '20px',
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                right: '50%',
                border: '1px solid',
                fontSize: 12,
                zIndex: 10,
                backgroundColor: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px',
            },
            btnTooltipHover: {
                height: 20,
                minWidth: 50,
                width: 80,
                maxWidth: 100,
                lineHeight: '20px',
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                right: '50%',
                border: '1px solid',
                fontSize: 12,
                zIndex: 10,
                backgroundColor: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px',
            },
        }

        const tabs = (
            <div
                className="header-tabs-container"
                style={styles.tabsContainer}
            >
                <div
                    className="header-tab-item"
                    onClick={this.changeContent.bind(null, 'inform')}
                    style={this.state.hover === 'inform' ? styles.tabItemHover : styles.tabItem}
                    onMouseEnter={() => {this.setState({hover: 'inform'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <p
                        className="header-tab-item-text"
                        style={this.props.content === 'inform' ? styles.tabTextSelected : styles.tabText}
                    >通知</p>
                    <div
                        className="header-tab-item-slider"
                        style={this.props.content === 'inform' ? styles.tabSliderSelected : styles.tabSlider}
                    ></div>
                </div>
                <div
                    className="header-tab-item"
                    onClick={this.changeContent.bind(null, 'recentActivity')}
                    style={this.state.hover === 'recentActivity' ? styles.tabItemHover : styles.tabItem}
                    onMouseEnter={() => {this.setState({hover: 'recentActivity'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <p
                        className="header-tab-item-text"
                        style={this.props.content === 'recentActivity' ? styles.tabTextSelected : styles.tabText}
                    >最近使用的文件</p>
                    <div
                        className="header-tab-item-slider"
                        style={this.props.content === 'recentActivity' ? styles.tabSliderSelected : styles.tabSlider}
                    ></div>
                </div>
            </div>
        )

        const actions = (
            <div
                className="header-btns-container"
                style={styles.btnsContainer}
            >
                {/* folder action */}
                <div
                    className="header-btn-item"
                    style={this.state.hover === 'folder' ? styles.btnItemHover : styles.btnItem}
                    onClick={() => {shell.openItem(this.props.folderPath)}}
                    onMouseEnter={() => {this.setState({hover: 'folder'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <i
                        className="material-icons"
                        style={{
                            fontSize: 24,
                        }}
                    >folder_open</i>
                    <p
                        className="header-btn-item-tooltip"
                        style={this.state.hover === 'folder' ? styles.btnTooltipHover : styles.btnTooltip}
                    >打开文件夹</p>
                </div>
                {/* website action */}
                <div
                    className="header-btn-item"
                    style={this.state.hover === 'website' ? styles.btnItemHover : styles.btnItem}
                    onClick={() => {shell.openExternal(this.props.website)}}
                    onMouseEnter={() => {this.setState({hover: 'website'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <i
                        className="material-icons"
                        style={{
                            fontSize: 24,
                        }}
                    >home</i>
                    <p
                        className="header-btn-item-tooltip"
                        style={this.state.hover === 'website' ? styles.btnTooltipHover : styles.btnTooltip}
                    >访问个人主页</p>
                </div>
                {/* settings action */}
                <div
                    className="header-btn-item"
                    style={this.state.hover === 'settings' ? styles.btnItemHover : styles.btnItem}
                    onClick={this.showMenu}
                    onMouseEnter={() => {this.setState({hover: 'settings'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <i
                        className="material-icons"
                        style={{
                            fontSize: 24,
                        }}
                    >settings</i>
                    <p
                        className="header-btn-item-tooltip"
                        style={this.state.hover === 'settings' ? styles.btnTooltipHover : styles.btnTooltip}
                    >设置</p>
                </div>
            </div>
        )

        return (
            <div
                className="header-container"
                style={styles.container}
            >
                {tabs}
                {actions}
            </div>
        )
    }
}

Header.propTypes = {
    content: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    folderPath: PropTypes.string.isRequired,
}

export default Header
