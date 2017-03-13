import React, { Component, PropTypes } from 'react';

import style from './style.css';

export const TYPE = {
    default: 'danger',
    primary: 'primary',
    info: 'info',
    danger: 'danger',
    success: 'success',
    warning: 'warning'
}

const COLOR = {
    [TYPE.default]: '#34495e',
    [TYPE.primary]: '#1abc9c',
    [TYPE.info]: '#3498db',
    [TYPE.danger]: '#e74c3c',
    [TYPE.success]: '#2ecc71',
    [TYPE.warning]: '#f1c40f',
}

const ICON = {

    [TYPE.default]: 'fa-smile-o',
    [TYPE.primary]: 'fa-sun-o',
    [TYPE.info]: 'fa-info-circle',
    [TYPE.danger]: 'fa-close',
    [TYPE.success]: 'fa-check',
    [TYPE.warning]: 'fa-warning'

}

class Message extends Component {
    render() {
        return (
            <div className={style.root + " " + (this.props.hide? style.hide : '')}>
                <div 
                    className={style.content}
                    style={{
                        backgroundColor: COLOR[this.props.type]
                    }}
                    >
                    <span className={"fa " + ICON[this.props.type]}></span>
                    { this.props.content }
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    hide: PropTypes.bool,
    content: PropTypes.string,
    type: PropTypes.string
};

Message.defaultProps = {
    hide: false,
    content: '',
    type: TYPE.default
};

export default Message;