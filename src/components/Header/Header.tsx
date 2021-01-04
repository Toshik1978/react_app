import * as React from 'react';

import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {AccountBox} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        padding: '10px 0',
        flexGrow: 1
    },
    scale: {
        fontSize: '600%',
    },
});

const Header = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid container direction='column' alignItems='center' className={classes.root}>
            <Grid item>
                <AccountBox className={classes.scale}/>
            </Grid>
            <Grid item>
                <Typography variant='h5'>JWT with Keycloak</Typography>
            </Grid>
            <Grid item>
                <Typography variant='body1'>Simple prototype with React & Keycloak</Typography>
            </Grid>
        </Grid>
    );
};

export default Header;
