import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#527273',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  grow: {
    flexGrow: 1,
  },
  productImage: {
    height: '350px',
    width: '450px'
  },
  footer: {
    textAlign: 'center',
  },
});
export default useStyles;