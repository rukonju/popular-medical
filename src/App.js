
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import Details from './pages/Details/Details';
import Doctors from './pages/Doctors/Doctors';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/ditails/:serviceId">
            <Details></Details>
          </Route>
          <PrivateRoute path="/appoinment">
            <Appoinment></Appoinment>
          </PrivateRoute>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/sign_up">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <Page404></Page404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
