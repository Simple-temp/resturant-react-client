import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal/lib/components/Modal';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './redux/Store';

const info = JSON.parse(localStorage.getItem("userInfo"))
//http://localhost:4000
//https://resturant-7fgl.onrender.com
const client = new ApolloClient({
  uri: 'https://resturant-7fgl.onrender.com/graphql',
  cache: new InMemoryCache(),
  headers : {
    authorization : info ? `Bearer ${info.token}` : ""
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'), Modal.setAppElement('#root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
