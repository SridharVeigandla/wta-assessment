import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Router, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import Header from './Header';
import Signup from './signup/signup';
import HeaderNew from './HeaderNew'
const useStyles = makeStyles((theme) => ({

}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Switch>
        <Route path="/home" component={HeaderNew} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}
