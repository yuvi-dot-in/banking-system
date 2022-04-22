import React from 'react';
import { makeStyles, Grid, Typography, useMediaQuery, useTheme, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',

        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 45,
        width: 200,
        // marginRight:40,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },

}))

export default function LandingPage(props) {
    const classes = useStyles();

    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));




    return (
        <Grid container direction='column'>
            <Grid item className={classes.rowContainer} style={{ marginTop: '1em' }}>
                <Typography
                    variant='h2'
                    style={{ fontFamily: 'Pacifico' }}
                    align={matchesMD ? 'center' : undefined}
                >
                    ST Bank
                </Typography>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? 'column' : 'row'}
                className={classes.rowContainer}
                alignItems='center'
                style={{ marginTop: ' 2em', marginBottom: '1.7em' }}
            >
                <Grid item lg>
                    <img
                        src='https://pbs.twimg.com/media/EUkgup2WAAAoke0?format=jpg&name=small'
                        alt='mountain'
                        style={{
                            maxWidth: matchesSM ? 300 : '40em',
                            marginRight: matchesMD ? 0 : '5em',
                            marginBottom: matchesMD ? '5em' : 0
                        }}
                    />
                </Grid>

                <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
                    <Grid item>
                        <Typography variant='h4' style={{ textAlign: 'center' }} gutterBottom align={matchesMD ? 'center' : 'inherit'}>
                            BANKING SYSTEM
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{ textAlign: 'center' }} paragraph align={matchesMD ? 'center' : 'inherit'}>
                            Simpler. Faster. Safer
                        </Typography>
                        <Grid item align='center' style={{ marginBottom: '3em' }}>
                            <Button variant='contained' className={classes.estimateButton}
                                component={Link} to='/create'
                                style={{ color: 'white' }}
                                onClick={() => {
                                    props.setValue(3)
                                }}
                            >
                                Create New Account
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )

}