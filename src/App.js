import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routers } from './routes';
import AuthProvider from  './contexts/AuthContext'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router basename={`/`}>
          <AuthProvider>
          <Routers />          
          </AuthProvider>
          
        </Router>
      </Provider>
    </div>
  );
}

export default App;
