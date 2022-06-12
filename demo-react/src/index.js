import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Contents from './Contents';

import './style.css';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Contents />
	</React.StrictMode>,
	document.getElementById('wrap')
);