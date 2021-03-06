
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import data from '../utils/data'
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} sm={6} key={product.name}>
              <Card>
                <NextLink href={ `/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                  className={classes.productImage}
                  component="img"
                  image={product.image}
                  title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>$ {product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
