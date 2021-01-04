import * as React from 'react';

import {Grid} from '@material-ui/core';

import Header from '../../components/Header/Header';
import RestView from '../../components/RestView/RestView';
import JwtView from '../../components/JwtView/JwtView';
import Logout from '../../components/Logout/Logout';

import {useKeycloak} from '@react-keycloak/web';

const HomePage = (): JSX.Element => {
    const {keycloak} = useKeycloak();

    return (
        <Grid container>
            <Header />
            <Logout keycloak={keycloak} />
            <RestView token={keycloak?.token} />
            <JwtView token={keycloak?.token} />
        </Grid>
    );
};

export default HomePage;
