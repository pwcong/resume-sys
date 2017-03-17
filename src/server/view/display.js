import React, { PropTypes } from 'react';


import { imgUrl, translated } from '../config/const';

const IconLabel = React.createClass({

    render: function() {
        return (
            <div
                style={{
                    fontSize: this.props.fontSize,
                    marginRight: this.props.rootMarginRight
                }}>
                {
                    this.props.icon ? 
                        <span 
                            className={'fa ' + this.props.icon}
                            style={{
                                marginRight: this.props.spanMarginRight
                            }}></span> 
                        : 
                        ''
                }
                {this.props.label}
            </div>
        );
    }

});

IconLabel.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    fontSize: PropTypes.string,
    spanMarginRight: PropTypes.string,
    rootMarginRight: PropTypes.string,
};

IconLabel.defaultProps = {
    icon: '',
    label: 'Label',
    fontSize: '16px',
    marginRight: '0px',
    rootMarginRight: '0px'
}

class Display extends React.Component{

	render(){

		let resume = this.props.resume;

		return (
			<div style={{width: '100%'}}>

				<div>
				
					<div 
						className={'row'} 
						style={{
							backgroundImage: 'url(/img/banner.jpg)',
                            height: '160px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
						}}>

					</div>

					<div 
                        className={'row'}
                        style={{
                            position: 'relative',
                            borderLeft: '1px #34495e solid',
                            borderRight: '1px #34495e solid'
                        }}>
						<div
                            style={{
                                position: 'absolute',
                                top: '-90px',
                                left: '0px',
                                width: '100%',
                                display: 'flex',
                                flexFlow: 'row nowrap',
                                justifyContent: 'center'
                            }}>
							<div
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '60px',
                                    border: '1px #ddd solid',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    boxShadow: '0px 1px 10px 0px grey'
                                }}>
								<div
									style={{
                                        width: '110px',
                                        height: '110px',
                                        border: '1px #ddd solid',
                                        borderRadius: '55px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
										backgroundImage: 'url(' + resume.info.avatar + ')'
									}}>	
								
								</div>
							</div>
						</div>
						<div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center',
                                marginTop: '48px'
                            }}>
                        </div>
						<div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center',
                                marginTop: '48px'
                            }}>

                            <IconLabel
                                fontSize="36px"
                                label={resume.info.name}/>
                            
						</div>

						<div 
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center'
                            }}>

                            <IconLabel label={handleSexNum(resume.info.sex)} icon="fa-transgender" spanMarginRight="4px" rootMarginRight="24px"/>
                            <IconLabel label={handleDateTime(resume.info.birthday, '-')}  icon="fa-birthday-cake" spanMarginRight="4px" rootMarginRight="24px"/>

                            <IconLabel label={resume.info.record}  icon="fa-mortar-board" spanMarginRight="4px" rootMarginRight="24px"/>
                            <IconLabel label={resume.info.city} icon="fa-map-marker" spanMarginRight="4px"/>

						</div>

						<div 
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center'
                            }}>
                            <IconLabel label={resume.info.phone}  icon="fa-phone" spanMarginRight="4px" rootMarginRight="24px"/>
                            <IconLabel label={resume.info.email}  icon="fa-envelope" spanMarginRight="4px" rootMarginRight="24px"/>
                            <IconLabel label={resume.info.github}  icon="fa-github" spanMarginRight="4px" rootMarginRight="24px"/>
                            <IconLabel label={resume.info.blog}  icon="fa-home" spanMarginRight="4px" rootMarginRight="24px"/>

						</div>
					</div>

                    {
                        resume.experience.display ?            
                            <div 
                                style={{
                                    position: 'relative',
                                    borderLeft: '1px #34495e solid',
                                    borderRight: '1px #34495e solid'
                                }}
                                className={'row'}>
                                <div
                                    style={{
                                        marginTop: '48px',
                                        borderTop: '1px #34495e solid',
                                        position: 'relative',
                                        display: 'flex',
                                        flexFlow: 'row wrap',
                                        justifyContent: 'center'
                                    }}>
                                    <div 
                                        style={{
                                            color: 'white',
                                            top: '-18px',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '36px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px',
                                            borderRadius: '18px',
                                            backgroundColor: '#34495e'
                                        }}>
                                        {translated.projectExperience}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        paddingRight: '32px',
                                        paddingLeft: '32px',
                                    }}>
                                    {
                                        resume.experience.list.map((item, index) => 
                                            <div 
                                                key={'experience-' + index}
                                                style={{
                                                    marginBottom: '16px'
                                                }}>
                                                <div>
                                                    <strong style={{fontSize: '24px'}}>
                                                        {item.title}
                                                    </strong>
                                                </div>
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        top: '-4px',
                                                        color: 'grey',
                                                        display: 'flex',
                                                        fontSize: '14px',
                                                        justifyContent: 'space-between'
                                                    }}>

                                                    <div>
                                                        <span className="fa fa-user" style={{marginRight: '4px'}}></span>
                                                        {item.role}
                                                    </div>
                                                    <div>
                                                        <span className="fa fa-clock-o" style={{marginRight: '4px'}}></span>
                                                        {
                                                            handleDateTime(item.startDate, '/') + ' - ' + handleDateTime(item.endDate, '/')
                                                        }
                                                    </div>

                                                </div>
                                            
                                                <div style={{fontSize: '16px'}}>
                                                    {item.summary}
                                                </div>
                                            </div>


                                        )
                                    }
                                </div>
                            </div>
                            : ''
                    }

                    {
                        resume.work.display ? 
                            <div 
                                className={'row'}
                                style={{
                                    position: 'relative',
                                    borderLeft: '1px #34495e solid',
                                    borderRight: '1px #34495e solid'
                                }}>
                                <div 
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        flexFlow: 'row wrap',
                                        justifyContent: 'center',
                                        marginTop: '48px',
                                        borderTop: '1px #34495e solid'
                                    }}>
                                    <div
                                        style={{
                                            color: 'white',
                                            top: '-18px',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '36px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px',
                                            borderRadius: '18px',
                                            backgroundColor: '#34495e'
                                        }}>
                                        {translated.workExperience}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        paddingRight: '32px',
                                        paddingLeft: '32px',
                                    }}>
                                    {
                                        resume.work.list.map((item, index) => 
                                            <div 
                                                key={'work-' + index}
                                                style={{
                                                    marginBottom: '16px'
                                                }}>
                                                <div>
                                                    <strong style={{fontSize: '24px'}}>
                                                        {item.name}
                                                    </strong>
                                                </div>
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        top: '-4px',
                                                        color: 'grey',
                                                        display: 'flex',
                                                        fontSize: '14px',
                                                        justifyContent: 'space-between'
                                                    }}>

                                                    <div>
                                                        <span className="fa fa-user" style={{marginRight: '4px'}}></span>
                                                        {item.job}
                                                    </div>
                                                    <div>
                                                        <span className="fa fa-clock-o" style={{marginRight: '4px'}}></span>
                                                        {
                                                            handleDateTime(item.startDate, '/') + ' - ' + handleDateTime(item.endDate, '/')
                                                        }
                                                    </div>

                                                </div>
                                            
                                                <div style={{fontSize: '16px'}}>
                                                    {item.summary}
                                                </div>
                                            </div>

                                        )
                                    }
                                </div>
                            </div>
                            : ''
                    }

                    {
                        resume.education.display ?
                            <div 
                                className={'row'}
                                style={{
                                    position: 'relative',
                                    borderLeft: '1px #34495e solid',
                                    borderRight: '1px #34495e solid'
                                }}>
                                <div 
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        flexFlow: 'row wrap',
                                        justifyContent: 'center',
                                        marginTop: '48px',
                                        borderTop: '1px #34495e solid'
                                    }}>
                                    <div
                                        style={{
                                            color: 'white',
                                            top: '-18px',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '36px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px',
                                            borderRadius: '18px',
                                            backgroundColor: '#34495e'
                                        }}>
                                        {translated.educationExperience}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        paddingRight: '32px',
                                        paddingLeft: '32px',
                                    }}>
                                    {
                                        resume.education.list.map((item, index) => 
                                            <div
                                                key={'education-' + index}
                                                style={{
                                                    marginBottom: '16px'
                                                }}>
                                                <div>
                                                    <strong style={{fontSize: '24px'}}>
                                                        {item.name}
                                                    </strong>
                                                </div>
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        top: '-4px',
                                                        color: 'grey',
                                                        display: 'flex',
                                                        fontSize: '14px',
                                                        justifyContent: 'space-between'
                                                    }}>

                                                    <div>
                                                        <span className="fa fa-graduation-cap" style={{marginRight: '4px'}}></span>
                                                        {item.degree}
                                                        <span className="fa fa-book" style={{marginRight: '4px', marginLeft: '8px'}}></span>
                                                        {item.major}
                                                    </div>
                                                    <div>
                                                        <span className="fa fa-clock-o" style={{marginRight: '4px'}}></span>
                                                        {
                                                            handleDateTime(item.startDate, '/') + ' - ' + handleDateTime(item.endDate, '/')
                                                        }
                                                    </div>

                                                </div>
                                            
                                                <div style={{fontSize: '16px'}}>
                                                    {item.summary}
                                                </div>
                                            </div>
                                            
                                        )
                                    }
                                </div>
                            </div>
                            : ''
                    }

                    {
                        resume.hope.display ?
                            <div 
                                style={{
                                    position: 'relative',
                                    borderLeft: '1px #34495e solid',
                                    borderRight: '1px #34495e solid'
                                }}
                                className={'row'}>
                                <div 
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        flexFlow: 'row wrap',
                                        justifyContent: 'center',
                                        marginTop: '48px',
                                        borderTop: '1px #34495e solid'
                                    }}>
                                    <div
                                        style={{
                                            color: 'white',
                                            top: '-18px',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '36px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px',
                                            borderRadius: '18px',
                                            backgroundColor: '#34495e'
                                        }}>
                                        {translated.jobHope}
                                    </div>
                                </div>
                                <div 
                                    style={{
                                        paddingRight: '32px',
                                        paddingLeft: '32px',
                                    }}>

                                    <div>
                                        <div>
                                            <strong
                                                style={{
                                                    fontSize: '18px',
                                                    marginRight: '16px'
                                                }}>
                                                <span 
                                                    style={{
                                                        marginRight: '8px',
                                                        width: '24px',
                                                        textAlign: 'center'
                                                    }}
                                                    className="fa fa-user"></span>
                                                {translated.job}
                                            </strong>
                                            {resume.hope.details.job}
                                        </div>
                                        <div>
                                            <strong
                                                style={{
                                                    fontSize: '18px',
                                                    marginRight: '16px'
                                                }}>
                                                <span 
                                                    style={{
                                                        marginRight: '8px',
                                                        width: '24px',
                                                        textAlign: 'center'
                                                    }}
                                                    className="fa fa-arrows"></span>
                                                {translated.type}
                                            </strong>
                                            {resume.hope.details.type}
                                        </div>
                                        <div>
                                            <strong
                                                style={{
                                                    fontSize: '18px',
                                                    marginRight: '16px'
                                                }}>
                                                <span 
                                                    style={{
                                                        marginRight: '8px',
                                                        width: '24px',
                                                        textAlign: 'center'
                                                    }}
                                                    className="fa fa-map-signs"></span>
                                                {translated.city}
                                            </strong>
                                            {resume.hope.details.city}
                                        </div>
                                        <div>
                                            <strong
                                                style={{
                                                    fontSize: '18px',
                                                    marginRight: '16px'
                                                }}>
                                                <span 
                                                    style={{
                                                        marginRight: '8px',
                                                        width: '24px',
                                                        textAlign: 'center'
                                                    }}
                                                    className="fa fa-money"></span>
                                                {translated.salary}
                                            </strong>
                                            {resume.hope.details.salary}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            : ''
                    }

                    {
                        resume.skill.display ?
                            <div 
                                style={{
                                    position: 'relative',
                                    borderLeft: '1px #34495e solid',
                                    borderRight: '1px #34495e solid'
                                }}
                                className={'row'}>
                                <div 
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        flexFlow: 'row wrap',
                                        justifyContent: 'center',
                                        marginTop: '48px',
                                        borderTop: '1px #34495e solid'
                                    }}>
                                    <div
                                        style={{
                                            color: 'white',
                                            top: '-18px',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '36px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px',
                                            borderRadius: '18px',
                                            backgroundColor: '#34495e'
                                        }}>
                                        {translated.skillInfo}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        paddingRight: '32px',
                                        paddingLeft: '32px',
                                    }}>
                                    {
                                        resume.skill.list.map((item, index) => 

                                            <div
                                                key={'skill-'+index}>

                                                <div>
                                                    {item.name}
                                                </div>
                                                
                                                <div className="progress">
                                                    <div 
                                                        className="progress-bar" 
                                                        style={{
                                                            width: item.level+'%'
                                                        }}>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                        )
                                    }
                                </div>
                            </div>
                            : ''
                    }

					<div 
                        style={{
                            position: 'relative',
                            borderLeft: '1px #34495e solid',
                            borderRight: '1px #34495e solid'
                        }}
                        className={'row'}>
						<div 
							style={{
                                position: 'relative',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center',
								marginTop: '48px',
								borderTop: '1px #34495e solid'
							}}>
							<div
                                style={{
                                    color: 'white',
                                    top: '-18px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '36px',
                                    paddingLeft: '16px',
                                    paddingRight: '16px',
                                    borderRadius: '18px',
                                    backgroundColor: '#34495e'
                                }}>
								{translated.personalEvaluation}
							</div>
						</div>
						<div
							style={{
								paddingRight: '32px',
								paddingLeft: '32px',
							}}>

                            <div>
                                {resume.info.intro}
                            </div>
							
						</div>
					</div>

					<div
                        style={{
                            paddingTop: '48px',
                            borderLeft: '1px #34495e solid',
                            borderRight: '1px #34495e solid',
                            borderBottom: '1px #34495e solid'
                        }}
                        className={'row'} >
                    </div>

				</div>

				
			</div>
		)
		
	}


}

function handleDateTime(dateTime, split){

	let d = new Date(dateTime);

	return d.getFullYear() + split + (handleMonthOrDate(d.getMonth()+1)) + split + handleMonthOrDate(d.getDate());

}

function handleSexNum(sex){
	switch(sex){

		case 1:
			return translated.male;
		case 2:
			return translated.female;
		default:
			return translated.unknown;

	}
}

function handleMonthOrDate(v){
	return (v+'').length > 1 ? v : '0'+v;
}

Display.propTypes = {
    resume: PropTypes.object.isRequired
};

export default Display;