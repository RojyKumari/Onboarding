import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import BusinessInfo from './components/BusinessInfo';
import CardInfo from './components/CardInfo';
import Review from './components/Review';
import {updatePersonalInfo, updateBusinessInfo, updateCardInfo} from './store/app.actions';

function App(props) {
  console.log(props);
  return (
    <Router>
       <Switch>
          <Route path="/business">
            <BusinessInfo onSubmit={props.updateBusinessInfo}/>
          </Route>
          <Route path="/card">
            <CardInfo onSubmit={props.updateCardInfo}/>
          </Route>
          <Route path="/review">
          <Review/>
          </Route>
          <Route path="/">
          <PersonalInfo onSubmit={props.updatePersonalInfo}/>
          </Route>
        </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  updatePersonalInfo,
  updateBusinessInfo,
  updateCardInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
