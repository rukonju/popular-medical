
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import Doctors from './pages/Doctors/Doctors';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Router path="/services">
            <Services></Services>
          </Router>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Router path="/login">
            <Login></Login>
          </Router>
          <Router path="/sign_up">
            <SignUp></SignUp>
          </Router>
          <Route path="*">
            <Page404></Page404>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
