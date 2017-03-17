import React, { Component, PropTypes } from 'react';

class IconLabel extends Component {
    render() {
        return (
            <div
                style={{
                    fontSize: this.props.fontSize,
                    marginRight: this.props.rootMarginRight
                }}>
                {
                    this.props.icon ? 
                        <span 
                            className={'fa ' + this.props.icon}
                            style={{
                                marginRight: this.props.spanMarginRight
                            }}></span> 
                        : 
                        ''
                }
                {this.props.label}
            </div>
        );
    }
}

IconLabel.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    fontSize: PropTypes.string,
    spanMarginRight: PropTypes.string,
    rootMarginRight: PropTypes.string,
};

IconLabel.defaultProps = {
    icon: '',
    label: 'Label',
    fontSize: '16px',
    marginRight: '0px',
    rootMarginRight: '0px'
}

export default IconLabel;