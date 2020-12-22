import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
export default class PriceDetails extends Component {
    constructor() {
        super();
        this.state ={
            id:null,
            title:null,
            price:null,
            qty:null,
            img:null,
            description:null,
            totalAmount:null,
            open:'show',
        }
            
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/' + this.props.match.params.id).then(
            (response) => {
                response.json().then((result) => {
                   
                        this.setState({
                        id:result.id,
                        title:result.title,
                        price:result.price,
                        qty:this.props.match.params.qty,
                        img:result.image,
                        description:result.description,
                        totalAmount: (result.price * this.props.match.params.qty),
                        open:'hide',
                     });
                     console.log(this.state )
                })
            });

    }
    render() {
    
        return (
            <div>
                <div className={this.state.open}>
                <PriceLoad />
                </div>
            <Container >
                
            <div className="flex">
                <div className="products ">
                    <div className="product" id="product1">
                        <div className="img-hover-zoom">
                            <img src={this.state.img} className="p-img " />
                        </div>
                    </div>
                </div>
            <div className=' infos'>  
        <div className="price-prod">
            <p className="p-title">{this.state.title}</p>
         </div>
         <div className=" price-prod">
             <h4>Description </h4>
             {this.state.description}
         </div>
         <div className="price-prod al-right p-cart">
            <table>
                <tr>
                    <th>Price</th><td>{(this.state.price * 1).toFixed(2)}</td></tr>
                <tr>   <th>Quantity</th><td>{this.state.qty}</td></tr>
                <tr>  <th>Total Amount</th><td>{(this.state.totalAmount * 1).toFixed(2)}</td></tr>
                <tr> <th>SGST/CGST (18%)</th><td>{(this.state.totalAmount * 0.18).toFixed(2)}</td></tr>
                <tr> <th>Delivery charges</th><td>{(this.state.totalAmount * 0.05).toFixed(2)}</td></tr>
                <hr/>
                <tr> <th><strong>Net Amount</strong></th><td><strong>{((this.state.totalAmount + (this.state.totalAmount * 0.18))+(this.state.totalAmount * 0.05)).toFixed(2)}</strong></td>

                </tr>
                <hr/>
                <tr><td colSpan="2"><Button variant="contained" size="large" color="primary" className="p-booknow">
                    <Link to='/'>Pay Now</Link>
                </Button></td></tr>
            </table>

        </div>
                
                </div>
                 </div>
            </Container>
            </div>
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
export  function PriceLoad(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        
      };
      
      const handleToggle = () => {
          setOpen(!open);
      };
    return(
        <div>
            <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
                </Backdrop>
        </div>
    )
}