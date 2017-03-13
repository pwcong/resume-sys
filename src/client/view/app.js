import React from 'react';
import style from './style/app.css';

export default class App extends React.Component{

	render(){

		return (
			<div className={style.root}>
				{ this.props.children }
			</div>
		)
		
	}


}