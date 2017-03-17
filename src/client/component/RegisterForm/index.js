import React, { Component, PropTypes } from 'react';
import style from './style.css';

import { translated } from '../../config/const';

class RegisterForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            uid: '',
            pwd: ''
        };

        this.handleChangeUID = this.handleChangeUID.bind(this);
        this.handleChangePWD = this.handleChangePWD.bind(this);
        this.handleToLogin = this.handleToLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);


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

    handleRegister(){
        let uid = this.state.uid;
        let pwd = this.state.pwd;
        if(uid&&pwd){
            this.props.onRegister({
                uid,
                pwd
            })
        }
    }

    handleToLogin(){
        this.props.onToLogin();
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
                        className={"btn btn-block btn-large btn-info " 
                            + (this.props.loading ? 'disabled' : '')
                        }
                        onClick={this.handleRegister}
                        >
                        { this.props.loading ? translated.registering : translated.submit}
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-block btn-large"
                        onClick={this.handleToLogin}
                        >
                        {translated.back}
                    </button>
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    hide: PropTypes.bool,
    loading: PropTypes.bool,
    onRegister: PropTypes.func,
    onToLogin: PropTypes.func

};

RegisterForm.defaultProps = {
    hide: false,
    loading: false,
    onRegister(user){
        console.log(user);
    },
    onToLogin(){
        console.log('To Login');
    }
};

export default RegisterForm;