
import React, { Component ,useEffect,useState} from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default class ProductDetails extends Component {
    constructor() {
        super();
       

    }

   
    render() {

        return (
            <Container>
                <ProductDe fields={this.props.match.params.id} />
               
            </Container>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));
 export  function ProductDe(fields){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(true);
    const [qty, setEntity] = useState([1]);
   
    const handleClose = () => {
      setOpen(false);
      
    };
    
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleChange = (event) => {
        
        setEntity(event.target.value)
        
        
    }
    useEffect(() => {
       
        let url = "https://fakestoreapi.com/products/" + fields.fields;
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn("FUN",result)
                setData(result);
                
                localStorage.setItem("productDetails", JSON.stringify(result))
                handleClose(false);
            })
        }).catch(err => {
            let collection = localStorage.getItem("productDetails")
            setData(JSON.parse(collection));
            
            handleClose(false);

        })
      
     },[])
        return(
            <div>
                
                <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
                </Backdrop>
                <div className="p-details">
                    <div className="flex">
                        <div className="products">
                            <div className="product" id="product1">
                                <div className="img-hover-zoom">
                                <img src={data.image} className="p-img " />
                                </div>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="info" >
                                <h3 className="product-name">{data.title}</h3>
                            </div>
                                <br/>
                                <hr/>
                                <br/>
                                
                            <div className="info" >
                               <p><strong> Discription :</strong> </p>
                                <br/>
                                
                               <p>{data.description}</p>
                               
                            </div>

                            <div className="footer-product" >
                            <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Quantity</InputLabel>
                            <Select
                                native
                                value={qty}
                                onChange={handleChange}
                                inputProps={{
                                name: 'quantity',
                                id: 'quantity',
                                }}
                            >
                                
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                    </Select>
                                </FormControl>
                                    <br/>
                            <strong> Price : {data.price * qty}</strong> &nbsp; <span>Only For C.O.D. available</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            
                                <Button variant="contained" size="large" color="primary"  className="p-booknow">
                                <Link to={"/booking/"+data.id +'/'+qty }>Confirm</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }   
