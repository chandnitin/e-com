import React,{Component} from 'react'
import { Container, Card, Row,Button } from 'react-bootstrap'



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:null,
            password:null,
            access_token:null,
            is_auth:false,
            usernameErr:null,
            passwordErr:null
        }
        this.authenticat= this.authenticat.bind(this);
    
    }
    componentDidUpdate(){
        
    }
     authenticat = ()=>{
        
         if(this.state.user == null || this.state.user == ''){
            
            this.setState({usernameErr : "Username can not be empty." }); 
        }else{
            this.setState({usernameErr :null});
        }
        if(this.state.password == null ||this.state.password == ''){
            this.setState({passwordErr : "Password can not be empty." });
        }else{
            this.setState({passwordErr :null});
        }
         
     }
    
    render() {
        return (
            <Container>
            <Row >
                <div className="offset-4 mt-4">
                <Card style={{ width: '28rem' }} >
                    <Card.Header as="h5" >Login</Card.Header>
                    <Card.Body>
                                <form action="">
                                <div className="form-group">
                                    <label className="lable" for="username"> Username </label>
                                    <input type="text" name="username" id="username" className="form-control required"  onChange={(event)=>{ this.setState({user:event.target.value})}}/>
                                     <p class="text-danger">{this.state.usernameErr}</p>
                                </div>
                                <div className="form-group">
                                    <label className="lable" for="password"> Password </label>
                                    <input type="password" name="password" id="password" className="form-control required"  onChange={(event)=>{ this.setState({password:event.target.value})}}/>
                                    <p class="text-danger">{this.state.passwordErr}</p>
                                </div>
                                <input type="button" value="Submit" name="btnsubmit" className="btn btn-success mr-2"  onClick={()=>{this.authenticat()}} />
                                 
                                <input type="reset" value="Reset" name="btnreset" className="btn btn-danger" />
                                </form>
                           
                    </Card.Body>
                </Card>
                </div>
          
            </Row> 
        </Container>
        );
    }
}




