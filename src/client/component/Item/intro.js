import React, { Component, PropTypes } from 'react';

import style from './style.css';

class IntroItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: props.isEditing,
            intro: props.intro
        };

        this.handleCommit = this.handleCommit.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleStartEdit = this.handleStartEdit.bind(this);

        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleCommit(){

        let ctx = this;

        let value = {
            intro: ctx.state.intro,
        };

        if(ctx.props.onCheck(value)){

            ctx.setState({
                isEditing: false
            });

            ctx.props.onCommit(value);

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


    render() {
        return (
            <div className={style.root + ' animated fadeIn'}>

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
                                    className="fa fa-pencil"
                                    onClick={this.handleStartEdit}></span>
                            </div>
                    }
                </div>

                {
                    this.state.isEditing ?
                        <div>             
                            <textarea 
                                style={{
                                    marginTop: '32px',
                                    width: '100%'
                                }}
                                className="form-control" 
                                cols="41" 
                                rows="5" 
                                defaultValue={this.props.intro}
                                onChange={ e => {
                                    this.handleChangeValue('intro', e.target.value)
                                }}
                                >
                            </textarea>

                        </div>
                        :
                        <div style={{marginBottom: '8px'}}>
                            {this.props.intro}
                        </div>
                }
                
            </div>
        );
    }
}

IntroItem.propTypes = {
    isEditing: PropTypes.bool,
    intro: PropTypes.string,
    introPlaceHolder: PropTypes.string,
    onCommit: PropTypes.func,
    onCheck: PropTypes.func
};

IntroItem.defaultProps = {
    isEditing: false,
    intro: 'Introduction',
    introPlaceHolder: 'Introduction PlaceHolder',
    onCommit(value){
        console.log(value);
    },
    onCheck(value){
        return true;
    }
};

export default IntroItem;