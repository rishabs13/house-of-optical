import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routers } from './routes';
import AuthProvider from  './contexts/AuthContext'
import { CssBaseline, Grid } from '@material-ui/core'
import NavBar from './components/navbar'
import Footer from './components/Footer/footer';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router basename={`/`}>
          <AuthProvider>
            <CssBaseline />

            <Grid item xs={12}>
              <NavBar />
            </Grid>

            <Routers />

            <Grid item xs={12} >
              <Footer />
            </Grid>

          </AuthProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
