import React, { Component, PropTypes } from 'react';

class CheckBox extends Component {

    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onChange(e.target.checked);
    }


    render() {
        return (
            <label className="checkbox" htmlFor={this.props.id}>
                <input 
                    onChange={this.handleChange}
                    type="checkbox"
                    value={this.props.value}
                    checked={this.props.checked}
                    id={this.props.id} 
                    data-toggle="checkbox" 
                    className="custom-checkbox"/>

                <span className="icons">
                    <span className="icon-unchecked"></span>
                    <span className="icon-checked"></span>
                </span>
                { this.props.label }
            </label>
        );
    }
}

CheckBox.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string
};

CheckBox.defaultProps = {
    checked: false,
    id: 'checkbox',
    value: 'checkbox',
    onChange(value){
        console.log(value);
    },
    label: 'CheckBox'
};

export default CheckBox;