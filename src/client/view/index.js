import React from 'react';
import style from './style/index.css';

import { imgUrl, translated } from '../config/const';

import LoginForm from '../component/LoginForm';
import RegisterForm from '../component/RegisterForm';
import Message, { TYPE } from '../component/Message';



export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLogin: true,
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

    }

    handleOnRegister(user){

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
                        hide={!this.state.isLogin}
                        onToRegister={this.handleToRegister}
                        onLogin={this.handleOnLogin}
                        /> 
                    : 
                    <RegisterForm 
                        hide={this.state.isLogin}
                        onToLogin={this.handleToLogin}
                        onRegister={this.handleOnRegister}
                        />
                }

			</div>
		)
		
	}


}