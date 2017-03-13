import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../view/app';
import Index from '../view/index';

export default (

	<Route path="/" component={App}>
		<IndexRoute component={Index}/>
	</Route>
    
);