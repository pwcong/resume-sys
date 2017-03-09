import fs from 'fs-extra';
import log4js from 'log4js';

if(process.env.NODE_ENV === 'production'){
	fs.emptyDirSync('log');
	log4js.configure('config/log4js.json');
	console.log("Log4js has been configurated successfully");	
}

export const Tracer = logger => {

	return (head, msg, err) => {

		logger.trace(format(head, msg, err));

	}

} 

export const Debuger = logger => {

	return (head, msg, err) => {

		logger.debug(format(head, msg, err));

	}

} 

export const Infoer = logger => {

	return (head, msg, err) => {

		logger.info(format(head, msg, err));

	}

} 

export const Warnner = logger => {

	return (head, msg, err) => {

		logger.warn(format(head, msg, err));

	}

} 

export const Errorer = logger => {

	return err => {

		logger.error(err);

	}

} 

export const Fataler = logger => {

	return fatal => {

		logger.fatal(fatal);

	}

} 

function format(head, msg, err){

	return (head + ' ===> ' + msg + (err ? (' ---> ' + err) : ''));

}

export default log4js;