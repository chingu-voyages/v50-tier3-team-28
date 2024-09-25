import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';

const root = document.getElementById('root');

createRoot(root).render(
	<React.StrictMode>
		<Auth0Provider
			domain={import.meta.env.VITE_AUTH0_DOMAIN}
			clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
			audience={import.meta.env.VITE_AUTH0_API_IDENTIFIER}
			authorizationParams={{
				redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URI,
				audience: import.meta.env.VITE_AUTH0_API_IDENTIFIER,
			}}
		>
			<Provider store={store}>
				<App />
			</Provider>
		</Auth0Provider>
	</React.StrictMode>
);
