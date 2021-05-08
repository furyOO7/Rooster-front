import './App.css';
import { Route, Switch, /*BrowserRouter,  Redirect */ } from 'react-router-dom'
import LandingPage from './components/Landingpage/Landingpage';
import Signupform from './components/signuppage/signupform';
import Signinform from './components/signinpage/signinform';

function App() {
  return (
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
  );
}

export default App;
