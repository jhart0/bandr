import React from 'react';
import ReactDOM from 'react-dom';
import HeaderRow from './components/header';
import Form from './components/form';

ReactDOM.render(
    React.createElement(HeaderRow, null),
    document.getElementById('header')
);

ReactDOM.render(
    React.createElement(Form, null),
    document.getElementById('inputForm')
);