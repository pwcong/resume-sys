import React, { Component, PropTypes } from 'react';

import style from './style.css';

class Editor extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: this.props.isEditing
        };

        this.handleCancleEdit = this.handleCancleEdit.bind(this);
        this.handleStartEdit = this.handleStartEdit.bind(this);
        this.handleCommitEdit = this.handleCommitEdit.bind(this);

    }

    handleStartEdit(){
        this.setState({
            isEditing: true
        });
    }

    handleCancleEdit(){
        this.setState({
            isEditing: false
        });
    }

    handleCommitEdit(){

        let value = this.refs.input.value;

        if(value){

            if(this.props.onCheck(value)){
                this.setState({
                    isEditing: false
                });

                this.props.onCommit(value);
            }

        }

    }

    render() {
        return (
            <div 
                className={style.root}
                style={{
                    left: this.props.left
                }}>
                { 
                    this.props.icon ? 
                        <span className={'fa ' + this.props.icon}></span> 
                        : 
                        ''
                }     
                { 
                    this.state.isEditing ? 
                        <div>
                            <input 
                                placeholder={this.props.placeholder}
                                className="form-control" 
                                type="text" 
                                ref="input" 
                                defaultValue={this.props.handleDefaultValue(this.props.defaultValue)}
                                style={{
                                    width: this.props.inputWidth,
                                    fontSize: this.props.fontSize
                                }}/>    
                            <span className="fa fa-check" onClick={this.handleCommitEdit}></span>
                            <span className="fa fa-close" onClick={this.handleCancleEdit}></span>
                        </div>
                        :
                        <div>
                            <div
                                style={{
                                    fontSize: this.props.fontSize
                                }}>
                                {this.props.handleDefaultValue(this.props.defaultValue)}
                            </div>
                            <span className={"fa fa-edit " + style['btn-edit'] } onClick={this.handleStartEdit}></span>
                        </div>
                }
            </div>
        );
    }
}

Editor.propTypes = {
    id: PropTypes.string,
    isDatePicker: PropTypes.bool,
    dateFormat: PropTypes.string,
    placeholder: PropTypes.string,
    inputWidth: PropTypes.string,
    left: PropTypes.string,
    icon: PropTypes.string,
    isEditing: PropTypes.bool,
    defaultValue: PropTypes.string,
    handleDefaultValue: PropTypes.func,
    fontSize: PropTypes.string,
    onCommit: PropTypes.func,
    onCheck: PropTypes.func,
};

Editor.defaultProps = {
    placeholder: '',
    inputWidth: '',
    left: '0px',
    icon: '',
    isEditing: false,
    defaultValue: '',
    handleDefaultValue(value){
        return value;
    },
    fontSize: '14px',
    onCommit(value){
        console.log(value);
    },
    onCheck(value){
        return true;
    }
};

export default Editor;