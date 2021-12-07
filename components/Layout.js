import React from 'react'
import Head from 'next/head'
import { 
    AppBar,
    Toolbar,
    Typography,
    Container,
    Link,
    createTheme,
    ThemeProvider,
    CssBaseline,
} from '@material-ui/core'
import NextLink from 'next/link'
import Footer from './Footer'
import useStyles from '../utils/styles';


export default function Layout({children, description, title}) {
    const theme = createTheme({
        typography: {
            h1: {
              fontSize: '1.6rem',
              fontWeight: 400,
              margin: '1rem 0',
            },
            h2: {
              fontSize: '1.4rem',
              fontWeight: 400,
              margin: '1rem 0',
            },
          },
          palette: {
            type: 'light',
            primary: {
              main: '#82b440',
            },
            secondary: {
              main: '#208080',
            },
          },
    })
    const classes = useStyles();
    return (
        <div>
            <Head>
             <title>{title ? `${title} - Next Barberry` : 'Next barberry'}</title>
             {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                <NextLink href="/" passHref>
                        <Link>
                           <Typography className={classes.brand}>
                               Barberry
                           </Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
              </AppBar>
              <Container className={classes.main}>
                {children}
              </Container>
              <footer className={classes.footer}>
                <Footer/>
              </footer>
            </ThemeProvider>
        </div>
    )
}
