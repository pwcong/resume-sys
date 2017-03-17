import React, { Component, PropTypes } from 'react';

import style from './style.css';

class SkillItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: props.isEditing,
            name: props.name,
            level: props.level
        };

        this.handleCommit = this.handleCommit.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleStartEdit = this.handleStartEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleCommit(){

        let ctx = this;

        let level = $("#slider-skill-" + this.props.index).slider("option").value

        let value = {
            name: ctx.state.name,
            level: level
        };

        let index = ctx.props.index;

        if(ctx.props.onCheck(value)){

            ctx.setState({
                isEditing: false
            });

            ctx.props.onCommit(index, value);

        }

    }

    handleRemove(){
        this.props.onRemove(this.props.index);
    }

    handleCancelEdit(){
        this.setState({
            isEditing: false
        });
    }

    handleStartEdit(){
        this.setState({
            isEditing: true
        });
    }

    handleChangeValue(key, value){

        this.setState({
            [key]: value
        });

    }

    componentDidUpdate(){

        let slider = $("#slider-skill-" + this.props.index);

        if (slider.length > 0) {
            slider.slider({
                min: 1,
                max: this.props.total,
                value: this.props.level,
                orientation: "horizontal",
                range: "min"
            });
        }

    }


    render() {
        return (
            <div 
                className={style.root + ' animated fadeIn'}
                style={{
                    marginBottom: '0px',
                    padding: '8px 16px 0px 16px'
                }}>

                <div className={style.tools}>
                    {
                        this.state.isEditing ? 
                            <div>
                                <span 
                                    className="fa fa-check"
                                    onClick={this.handleCommit}></span>
                                <span 
                                    className="fa fa-close"
                                    onClick={this.handleCancelEdit}></span>
                            </div>
                            :
                            <div>
                                <span 
                                    className="fa fa-trash"
                                    onClick={this.handleRemove}></span>
                                <span 
                                    className="fa fa-pencil"
                                    onClick={this.handleStartEdit}></span>
                            </div>
                    }
                </div>

                {
                    this.state.isEditing ?
                        <div>
                            <div>
                                <label>
                                    <strong>
                                        {this.props.namePlaceHolder}
                                    </strong>
                                    <input 
                                        defaultValue={this.props.name}
                                        onChange={ e => {
                                            this.handleChangeValue('name', e.target.value)
                                        }}
                                        type="text" 
                                        className="form-control input-sm"/>
                                </label>
                            </div>

                            <div>
                                    <label>
                                        <strong>
                                            {this.props.levelPlaceHolder}
                                        </strong>
                                    </label>
                                    <div id={"slider-skill-" + this.props.index} style={{width: '100%'}}></div>
                            </div>

                        </div>
                        :
                        <div>

                            <div>
                                {this.props.name}
                            </div>
                            
                            <div className="progress">
                                <div 
                                    className="progress-bar" 
                                    style={{
                                        width: this.props.level+'%'
                                    }}>
                                </div>
                            </div>

                        </div>
                }
                
            </div>
        );
    }
}

SkillItem.propTypes = {
    index: PropTypes.number.isRequired,
    isEditing: PropTypes.bool,
    total: PropTypes.number,
    level: PropTypes.number,
    levelPlaceHolder: PropTypes.string,
    name: PropTypes.string,
    namePlaceHolder: PropTypes.string,
    onCommit: PropTypes.func,
    onRemove: PropTypes.func,
    onCheck: PropTypes.func
};

SkillItem.defaultProps = {
    index: 0,
    isEditing: false,
    total: 100,
    level: 0,
    levelPlaceHolder: 'Level PlaceHolder',
    name: 'Name',
    namePlaceHolder: 'Name PlaceHolder',
    onCommit(index, value){
        console.log(index, value);
    },
    onRemove(index){
        console.log('remove',index);
    },
    onCheck(value){
        return true;
    }
};

export default SkillItem;