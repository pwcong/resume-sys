import React, { Component, PropTypes } from 'react';

import style from './style.css';

class Modal extends Component {

    
    render() {
        return (
            <div className={style.root + ' ' + (this.props.hide ? '' : style['root-active'])}>
                <div className={ 'animated ' + (this.props.hide ? 'hide' : 'zoomIn')}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    hide: PropTypes.bool
};

Modal.defaultProps = {
    hide: true
};

export default Modal;