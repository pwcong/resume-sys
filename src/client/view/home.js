import React from 'react';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import style from './style/home.css';

import Message, { TYPE } from '../component/Message';
import Modal from '../component/Modal';
import Editor from '../component/Editor';
import DatePicker from '../component/Editor/datepicker';
import RadioButtons from '../component/Editor/radiobuttons';

import { imgUrl, translated } from '../config/const';

import {
	toGetResume
} from '../actions/resume';

import {
	INITIAL_STATE_RESUME
} from '../reducer/resume';

class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			hideModal: true,
			hideMessage: true,
			messageContent: '',
			messageType: TYPE.default,
			resume: INITIAL_STATE_RESUME
		};

		this.handleShowEditAvatarModal = this.handleShowEditAvatarModal.bind(this);
		this.handleHideEditAvatarModal = this.handleHideEditAvatarModal.bind(this);
		this.handleEditAvatar = this.handleEditAvatar.bind(this);

		this.handleEditInfo = this.handleEditInfo.bind(this);
		
	}


	handleShowEditAvatarModal(){
		this.setState({
			hideModal: false
		});
	}

	handleHideEditAvatarModal(){
		this.setState({
			hideModal: true
		});
	}

	handleEditAvatar(){

		let ctx = this;

		ctx.setState({
			hideModal: true,
			resume: Object.assign({}, ctx.state.resume, {
				info: Object.assign({}, ctx.state.resume.info, {
					avatar: ctx.refs.inputAvatar.value
				})
			})

		});

	}
	
	handleEditInfo(key, value){

		let ctx = this;

		ctx.setState({

			resume: Object.assign({}, ctx.state.resume, {
				info: Object.assign({}, ctx.state.resume.info, {
					[key]: value
				})
			})

		});

	}


	componentWillMount(){
		let ctx = this;

		if(!ctx.props.userstate.isLogined)
			hashHistory.push('/');
		
	}

	componentDidMount(){
		let ctx = this;

		if(ctx.props.userstate.uid){

			ctx.props.dispatch(toGetResume(
				ctx.props.userstate.uid,
				() => {},
				resume => {
					showMessage(ctx, translated.getResumeSuccessfully, TYPE.success, 2000);
					ctx.setState({
						resume
					})
				},
				err => {
					showMessage(ctx, translated.getResumeFailed, TYPE.danger, 2000);
				}
			));
		}

	}

	render(){

		return (
			<div className={style.root}>
				<Modal hide={this.state.hideModal}>
					<form className={style['modal-edit-avatar']}>
						<div className="form-group">
							<input type="text" ref="inputAvatar" className="form-control" placeholder={translated.avatarUrl}/>
						</div>
						<button 
							type="button" 
							className="btn btn-block btn-large btn-info"
							onClick={this.handleEditAvatar}
							>
							{translated.check}
						</button>
						<button 
							type="button" 
							className="btn btn-block btn-large"
							onClick={this.handleHideEditAvatarModal}
							>
							{translated.cancel}
						</button>
					</form>
					
				</Modal>
				<Message 
					hide={this.state.hideMessage}
					content={this.state.messageContent} 
					type={this.state.messageType}/>
				<div 
					className={style.banner + ' row'} 
					style={{
						backgroundImage: 'url(' + imgUrl.banner + ')'
					}}>

				</div>
				<div className={style.info + ' row'}>
					<div className={style.avatar}>
						<div>
							<div
								style={{
									backgroundImage: 'url(' + this.state.resume.info.avatar + ')'
								}}>
								<span 
									className="fa fa-edit"
									onClick={this.handleShowEditAvatarModal}
									>
								</span>
									
							
							</div>
						</div>
					</div>
					<div className={style.row} style={{marginTop: '48px'}}></div>
					<div className={style.row}>
						<Editor
							placeholder={translated.name}
							inputWidth="200px"
							left="12px" 
							fontSize="36px"
							onCommit={value => {
								this.handleEditInfo('name', value);
							}}
							defaultValue={this.state.resume.info.name}
							/>
					</div>

					<div className={style.row}>
						<RadioButtons 
							options={[
								{ key: translated.unknown, value: 0},
								{ key: translated.male, value: 1},
								{ key: translated.female, value: 2},
							]}
							onCommit={value => {
								this.handleEditInfo('sex', parseInt(value));
							}}
							name="radio-sex"
							icon="fa-transgender"
							defaultValue={this.state.resume.info.sex}
							handleDefaultValue={ value => handleSexNum(value) }/>
						<DatePicker
							onCommit={value => {
								this.handleEditInfo('birthday', value);
							}}
							id="datepicker-birthday"
							isDatePicker={true}
							inputWidth="110px"
							icon="fa-birthday-cake"
							defaultValue={this.state.resume.info.birthday}
							handleDefaultValue={(value) => {
								let date = new Date(value);
								return date.getFullYear() + '-' + (handleMonthOrDate(date.getMonth()+1)) + '-' + handleMonthOrDate(date.getDate());
							}}/>

						<Editor
							onCommit={value => {
								this.handleEditInfo('record', value);
							}}
							inputWidth="100px"
							placeholder={translated.record}
							icon="fa-mortar-board"
							defaultValue={this.state.resume.info.record}/>

						<Editor
							onCommit={value => {
								this.handleEditInfo('city', value);
							}}
							placeholder={translated.city}
							inputWidth="100px"
							icon="fa-map-marker"
							defaultValue={this.state.resume.info.city}/>
					</div>

					<div className={style.row}>
						<Editor
							onCommit={value => {
								this.handleEditInfo('phone', value);
							}}
							placeholder={translated.phone}
							icon="fa-phone"
							defaultValue={this.state.resume.info.phone}/>
						<Editor
							onCommit={value => {
								this.handleEditInfo('email', value);
							}}
							placeholder={translated.email}
							icon="fa-envelope"
							defaultValue={this.state.resume.info.email}/>

						<Editor
							onCommit={value => {
								this.handleEditInfo('github', value);
							}}
							placeholder={translated.github}
							icon="fa-github"
							defaultValue={this.state.resume.info.github}/>
						<Editor
							onCommit={value => {
								this.handleEditInfo('blog', value);
							}}
							placeholder={translated.blog}
							icon="fa-home"
							defaultValue={this.state.resume.info.blog}/>
					</div>
				</div>
			</div>
		)
		
	}


}

function handleSexNum(sex){
	switch(sex){

		case 1:
			return translated.male;
		case 2:
			return translated.female;
		default:
			return translated.unknown;

	}
}

function handleMonthOrDate(v){
	return v.length > 1 ? v : '0'+v;
}

function showMessage(ctx, content, type, time){
	ctx.setState({
		hideMessage: false,
		messageContent: content,
		messageType: type
	});
	setTimeout(() => {
		ctx.setState({
			hideMessage: true
		});
	}, time);
}


function select(state){
	return ({
		userstate: state.userstate,
		resume: state.resume
	});
}

export default connect(select)(Home);