import React from 'react';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import style from './style/home.css';

import Message, { TYPE } from '../component/Message';
import { imgUrl, translated } from '../config/const';

import {
	toGetResume
} from '../actions/resume';

class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			hideMessage: true,
			messageContent: '',
			messageType: TYPE.default
		};

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
			() => {
				showMessage(ctx, translated.getResumeSuccessfully, TYPE.success, 2000);
			},
			err => {
				showMessage(ctx, translated.getResumeFailed, TYPE.danger, 2000);
			}
		))

	}

	render(){

		return (
			<div className={style.root}>
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