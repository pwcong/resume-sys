import React, { Component, PropTypes } from 'react';

import style from './style.css';

class RadioButtons extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: this.props.isEditing,
            value: this.props.defaultValue
        };

        this.handleCancleEdit = this.handleCancleEdit.bind(this);
        this.handleStartEdit = this.handleStartEdit.bind(this);
        this.handleCommitEdit = this.handleCommitEdit.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
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

    handleChangeRadio(e){
        this.setState({
            value: e.target.value
        });
    }

    handleCommitEdit(){

        let ctx = this;

        let value = ctx.state.value;

        if(ctx.props.onCheck(value)){
            ctx.setState({
                isEditing: false
            });

            ctx.props.onCommit(value);
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
                            {
                                this.props.options.map(item => {
                                    
                                    return (

                                        <label 
                                            style={{
                                                width: this.props.inputWidth,
                                                fontSize: this.props.fontSize
                                            }}
                                            key={this.props.name+item.value}
                                            className="radio" 
                                            htmlFor={this.props.name+item.value}>
                                            <input 
                                                onChange={this.handleChangeRadio}
                                                type="radio" 
                                                name={this.props.name}
                                                value={item.value} 
                                                id={this.props.name+item.value} 
                                                data-toggle="radio" 
                                                className="custom-radio"/>
                                                    <span className="icons">
                                                        <span className="icon-unchecked">
                                                        </span>
                                                        <span className="icon-checked">
                                                        </span>
                                                    </span>
                                                <span
                                                    style={{
                                                        position: 'relative',
                                                        left: '-8px'
                                                    }}>
                                                    {item.key}
                                                </span>
                                        </label>
                                    );


                                    
                                })
                            }

  
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

RadioButtons.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    inputWidth: PropTypes.string,
    left: PropTypes.string,
    icon: PropTypes.string,
    isEditing: PropTypes.bool,
    handleDefaultValue: PropTypes.func,
    fontSize: PropTypes.string,
    onCommit: PropTypes.func,
    onCheck: PropTypes.func,
};

RadioButtons.defaultProps = {
    options: [],
    name: '',
    placeholder: '',
    inputWidth: '',
    left: '0px',
    icon: '',
    isEditing: false,
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

export default RadioButtons;