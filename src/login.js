import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
    },
    login: {
        backgroundColor: 'grey',
        float: 'right',
        padding: '160px',
        margin: '30px',
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();

  const[name,setName] = useState('');
  const[password,setPassword] = useState('');

  const login = () => {
    //alert(name + ", " +password);
    //todo // make api call to validate
    localStorage.setItem("isLoggedIn",true);
    history.push('/home');

  }
  const signup = () => {
    history.push('/signup');
  }

  return (
    <div className={classes.login}>
        <div><h2>Login</h2></div>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" value={name} label="Username" onChange={event=>setName(event.currentTarget.value)} variant="outlined" /><br/>
    <TextField id="outlined-basic" type="password"  value={password} label="Password" onChange={event=>setPassword(event.currentTarget.value)} variant="outlined" /><br/>
    <Button variant="contained" onClick={signup} color="primary">
       Signup
    </Button>
    <Button variant="contained" onClick={login} color="primary">
      Login
    </Button>
    </form>
    </div>
  );
}
