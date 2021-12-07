import React from 'react'
import Head from 'next/head'
import { 
    AppBar,
    Toolbar,
    Typography,
    Container,
} from '@material-ui/core'
import Footer from './Footer'
import useStyles from '../utils/styles';


export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Barberry</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>Barberry</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Footer/>
            </footer>
        </div>
    )
}
