import React from 'react';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import style from './style/home.css';

import Message, { TYPE } from '../component/Message';
import Modal from '../component/Modal';

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

	componentWillMount(){
		let ctx = this;

		if(!ctx.props.userstate.isLogined)
			hashHistory.push('/');
		
	}

	componentDidMount(){
		let ctx = this;

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

	render(){

		return (
			<div className={style.root}>
				<Modal hide={this.state.hideModal}>
					<form className={style['modal-edit-avatar']}>
						<div className="form-group">
							<input type="text" ref="inputAvatar" className="form-control" placeholder="Avatar Url"/>
						</div>
						<button 
							type="button" 
							className="btn btn-block btn-large btn-info"
							onClick={this.handleEditAvatar}
							>
							确定
						</button>
						<button 
							type="button" 
							className="btn btn-block btn-large"
							onClick={this.handleHideEditAvatarModal}
							>
							取消
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
					<div className={style.row} style={{marginTop: '32px'}}></div>
					<div className={style.row}>
						<h4>{ this.state.resume.info.name }</h4>
					</div>
				</div>
			</div>
		)
		
	}


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