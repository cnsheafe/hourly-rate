import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HourlyRate from './rate-calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HourlyRate/>, document.getElementById('root'));
registerServiceWorker();
