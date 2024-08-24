import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import{transitions,positions,Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
root.render(
  <Provider store={store}>
  <AlertProvider template={AlertTemplate} {...options}>
  <React.StrictMode>
   
      
        <App />
        </React.StrictMode>
      </AlertProvider>
    </Provider>
  
);
