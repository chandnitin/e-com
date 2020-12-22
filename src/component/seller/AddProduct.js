import React, { Component } from 'react';
import { Container, Card, Row,Button ,Form,Col} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.btnHandle =this.btnHandle.bind(this)
    }
     btnHandle = () => {
         alert('ok')
        toast.error('My this is my first message',
        {position:"top-center"}
        )
     }
    render() {
        return (
          
        <Container>
            <ToastContainer />
            <Row >
                <div className="mt-4 col-md-12">
                <Card style={{ width: '100%' }} size="ls">
                    <Card.Header as="h5" >Add Product</Card.Header>
                    <Card.Body>
                    <Form>
                        <Form.Group as={Row} >
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control type="text"  name="prodName"  id="prodName"/>
                            </Col>
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control as="select">
                                <option>select an option</option>
                                <option>Cat2</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            <Form.Label column sm="2">
                                Price
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control type="text"  name="price"  id="price"/>
                            </Col>
                            <Form.Label column sm="2">
                                Quantity
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control as="select">
                                <option>select an option</option>
                                <option>1 KG</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                       
                        <Form.File id="exampleFormControlFile1" label="Select Photo" />
                        </Form.Group>
                  
                    <hr/>
                    <Form.Group>
                    <Col sm="4">
                        <input type="button" value="Submit" name="btnsubmit" className="btn btn-success mr-2" onClick={this.btnHandle} />
                                    
                        <input type="reset" value="Reset" name="btnreset" className="btn btn-danger" />
                    </Col>
                    </Form.Group>
                    </Form>
                               
                           
                    </Card.Body>
                </Card>
                </div>
          
            </Row> 
        </Container>
           
        );
    }
}

AddProduct.propTypes = {

};

export default AddProduct;