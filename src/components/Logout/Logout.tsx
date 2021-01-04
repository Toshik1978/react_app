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
        backgroundColor: '#bff5cc'
    }
});

const Logout = ({keycloak}: {keycloak?: KeycloakInstance}): JSX.Element => {
    const classes = useStyles();
    const logout = useCallback(() => {
        keycloak?.logout();
    }, [keycloak]);

    return (
        <>
            <Grid container justify='center' className={classes.padding}>
                <Grid item xs={5}>
                    <Alert severity='success' variant='outlined' className={classes.color}>
                        <AlertTitle>You are currently logged in</AlertTitle>
                        Try to access the REST API and get the secured message.
                    </Alert>
                </Grid>
            </Grid>
            <Grid container justify='center' className={classes.padding}>
                <Button onClick={logout} variant='contained'>
                    Logout
                </Button>
            </Grid>
        </>
    );
};

export default Logout;
