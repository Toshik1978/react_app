import * as React from 'react';
import {BrowserRouter, Redirect, Route, Switch, RouteComponentProps} from 'react-router-dom';
import type {RouteProps} from 'react-router-dom';

import {Grid, CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {useKeycloak} from '@react-keycloak/web';

import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/LoginPage/LoginPage';

const useStyles = makeStyles({
    root: {
        minHeight: '100vh'
    }
});

interface PrivateRouteParams extends RouteProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>
}

function PrivateRoute({
                          component: Component,
                          ...rest
                      }: PrivateRouteParams) {
    const {keycloak} = useKeycloak();

    return (
        <Route
            {...rest}
            render={(props: any) =>
                keycloak?.authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    );
}

export const AppRouter = (): JSX.Element => {
    const classes = useStyles();
    const {initialized} = useKeycloak();

    if (!initialized) {
        return (
            <Grid container direction='column' justify='center' alignItems='center' className={classes.root}>
                <CircularProgress/>
            </Grid>
        );
    }

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' component={HomePage}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    );
};
