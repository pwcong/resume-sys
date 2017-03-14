import React from 'react';
import style from './style/index.css';
import { connect } from 'react-redux';


import { imgUrl, translated } from '../config/const';

import LoginForm from '../component/LoginForm';
import RegisterForm from '../component/RegisterForm';
import Message, { TYPE } from '../component/Message';

import {
    toLogin,
    toRegister
} from '../actions/userstate';

 class Index extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLogin: true,
            isLogining: false,
            isRegistering: false,
            hideMessage: true,
            messageContent: '',
            messageType: TYPE.default
        };

        this.handleToLogin = this.handleToLogin.bind(this);
        this.handleToRegister = this.handleToRegister.bind(this);
        this.handleOnLogin = this.handleOnLogin.bind(this);
        this.handleOnRegister = this.handleOnRegister.bind(this);
    }

    handleToLogin(){
        this.setState({
            isLogin: true
        });
    }

    handleToRegister(){
        this.setState({
            isLogin: false
        });
    }   

    handleOnLogin(user){
        let ctx = this;

        ctx.props.dispatch(toLogin(
            {
                uid: user.uid,
                pwd: user.pwd
            },
            () => {
                ctx.setState({
                    isLogining: true,
                    hideMessage: true,
                });
            },
            () => {
                ctx.setState({
                    isLogining: false,
                    hideMessage: true,
                });
            },
            err => {
                ctx.setState({
                    isLogining: false,
                    hideMessage: false,
                    messageContent: err,
                    messageType: TYPE.danger
                });

                setTimeout(() => {
                    ctx.setState({
                        hideMessage: true,
                    });
                },2000);
            }
        ));
        

    }

    handleOnRegister(user){
        let ctx = this;

        ctx.props.dispatch(toRegister(
            {
                uid: user.uid,
                pwd: user.pwd
            },
            () => {
                ctx.setState({
                    isLogining: true,
                    hideMessage: true,
                });
            },
            () => {
                ctx.setState({
                    isLogining: false,
                    hideMessage: true,
                });
            },
            err => {
                ctx.setState({
                    isLogining: false,
                    hideMessage: false,
                    messageContent: err,
                    messageType: TYPE.danger
                });

                setTimeout(() => {
                    ctx.setState({
                        hideMessage: true,
                    });
                },2000);
            }
        ));
    }

	render(){


		return (

			<div className={style.root} style={{backgroundImage: 'url(' + imgUrl.bg + ')'}}>

                <Message 
                    content={this.state.messageContent} 
                    type={this.props.messageType} 
                    hide={this.state.hideMessage}/>
                
                <div style={{
                    textAlign: 'center',
                    width: '100%',
                    color: '#ddd',
                    }}>
                    <h2>{translated.appName}</h2>
                </div>

                {
                    this.state.isLogin ? 
                    <LoginForm 
                        loading={this.state.isLogining}
                        hide={!this.state.isLogin}
                        onToRegister={this.handleToRegister}
                        onLogin={this.handleOnLogin}
                        /> 
                    : 
                    <RegisterForm 
                        loading={this.state.isRegistering}
                        hide={this.state.isLogin}
                        onToLogin={this.handleToLogin}
                        onRegister={this.handleOnRegister}
                        />
                }

			</div>
		)
		
	}


}

function select(state){
    return({
        userstate: state.userstate
    });
}

export default connect(select)(Index);