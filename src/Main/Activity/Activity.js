import React from 'react'
import PropTypes from 'prop-types'
import ActivityItem from "./ActivityItem";
import { log } from "../../utils";

/*
    fileList item data format:
    {
        fileName: 'This is a text.txt',
        actor: 'Tom',
        action: '添加',
        actionTime: '2017-10-12',
        fileURL: 'http://file-url'
    }
*/

// function scrollOn() {

// }

class Activity extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.activityList()
    }

    render() {
        const styles = {
            container: {
                display: this.props.content === 'recentActivity' ? '' : 'none',
                width: 400,
                height: 498,
            },
            listContainer: {
                width: 400,
                height: 498,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflowY: 'auto',
                overflowX: 'hidden',
            },
            msgContainer: {
                width: 400,
                height: 498,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconContainer: {
                width: 200,
                height: 200,
                margin: '0 0 20px 0',
            },
        }

        let content = null
        if (this.props.isFetching) {
            content = (
                <div className="activity-msg">
                    正在获取数据
                </div>
            )
        } else {
            if (this.props.receiveSuccess) {
                content = (
                    <div
                        className="activity-file-list"
                        style={styles.listContainer}
                    >
                        {
                            this.props.fileList.map((item, index) => {
                                return (
                                    <ActivityItem
                                        key={index}
                                        fileName={item.fileName}
                                        actor={item.actor}
                                        action={item.action}
                                        actionTime={item.actionTime}
                                        fileURL={item.fileURL}
                                        filePath={item.filePath}
                                    />
                                )
                            })
                        }
                    </div>
                )
            } else {
                content = (
                    <div
                        className="activity-msg"
                        style={styles.msgContainer}
                    >
                        <div
                            className="activity-msg-icon-container"
                            style={styles.iconContainer}
                        >
                            <i className="material-icons .md-180">info_outline</i>
                        </div>
                        <p>获取失败</p>
                    </div>
                )
            }
        }

        return (
            <div
                className="activity-container"
                style={styles.container}
            >
                {content}
            </div>
        )
    }
}

Activity.propTypes = {
    content: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    receiveSuccess: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    fileList: PropTypes.array.isRequired,
    activityList: PropTypes.func.isRequired,
}

export default Activity
