import * as React from 'react';
import {Redirect, useLocation} from 'react-router-dom';

import {Grid} from '@material-ui/core';

import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

import {useKeycloak} from '@react-keycloak/web';

const LoginPage = (): JSX.Element => {
    const location = useLocation<{ [key: string]: unknown }>();
    const currentLocationState = location.state || {
        from: {pathname: '/'}
    };

    const {keycloak} = useKeycloak();

    if (keycloak?.authenticated) {
        return <Redirect to={currentLocationState.from as string}/>;
    }

    return (
        <Grid container>
            <Header />
            <Login keycloak={keycloak} />
        </Grid>
    );
};

export default LoginPage;
