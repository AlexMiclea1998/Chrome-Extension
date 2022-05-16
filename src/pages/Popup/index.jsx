import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    var url = tabs[0].url;
    render(<Popup url={url}/>, window.document.querySelector('#app-container'));
});


if (module.hot) module.hot.accept();
