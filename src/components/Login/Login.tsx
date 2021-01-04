import * as React from 'react';
import {useCallback} from 'react';

import {Button, Grid} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';

import {KeycloakInstance} from 'keycloak-js';

const useStyles = makeStyles({
    padding: {
        padding: '0 0 10px'
    },
    color: {
        backgroundColor: '#f5ada2'
    }
});

const Login = ({keycloak}: {keycloak?: KeycloakInstance}): JSX.Element => {
    const classes = useStyles();
    const login = useCallback(() => {
        keycloak?.login();
    }, [keycloak]);

    return (
        <>
            <Grid container justify='center' className={classes.padding}>
                <Grid item xs={5}>
                    <Alert severity='error' variant='outlined' className={classes.color}>
                        <AlertTitle>You are currently not logged in</AlertTitle>
                        Press Login to be redirected to Keycloak.
                    </Alert>
                </Grid>
            </Grid>
            <Grid container justify='center' className={classes.padding}>
                <Button onClick={login} variant='contained'>
                    Login
                </Button>
            </Grid>
        </>
    );
};

export default Login;
