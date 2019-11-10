import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from './utils/AuthContext';

import App from './App';
import './global.css';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain='dev-py-3sxvg.auth0.com'
        client_id='3INkXDxHgkJSFIjd8lzJn4uhj5MYLfVG'
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <App />
    </Auth0Provider >,
    document.getElementById('root')
);
