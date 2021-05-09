import './App.css';
import { Route, Switch, /*BrowserRouter,  Redirect */ } from 'react-router-dom'
import LandingPage from './components/Landingpage/Landingpage';
import Signupform from './components/signuppage/signupform';
import Signinform from './components/signinpage/signinform';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
    <div className="App">
      <Route exact path='/'>
      <div className="main-container">
        <LandingPage />
      </div>
      </Route>
      <Switch>
      <Route exact path='/signin'>
      <div className="form-main-container">
						<Signinform /></div>
					</Route>
          <Route exact path='/signup'>
          <div className="form-main-container">
         <Signupform />
         </div>
					</Route>
          </Switch>
      
    </div>
    </ToastProvider>
  );
}

export default App;
