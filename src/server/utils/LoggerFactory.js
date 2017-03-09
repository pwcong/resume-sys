import fs from 'fs-extra';
import log4js from 'log4js';

if(process.env.NODE_ENV === 'production'){
	fs.emptyDirSync('log');
	log4js.configure('config/log4js.json');
	console.log("Log4js has been configurated successfully");	
}

export const tracer = logger => {

	return (head, msg, err) => {

		logger.trace(format(head, msg, err));

	}

} 

export const debuger = logger => {

	return (head, msg, err) => {

		logger.debug(format(head, msg, err));

	}

} 

export const infoer = logger => {

	return (head, msg, err) => {

		logger.info(format(head, msg, err));

	}

} 

export const warnner = logger => {

	return (head, msg, err) => {

		logger.warn(format(head, msg, err));

	}

} 

export const errorer = logger => {

	return err => {

		logger.error(err);

	}

} 

export const fataler = logger => {

	return fatal => {

		logger.fatal(fatal);

	}

} 

function format(head, msg, err){

	return (head + ' ===> ' + msg + (err ? (' ---> ' + err) : ''));

}

export default log4js;