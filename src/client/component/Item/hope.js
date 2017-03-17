import React, { Component, PropTypes } from 'react';

import style from './style.css';

class HopeItem extends Component {
    
    constructor(props){
        
        super(props);

        this.state = {
            isEditing: this.props.isEditing,
            job: this.props.job,
            salary: this.props.salary,
            type: this.props.type,
            city: this.props.city
        };

        this.handleCommit = this.handleCommit.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleStartEdit = this.handleStartEdit.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            job: nextProps.job,
            salary: nextProps.salary,
            type: nextProps.type,
            city: nextProps.city
        });
    }

    handleCommit(){

        let ctx = this;

        let value = {
            job: ctx.state.job,
            salary: ctx.state.salary,
            city: ctx.state.city,
            type: ctx.state.type
        };

        if(ctx.props.onCheck(value)){
            ctx.props.onCommit(value);

            ctx.setState({
                isEditing: false
            });


        }

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
                            <div>
                                <label>
                                    <strong>
                                        {this.props.jobPlaceHolder}
                                    </strong>
                                    <input 
                                        defaultValue={this.props.job}
                                        onChange={ e => {
                                            this.handleChangeValue('job', e.target.value)
                                        }}
                                        type="text" 
                                        className="form-control input-sm"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <strong>
                                        {this.props.typePlaceHolder}
                                    </strong>
                                    <input
                                        defaultValue={this.props.type}
                                        onChange={ e => {
                                            this.handleChangeValue('type', e.target.value)
                                        }}
                                        type="text" 
                                        className="form-control input-sm"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <strong>
                                        {this.props.cityPlaceHolder}
                                    </strong>
                                    <input
                                        defaultValue={this.props.city}
                                        onChange={ e => {
                                            this.handleChangeValue('city', e.target.value)
                                        }}
                                        type="text" 
                                        className="form-control input-sm"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <strong>
                                        {this.props.salaryPlaceHolder}
                                    </strong>
                                    <input
                                        defaultValue={this.props.salary}
                                        onChange={ e => {
                                            this.handleChangeValue('salary', e.target.value)
                                        }}
                                        type="text" 
                                        className="form-control input-sm"/>
                                </label>
                            </div>

                        </div>
                        :
                        <div>
                            <div className={style.display}>
                                <strong>
                                    <span className="fa fa-user"></span>
                                    {this.props.jobPlaceHolder}
                                </strong>
                                {this.props.job}
                            </div>
                            <div className={style.display}>
                                <strong>
                                    <span className="fa fa-arrows"></span>
                                    {this.props.typePlaceHolder}
                                </strong>
                                {this.props.type}
                            </div>
                            <div className={style.display}>
                                <strong>
                                    <span className="fa fa-map-signs"></span>
                                    {this.props.cityPlaceHolder}
                                </strong>
                                {this.props.city}
                            </div>
                            <div className={style.display}>
                                <strong>
                                    <span className="fa fa-money"></span>
                                    {this.props.salaryPlaceHolder}
                                </strong>
                                {this.props.salary}
                            </div>
                        </div>
                }
                
            </div>
        );
    }
}

HopeItem.propTypes = {
    isEditing: PropTypes.bool,
    city: PropTypes.string,
    cityPlaceHolder: PropTypes.string,
    job: PropTypes.string,
    jobPlaceHolder: PropTypes.string,
    salary: PropTypes.string,
    salaryPlaceHolder: PropTypes.string,
    type: PropTypes.string,
    typePlaceHolder: PropTypes.string,
    onCommit: PropTypes.func,
    onCheck: PropTypes.func
};

HopeItem.defaultProps = {
    isEditing: false,
    city: 'City',
    cityPlaceHolder: 'City PlaceHolder',
    job: 'Job',
    jobPlaceHolder: 'Job PlaceHolder',
    salary: 'Salary',
    salaryPlaceHolder: 'Salary PlaceHolder',
    type: 'Type',
    typePlaceHolder: 'Type PlaceHolder',
    onCommit(value){
        console.log(value);
    },
    onCheck(value){
        return true;
    }
};

export default HopeItem;