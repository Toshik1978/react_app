import * as React from 'react';
import {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {Grid, Typography, Paper, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {RestViewContext} from '../../stores/RestViewStore';

const useStyles = makeStyles({
    button: {
        padding: '0 0 10px'
    },
    response: {
        backgroundColor: '#f8f8f9',
        minHeight: '10px'
    }
});

const RestView = observer(({token}: {token?: string}): JSX.Element => {
    const classes = useStyles();
    const store = useContext(RestViewContext);

    return (
        <>
            <Grid container direction='column' alignItems='center' className={classes.button}>
                <Typography variant='h5'>Access REST API</Typography>
                <Button onClick={() => store?.handleClick(token ?? '')} variant='contained'>
                    Access REST API
                </Button>
            </Grid>
            <Grid container justify='center'>
                <Grid item xs={5}>
                    <Paper variant='outlined' className={classes.response}>
                        <pre>{store?.response}</pre>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
});

export default RestView;
