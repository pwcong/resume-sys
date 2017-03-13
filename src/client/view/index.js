import React from 'react';
import style from './style/index.css';

import LoginForm from '../component/LoginForm';
import RegisterForm from '../component/RegisterForm';
import { imgUrl } from '../config/const';
import { browser } from '../config';

export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLogin: true
        };

        this.handleToLogin = this.handleToLogin.bind(this);
        this.handleToRegister = this.handleToRegister.bind(this);

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

	render(){


		return (

			<div className={style.root} style={{backgroundImage: 'url(' + imgUrl.bg + ')'}}>

                <div style={{
                    textAlign: 'center',
                    width: '100%',
                    color: 'white',
                    
                }}>
                    <h2>Resume Sys</h2>
                </div>

                {
                    this.state.isLogin ? 
                    <LoginForm 
                        hide={!this.state.isLogin}
                        onToRegister={this.handleToRegister}
                        /> 
                    : 
                    <RegisterForm 
                        hide={this.state.isLogin}
                        onToLogin={this.handleToLogin}
                        />
                }

			</div>
		)
		
	}


}