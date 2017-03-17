'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _const = require('../config/const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconLabel = _react2.default.createClass({
    displayName: 'IconLabel',


    render: function render() {
        return _react2.default.createElement(
            'div',
            {
                style: {
                    fontSize: this.props.fontSize,
                    marginRight: this.props.rootMarginRight
                } },
            this.props.icon ? _react2.default.createElement('span', {
                className: 'fa ' + this.props.icon,
                style: {
                    marginRight: this.props.spanMarginRight
                } }) : '',
            this.props.label
        );
    }

});

IconLabel.propTypes = {
    icon: _react.PropTypes.string,
    label: _react.PropTypes.string,
    fontSize: _react.PropTypes.string,
    spanMarginRight: _react.PropTypes.string,
    rootMarginRight: _react.PropTypes.string
};

IconLabel.defaultProps = {
    icon: '',
    label: 'Label',
    fontSize: '16px',
    marginRight: '0px',
    rootMarginRight: '0px'
};

var Display = function (_React$Component) {
    _inherits(Display, _React$Component);

    function Display() {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
    }

    _createClass(Display, [{
        key: 'render',
        value: function render() {

            var resume = this.props.resume;

            return _react2.default.createElement(
                'div',
                { style: { width: '100%', backgroundColor: 'white' } },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('div', {
                        className: 'row',
                        style: {
                            backgroundImage: 'url(/img/banner.jpg)',
                            height: '160px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        } }),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'row',
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            } },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'absolute',
                                    top: '-90px',
                                    left: '0px',
                                    width: '100%',
                                    display: 'flex',
                                    flexFlow: 'row nowrap',
                                    justifyContent: 'center'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '60px',
                                        border: '1px #ddd solid',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        boxShadow: '0px 1px 10px 0px grey'
                                    } },
                                _react2.default.createElement('div', {
                                    style: {
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
                                    } })
                            )
                        ),
                        _react2.default.createElement('div', {
                            style: {
                                position: 'relative',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center',
                                marginTop: '48px'
                            } }),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center',
                                    marginTop: '48px'
                                } },
                            _react2.default.createElement(IconLabel, {
                                fontSize: '36px',
                                label: resume.info.name })
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center'
                                } },
                            _react2.default.createElement(IconLabel, { label: handleSexNum(resume.info.sex), icon: 'fa-transgender', spanMarginRight: '4px', rootMarginRight: '24px' }),
                            _react2.default.createElement(IconLabel, { label: handleDateTime(resume.info.birthday, '-'), icon: 'fa-birthday-cake', spanMarginRight: '4px', rootMarginRight: '24px' }),
                            _react2.default.createElement(IconLabel, { label: resume.info.record, icon: 'fa-mortar-board', spanMarginRight: '4px', rootMarginRight: '24px' }),
                            _react2.default.createElement(IconLabel, { label: resume.info.city, icon: 'fa-map-marker', spanMarginRight: '4px' })
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center'
                                } },
                            _react2.default.createElement(IconLabel, { label: resume.info.phone, icon: 'fa-phone', spanMarginRight: '4px', rootMarginRight: '24px' }),
                            _react2.default.createElement(IconLabel, { label: resume.info.email, icon: 'fa-envelope', spanMarginRight: '4px', rootMarginRight: '24px' }),
                            _react2.default.createElement(IconLabel, { label: resume.info.github, icon: 'fa-github', spanMarginRight: '4px', rootMarginRight: '24px' }),
                            _react2.default.createElement(IconLabel, { label: resume.info.blog, icon: 'fa-home', spanMarginRight: '4px', rootMarginRight: '24px' })
                        )
                    ),
                    resume.experience.display ? _react2.default.createElement(
                        'div',
                        {
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            },
                            className: 'row' },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    marginTop: '48px',
                                    borderTop: '1px #34495e solid',
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
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
                                    } },
                                _const.translated.projectExperience
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingRight: '32px',
                                    paddingLeft: '32px'
                                } },
                            resume.experience.list.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        key: 'experience-' + index,
                                        style: {
                                            marginBottom: '16px'
                                        } },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'strong',
                                            { style: { fontSize: '24px' } },
                                            item.title
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            style: {
                                                position: 'relative',
                                                top: '-4px',
                                                color: 'grey',
                                                display: 'flex',
                                                fontSize: '14px',
                                                justifyContent: 'space-between'
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('span', { className: 'fa fa-user', style: { marginRight: '4px' } }),
                                            item.role
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('span', { className: 'fa fa-clock-o', style: { marginRight: '4px' } }),
                                            handleDateTime(item.startDate, '/') + ' - ' + handleDateTime(item.endDate, '/')
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: { fontSize: '16px' } },
                                        item.summary
                                    )
                                );
                            })
                        )
                    ) : '',
                    resume.work.display ? _react2.default.createElement(
                        'div',
                        {
                            className: 'row',
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            } },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center',
                                    marginTop: '48px',
                                    borderTop: '1px #34495e solid'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
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
                                    } },
                                _const.translated.workExperience
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingRight: '32px',
                                    paddingLeft: '32px'
                                } },
                            resume.work.list.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        key: 'work-' + index,
                                        style: {
                                            marginBottom: '16px'
                                        } },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'strong',
                                            { style: { fontSize: '24px' } },
                                            item.name
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            style: {
                                                position: 'relative',
                                                top: '-4px',
                                                color: 'grey',
                                                display: 'flex',
                                                fontSize: '14px',
                                                justifyContent: 'space-between'
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('span', { className: 'fa fa-user', style: { marginRight: '4px' } }),
                                            item.job
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('span', { className: 'fa fa-clock-o', style: { marginRight: '4px' } }),
                                            handleDateTime(item.startDate, '/') + ' - ' + handleDateTime(item.endDate, '/')
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: { fontSize: '16px' } },
                                        item.summary
                                    )
                                );
                            })
                        )
                    ) : '',
                    resume.education.display ? _react2.default.createElement(
                        'div',
                        {
                            className: 'row',
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            } },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center',
                                    marginTop: '48px',
                                    borderTop: '1px #34495e solid'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
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
                                    } },
                                _const.translated.educationExperience
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingRight: '32px',
                                    paddingLeft: '32px'
                                } },
                            resume.education.list.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        key: 'education-' + index,
                                        style: {
                                            marginBottom: '16px'
                                        } },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'strong',
                                            { style: { fontSize: '24px' } },
                                            item.name
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            style: {
                                                position: 'relative',
                                                top: '-4px',
                                                color: 'grey',
                                                display: 'flex',
                                                fontSize: '14px',
                                                justifyContent: 'space-between'
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('span', { className: 'fa fa-graduation-cap', style: { marginRight: '4px' } }),
                                            item.degree,
                                            _react2.default.createElement('span', { className: 'fa fa-book', style: { marginRight: '4px', marginLeft: '8px' } }),
                                            item.major
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('span', { className: 'fa fa-clock-o', style: { marginRight: '4px' } }),
                                            handleDateTime(item.startDate, '/') + ' - ' + handleDateTime(item.endDate, '/')
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { style: { fontSize: '16px' } },
                                        item.summary
                                    )
                                );
                            })
                        )
                    ) : '',
                    resume.hope.display ? _react2.default.createElement(
                        'div',
                        {
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            },
                            className: 'row' },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center',
                                    marginTop: '48px',
                                    borderTop: '1px #34495e solid'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
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
                                    } },
                                _const.translated.jobHope
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingRight: '32px',
                                    paddingLeft: '32px'
                                } },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        {
                                            style: {
                                                fontSize: '18px',
                                                marginRight: '16px'
                                            } },
                                        _react2.default.createElement('span', {
                                            style: {
                                                marginRight: '8px',
                                                width: '24px',
                                                textAlign: 'center'
                                            },
                                            className: 'fa fa-user' }),
                                        _const.translated.job
                                    ),
                                    resume.hope.details.job
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        {
                                            style: {
                                                fontSize: '18px',
                                                marginRight: '16px'
                                            } },
                                        _react2.default.createElement('span', {
                                            style: {
                                                marginRight: '8px',
                                                width: '24px',
                                                textAlign: 'center'
                                            },
                                            className: 'fa fa-arrows' }),
                                        _const.translated.type
                                    ),
                                    resume.hope.details.type
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        {
                                            style: {
                                                fontSize: '18px',
                                                marginRight: '16px'
                                            } },
                                        _react2.default.createElement('span', {
                                            style: {
                                                marginRight: '8px',
                                                width: '24px',
                                                textAlign: 'center'
                                            },
                                            className: 'fa fa-map-signs' }),
                                        _const.translated.city
                                    ),
                                    resume.hope.details.city
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        {
                                            style: {
                                                fontSize: '18px',
                                                marginRight: '16px'
                                            } },
                                        _react2.default.createElement('span', {
                                            style: {
                                                marginRight: '8px',
                                                width: '24px',
                                                textAlign: 'center'
                                            },
                                            className: 'fa fa-money' }),
                                        _const.translated.salary
                                    ),
                                    resume.hope.details.salary
                                )
                            )
                        )
                    ) : '',
                    resume.skill.display ? _react2.default.createElement(
                        'div',
                        {
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            },
                            className: 'row' },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center',
                                    marginTop: '48px',
                                    borderTop: '1px #34495e solid'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
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
                                    } },
                                _const.translated.skillInfo
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingRight: '32px',
                                    paddingLeft: '32px'
                                } },
                            resume.skill.list.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        key: 'skill-' + index },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        item.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'progress' },
                                        _react2.default.createElement('div', {
                                            className: 'progress-bar',
                                            style: {
                                                width: item.level + '%'
                                            } })
                                    )
                                );
                            })
                        )
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        {
                            style: {
                                position: 'relative',
                                borderLeft: '1px #34495e solid',
                                borderRight: '1px #34495e solid'
                            },
                            className: 'row' },
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    position: 'relative',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    justifyContent: 'center',
                                    marginTop: '48px',
                                    borderTop: '1px #34495e solid'
                                } },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
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
                                    } },
                                _const.translated.personalEvaluation
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingRight: '32px',
                                    paddingLeft: '32px'
                                } },
                            _react2.default.createElement(
                                'div',
                                null,
                                resume.info.intro
                            )
                        )
                    ),
                    _react2.default.createElement('div', {
                        style: {
                            paddingTop: '48px',
                            borderLeft: '1px #34495e solid',
                            borderRight: '1px #34495e solid',
                            borderBottom: '1px #34495e solid'
                        },
                        className: 'row' })
                )
            );
        }
    }]);

    return Display;
}(_react2.default.Component);

function handleDateTime(dateTime, split) {

    var d = new Date(dateTime);

    return d.getFullYear() + split + handleMonthOrDate(d.getMonth() + 1) + split + handleMonthOrDate(d.getDate());
}

function handleSexNum(sex) {
    switch (sex) {

        case 1:
            return _const.translated.male;
        case 2:
            return _const.translated.female;
        default:
            return _const.translated.unknown;

    }
}

function handleMonthOrDate(v) {
    return (v + '').length > 1 ? v : '0' + v;
}

Display.propTypes = {
    resume: _react.PropTypes.object.isRequired
};

exports.default = Display;