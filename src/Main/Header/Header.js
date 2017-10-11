import React from 'react';
import PropTypes from 'prop-types';

const { ipcRenderer, shell } = window.require('electron');

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

    showMenu() {
        ipcRenderer.send('main-header-settings-clicked')
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
            },
            btnItemHover: {
                height: 50,
                width: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f6f8fa',
                cursor: 'pointer',
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
                <div
                    className="header-btn-item"
                    style={this.state.hover === 'folder' ? styles.btnItemHover : styles.btnItem}
                    onMouseEnter={() => {this.setState({hover: 'folder'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <i
                        className="material-icons .md-42"
                    >folder_open</i>
                </div>
                <div
                    className="header-btn-item"
                    style={this.state.hover === 'website' ? styles.btnItemHover : styles.btnItem}
                    onClick={() => {shell.openExternal('www.baidu.com')}}
                    onMouseEnter={() => {this.setState({hover: 'website'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <i
                        className="material-icons .md-42"
                    >home</i>
                </div>
                <div
                    className="header-btn-item"
                    style={this.state.hover === 'settings' ? styles.btnItemHover : styles.btnItem}
                    onClick={this.showMenu}
                    onMouseEnter={() => {this.setState({hover: 'settings'})}}
                    onMouseLeave={() => {this.setState({hover: ''})}}
                >
                    <i
                        className="material-icons .md-42"
                    >settings</i>
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
}

export default Header
