import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    signup: {
        backgroundColor: 'grey',
        float: 'right',
        padding: '160px',
        margin: '30px',
  }
}));

export default function Signup() {
    const classes = useStyles();
    const history = useHistory();
    const register = () => {

    }

    const login = () => {
        history.push('/login');

    }
    
    return (
        <div className={classes.signup}>
        <div><h2>Registration form</h2></div>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField label="Name" id="standard-error"  variant="outlined" />
                <TextField id="standard-error-helper-text" label="Username" variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="filled-error"
                    label="Password"
                    type="password"
                    variant="outlined"
                />
                <TextField
                    id="filled-error-helper-text"
                    label="Confirm Password"
                    variant="outlined"
                />
            </div>
            <div>
            </div>
        </form>
        <Button variant="contained" onClick={register} color="primary">
       Register
    </Button><br/>
    <Button variant="contained" onClick={login} color="primary">
      Login
    </Button>
        </div>
    );
}
