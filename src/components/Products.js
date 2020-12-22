import React, { useState, useEffect,Fragment }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:25,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    items:{
        textAlign:'left',
    },
    descriptionCell: {
        whiteSpace: 'nowrap',
        maxWidth: '200px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
  }));
export default function Products() {
    const classes = useStyles();    
    const [data, setData] = useState([]);
    const [pid, setPID] = useState([]);
    const [value, setValue] = React.useState('all');
    
    const handleChange = (event, newValue) => {
        
      setValue(newValue);
      getProduct(newValue);
    };
 const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
    const getProduct = (category) =>{
        handleToggle(false);
        let url =(category !='all')?  "https://fakestoreapi.com/products/category/" +category  : "https://fakestoreapi.com/products/";
        fetch(url).then((response) => {
            response.json().then((result) => {
               
                setData(result)
                localStorage.setItem("product",JSON.stringify(result))
                handleClose(false);
            })
        }).catch(err =>{
          
            let collection =localStorage.getItem("product")
            setData(JSON.parse(collection))
            handleClose(false);
            
        })
    }
  useEffect(() => {
    getProduct('all');
  }, [])

    const addToCart = value => () => {
      setOpen(true);
      
    let productData = [];
    productData.push({ productId: value, quantity: 3 })

    var today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
   
      fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:8,
                    date:date,
                    products:productData
                }
            )
        })
        .then((response) => {         
          response.json().then((result) => {
              
              handleClose(false);
          }).catch(err =>{
          
            console.warn(err);
            
        })
        })  
    }
    
    return (
        
    <div className={classes.root}>
    <Container>
    <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} showLabels>
      <BottomNavigationAction label="All" value="all"  /> 
      <BottomNavigationAction label="Men Fassion" value="men clothing"  /> 
      <BottomNavigationAction label="Women Fassion" value="women clothing"  />
      <BottomNavigationAction label="Electronics" value="electronics"  />
      <BottomNavigationAction label="Jewelery" value="jewelery"  />
    </BottomNavigation>

    <hr/>
    <br/>
    <Grid container spacing={3}>
     {
         data.map((product)=>(
            <Fragment>
            <Grid item xs={3} className={classes.items}>
        
        <Card >
        <Link to={"/product/" +product.id}>
            <CardActionArea>
            
                <CardMedia
                    component="img"
                    align="center"
                    alt={product.title}
                    height="140"
                    image={product.image}
                    title={product.title}
                    className={classes.image}
                   
                    
                />
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" className="wraptext" title={product.title}>
                        {product.title}
                </Typography >
                <Typography gutterBottom variant="h6" component="h6" className="text-center" title={product.price}>
                       <span>Rs.</span> {product.price}
                </Typography >
                <Typography variant="body2" color="textSecondary" component="p" className="truncate">
                       {product.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
             <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
        value ={product.id}
        onClick={addToCart(product.id)}
      >
        Add To Cart
      </Button>
      
                <Button variant="contained" size="small" color="secondary">
                <Link to={"/product/" +product.id}>Book Now</Link>
              </Button>
            </CardActions>
        </Card>
        </Grid>

        </Fragment>
         ))
     }
      
        </Grid>
        </Container>
    </div>
  
    )

}
