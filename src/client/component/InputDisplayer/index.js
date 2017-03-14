import React, { Component, PropTypes } from 'react';

import style from './style.css';

class InputDisplayer extends Component {

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
            this.setState({
                isEditing: false
            });

            this.props.onCommit(value);
        }

        

    }

    render() {
        return (
            <div className={style.root}>
                { 
                    this.props.icon ? 
                        <span className={'fa ' + this.props.icon}></span> 
                        : 
                        ''
                }     
                { 
                    this.state.isEditing ? 
                        <div>
                            <input className="form-control" type="text" ref="input" defaultValue={this.props.defaultValue}/>    
                            <span className="fa fa-check" onClick={this.handleCommitEdit}></span>
                            <span className="fa fa-close" onClick={this.handleCancleEdit}></span>
                        </div>
                        :
                        <div
                            style={{
                                fontSize: this.props.fontSize
                            }}>
                            {this.props.defaultValue}
                            <span className={"fa fa-edit " + style['btn-edit'] } onClick={this.handleStartEdit}></span>
                        </div>
                }
            </div>
        );
    }
}

InputDisplayer.propTypes = {
    icon: PropTypes.string,
    isEditing: PropTypes.bool,
    defaultValue: PropTypes.string,
    fontSize: PropTypes.string,
    onCommit: PropTypes.func
};

InputDisplayer.defaultProps = {
    icon: '',
    isEditing: false,
    defaultValue: '',
    fontSize: '18px',
    onCommit(value){
        console.log(value);
    }
};

export default InputDisplayer;