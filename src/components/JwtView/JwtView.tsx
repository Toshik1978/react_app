import * as React from 'react';

import {Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {decodeToken} from '../../lib/decodeToken';

const useStyles = makeStyles({
    root: {
        padding: '10px 0',
        flexGrow: 1
    }
});

const JwtView = ({token}: {token?: string}): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>Your decoded token</Typography>
            </Grid>
            <Grid item xs={5}>
                <Paper variant='elevation' elevation={0}>
                    <pre>{decodeToken(token)}</pre>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default JwtView;
