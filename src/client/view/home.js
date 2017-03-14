import React from 'react';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import style from './style/home.css';

class Home extends React.Component{

	constructor(props){
		super(props);

	}

	componentWillMount(){

		let ctx = this;

		if(!ctx.props.userstate.isLogined)
			hashHistory.push('/');
		
	}

	render(){

		return (
			<div className={style.root}>
                <h1>Home</h1>
			</div>
		)
		
	}


}

function select(state){
	return ({
		userstate: state.userstate
	});
}

export default connect(select)(Home);