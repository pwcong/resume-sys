import React from 'react';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import style from './style/home.css';

import Message, { TYPE } from '../component/Message';
import Modal from '../component/Modal';
import Editor from '../component/Editor';
import DatePicker from '../component/Editor/datepicker';
import RadioButtons from '../component/Editor/radiobuttons';
import IconButton from '../component/IconButton';
import CheckBox from '../component/CheckBox';
import ExperienceItem from '../component/Item/experience';
import WorkItem from '../component/Item/work';
import EducationItem from '../component/Item/education';

import { imgUrl, translated } from '../config/const';

import {
	toGetResume
} from '../actions/resume';

import {
	INITIAL_STATE_RESUME,
	newExperienceItem,
	newWorkItem,
	newEducationItem
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
		this.handleChangeDisplay = this.handleChangeDisplay.bind(this);

		this.handleAddListItem = this.handleAddListItem.bind(this);
		this.handleRemoveListItem = this.handleRemoveListItem.bind(this);
		this.handleChangeListItem = this.handleChangeListItem.bind(this);


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

	handleChangeDisplay(key, value){

		let ctx = this;

		ctx.setState({

			resume: Object.assign({}, ctx.state.resume, {
				[key]: Object.assign({}, ctx.state.resume[key], {
					display: value	
				})
			})

		});

	}

	handleChangeListItem(key, index, value){

		let ctx = this;

		ctx.setState({

			resume: Object.assign({}, ctx.state.resume, {
				[key]: Object.assign({}, ctx.state.resume[key], {
					list: ctx.state.resume[key].list.map((item, i) => {
						if(index==i)
							return value;
						else	
							return item;
					})
				})
			})

		});

	}

	handleAddListItem(key, value){

		let ctx = this;

		ctx.setState({

			resume: Object.assign({}, ctx.state.resume, {
				[key]: Object.assign({}, ctx.state.resume[key], {
					list: [...ctx.state.resume[key].list, value]
				})
			})

		});

	}

	handleRemoveListItem(key, index){

		let ctx = this;

		ctx.setState({

			resume: Object.assign({}, ctx.state.resume, {
				[key]: Object.assign({}, ctx.state.resume[key], {
					list: ctx.state.resume[key].list.filter((item, i) => {
						return !(i==index);
					})
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
							className="btn btn-block btn-large btn-primary"
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
							size="normal"
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
								return handleDateTime(date, '-')
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

				<div className={style.experience + ' row'}>
					<div 
						className={style.row} 
						style={{
							marginTop: '48px',
							borderTop: '1px #34495e solid'
						}}>
						<div className={style.label}>
							{translated.projectExperience}
						</div>
						<div className={style.tools}>
							<div>
								<CheckBox
									id="checkbox-experience"
									name="checkbox-experience"
									checked={this.state.resume.experience.display} 
									label=""
									onChange={value => {
										this.handleChangeDisplay('experience', value);
									}}
									/>
							</div>
							<div>
								<IconButton 
									onClick={() => {
										this.handleAddListItem('experience', newExperienceItem());
									}} 
									icon="fa-plus-circle" 
									label={translated.add}/>
							</div>
						</div>
					</div>
					<div 
						className={style.row}
						style={{
							paddingRight: '16px',
							paddingLeft: '16px',
						}}>
						{
							this.state.resume.experience.list.map((item, index) => 
								<ExperienceItem
									key={'item-experience'+index}
									index={index}
									title={item.title}
									onCommit={(index, value) => {
										this.handleChangeListItem('experience', index, value);
									}}
									titlePlaceHolder={translated.projectTitle}
									datePlaceHolder={translated.projectCycle}
									startDate={handleDateTime(item.startDate, '/')}
									endDate={handleDateTime(item.endDate, '/')}
									role={item.role}
									rolePlaceHolder={translated.role}
									summary={item.summary}
									onRemove={index => {
										this.handleRemoveListItem('experience', index);
									}}
									summaryPlaceHolder={translated.summary}/>
							)
						}
					</div>
				</div>

				<div className={style.work + ' row'}>
					<div 
						className={style.row} 
						style={{
							marginTop: '48px',
							borderTop: '1px #34495e solid'
						}}>
						<div className={style.label}>
							{translated.workExperience}
						</div>
						<div className={style.tools}>
							<div>
								<CheckBox
									id="checkbox-work"
									name="checkbox-work"
									checked={this.state.resume.work.display} 
									label=""
									onChange={value => {
										this.handleChangeDisplay('work', value);
									}}
									/>
							</div>
							<div>
								<IconButton 
									onClick={() => {
										this.handleAddListItem('work', newWorkItem());
									}} 
									icon="fa-plus-circle" 
									label={translated.add}/>
							</div>
						</div>
					</div>
					<div 
						className={style.row}
						style={{
							paddingRight: '16px',
							paddingLeft: '16px',
						}}>
						{
							this.state.resume.work.list.map((item, index) => 
								<WorkItem
									key={'item-work'+index}
									index={index}
									name={item.name}
									onCommit={(index, value) => {
										this.handleChangeListItem('work', index, value);
									}}
									namePlaceHolder={translated.companyName}
									datePlaceHolder={translated.projectCycle}
									startDate={handleDateTime(item.startDate, '/')}
									endDate={handleDateTime(item.endDate, '/')}
									job={item.job}
									jobPlaceHolder={translated.job}
									summary={item.summary}
									onRemove={index => {
										this.handleRemoveListItem('work', index);
									}}
									summaryPlaceHolder={translated.summary}/>
							)
						}
					</div>
				</div>

				<div className={style.education + ' row'}>
					<div 
						className={style.row} 
						style={{
							marginTop: '48px',
							borderTop: '1px #34495e solid'
						}}>
						<div className={style.label}>
							{translated.educationExperience}
						</div>
						<div className={style.tools}>
							<div>
								<CheckBox
									id="checkbox-education"
									name="checkbox-education"
									checked={this.state.resume.education.display} 
									label=""
									onChange={value => {
										this.handleChangeDisplay('education', value);
									}}
									/>
							</div>
							<div>
								<IconButton 
									onClick={() => {
										this.handleAddListItem('education', newEducationItem());
									}} 
									icon="fa-plus-circle" 
									label={translated.add}/>
							</div>
						</div>
					</div>
					<div 
						className={style.row}
						style={{
							paddingRight: '16px',
							paddingLeft: '16px',
						}}>
						{
							this.state.resume.education.list.map((item, index) => 
								<EducationItem
									key={'item-education'+index}
									index={index}
									name={item.name}
									onCommit={(index, value) => {
										this.handleChangeListItem('education', index, value);
									}}
									namePlaceHolder={translated.schoolName}
									datePlaceHolder={translated.projectCycle}
									startDate={handleDateTime(item.startDate, '/')}
									endDate={handleDateTime(item.endDate, '/')}
									major={item.major}
									majorPlaceHolder={translated.major}
									degree={item.degree}
									degreePlaceHolder={translated.degree}
									summary={item.summary}
									onRemove={index => {
										this.handleRemoveListItem('education', index);
									}}
									summaryPlaceHolder={translated.summary}/>
							)
						}
					</div>
				</div>

			</div>
		)
		
	}


}

function handleDateTime(dateTime, split){

	let d = new Date(dateTime);

	return d.getFullYear() + split + (handleMonthOrDate(d.getMonth()+1)) + split + handleMonthOrDate(d.getDate());

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
	return (v+'').length > 1 ? v : '0'+v;
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