import fs from 'fs-extra';
import log4js from 'log4js';

fs.emptyDirSync('log');

if(process.env.NODE_ENV === 'production'){
	log4js.configure('config/log4js.json');
	console.log("Log4js has been configurated successfully");	
}

export default log4js;
