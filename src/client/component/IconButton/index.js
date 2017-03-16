import React, { Component, PropTypes } from 'react';

import style from './style.css';

class IconButton extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick();
    }

    render() {
        return (
            <div className={style.root}>
                <span className={"fa " + this.props.icon}>
                </span>
                <a onClick={this.handleClick}>{this.props.label}</a>
            </div>
        );
    }
}

IconButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string
};

IconButton.defaultProps = {
    onClick(){
        console.log("on click");
    },
    icon: '',
    label: 'Label'
};

export default IconButton;