import React, { Component, PropTypes } from 'react';
import style from './style.css';

import { translated } from '../../config/const';

class LoginForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            uid: '',
            pwd: ''
        };

        this.handleChangeUID = this.handleChangeUID.bind(this);
        this.handleChangePWD = this.handleChangePWD.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleToRegister = this.handleToRegister.bind(this);


    }

    handleChangeUID(e){
        this.setState({
            uid: e.target.value
        });
    }

    handleChangePWD(e){
        this.setState({
            pwd: e.target.value
        });
    }

    handleLogin(){
        let uid = this.state.uid;
        let pwd = this.state.pwd;
        if(uid&&pwd){
            this.props.onLogin({
                uid,
                pwd
            })
        }
    }

    handleToRegister(){
        this.props.onToRegister();
    }

    render() {
        return (
            <div className={style.root + " animated " + (this.props.hide ? "flipOutX" : "flipInX")}>
                <form>
                    <div className="form-group success">
                        <label htmlFor="inputUsername">{translated.username}</label>
                        <input 
                            onChange={this.handleChangeUID}
                            ref="inputUsername"
                            type="text" 
                            className="form-control" 
                            id="inputUsername" 
                            placeholder={translated.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">{translated.password}</label>
                        <input 
                        
                            onChange={this.handleChangePWD}
                            ref="inputPassword"
                            type="Password" 
                            className="form-control" 
                            id="inputPassword" 
                            placeholder={translated.password}/>
                    </div>
                    <button 
                        type="button" 
                        className={"btn btn-block btn-large btn-primary " 
                            + (this.props.loading ? "disabled" : '')
                        }
                        onClick={this.handleLogin}
                        >
                        { this.props.loading ? translated.logining : translated.login}
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-block btn-large btn-inverse"
                        onClick={this.handleToRegister}
                        >
                        {translated.register}
                    </button>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    hide: PropTypes.bool,
    loading: PropTypes.bool,
    onLogin: PropTypes.func,
    onToRegister: PropTypes.func
};

LoginForm.defaultProps = {
    hide: false,
    loading: false,
    onLogin(user){
        console.log(user);
    },
    onToRegister(){
        console.log('To Register');
    }
};

export default LoginForm;