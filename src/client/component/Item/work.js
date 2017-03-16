import React, { Component, PropTypes } from 'react';

import style from './style.css';

class WorkItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: this.props.isEditing,
            name: this.props.name,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            job: this.props.job,
            summary: this.props.summary
        };

        this.handleCommit = this.handleCommit.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleStartEdit = this.handleStartEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleCommit(){

        let ctx = this;

        let value = {
            name: ctx.state.name,
            startDate: ctx.refs.inputStartDate.value,
            endDate: ctx.refs.inputEndDate.value,
            job: ctx.state.job,
            summary: ctx.state.summary
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
                 
        let ctx = this;

        if(ctx.state.isEditing){
            $('#datepicker-work-input-daterange-' + ctx.props.index).datepicker({
                format: ctx.props.dateFormat
            });
        }
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
                                        {this.props.datePlaceHolder}
                                    </strong>
                                    <div
                                        className="input-group input-daterange" 
                                        id={'datepicker-work-input-daterange-' + this.props.index}>
                                        <input 
                                            ref="inputStartDate"
                                            type="text" 
                                            onChange={ e => {
                                                this.handleChangeValue('startDate', e.target.value)
                                            }}
                                            className="input-sm form-control" 
                                            defaultValue={this.props.startDate}
                                            name="start" />
                                        <span className="input-group-addon">TO</span>
                                        <input 
                                            ref="inputEndDate"
                                            onChange={ e => {
                                                this.handleChangeValue('endDate', e.target.value)
                                            }}
                                            type="text" 
                                            defaultValue={this.props.endDate}
                                            className="input-sm form-control" 
                                            name="end" />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <strong>
                                        {this.props.summaryPlaceHolder}
                                    </strong>
                                    <textarea 
                                        className="form-control" 
                                        cols="41" 
                                        rows="3" 
                                        defaultValue={this.props.summary}
                                        onChange={ e => {
                                            this.handleChangeValue('summary', e.target.value)
                                        }}
                                        >
                                    </textarea>
                                </label>
                            </div>

                        </div>
                        :
                        <div>
                            <div style={{}}>
                                <strong style={{fontSize: '24px'}}>
                                    {this.props.name}
                                </strong>
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    top: '-8px',
                                    color: 'grey',
                                    display: 'flex',
                                    fontSize: '14px',
                                    justifyContent: 'space-between'
                                }}>

                                <div>
                                    <span className="fa fa-user" style={{marginRight: '4px'}}></span>
                                    {this.props.job}
                                </div>
                                <div>
                                    <span className="fa fa-clock-o" style={{marginRight: '4px'}}></span>
                                    {
                                        this.props.startDate + ' - ' + this.props.endDate
                                    }
                                </div>

                            </div>
                        
                            <div style={{fontSize: '16px'}}>
                                {this.props.summary}
                            </div>
                        </div>
                }
                
            </div>
        );
    }
}

WorkItem.propTypes = {
    index: PropTypes.number.isRequired,
    isEditing: PropTypes.bool,
    name: PropTypes.string,
    namePlaceHolder: PropTypes.string,
    datePlaceHolder: PropTypes.string,
    dateFormat: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    job: PropTypes.string,
    jobPlaceHolder: PropTypes.string,
    summary: PropTypes.string,
    summaryPlaceHolder: PropTypes.string,
    onCommit: PropTypes.func,
    onRemove: PropTypes.func,
    onCheck: PropTypes.func
};

WorkItem.defaultProps = {
    index: 0,
    isEditing: false,
    name: 'Name',
    namePlaceHolder: 'Name PlaceHolder',
    datePlaceHolder: 'Date PlaceHolder',
    dateFormat: 'yyyy/mm/dd',
    startDate: '2017/02/01',
    endDate: '2017/02/01',
    job: 'Job',
    jobPlaceHolder: 'Job PlaceHolder',
    summary: 'Summary',
    summaryPlaceHolder: 'Summary PlaceHolder',
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

export default WorkItem;