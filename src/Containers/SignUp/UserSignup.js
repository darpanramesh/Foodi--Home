import React from 'react'
import { Link } from 'react-router-dom';
import {  NavbarPage, Button,DropdownPage } from '../../Componets/index'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody  } from 'mdbreact';
import {UserSignUp} from '../../Store/Action/Action'
import { connect } from 'react-redux'



class UserSingup extends React.Component {
    constructor(){
        super();
        this.state={
            email:true,
            pass1:true,
            city:true,
            button:true,
            pass2:true,
            emailValue:'',password:'',confirmPassword:'',cityValue:'',nameValue:''
        }
    }
    user(){
        let {emailValue,password,confirmPassword,cityValue,nameValue} = this.state
        const obj = {
            emailValue,password,confirmPassword,cityValue,nameValue
        }
       this.props.UserSignUp(obj,this.props.history); 
    }
    render() {
        let {email,pass1,pass2,city,button} = this.state
        return (
            <div>
            <div style={{ marginBottom: '1%' }}>
                <NavbarPage />
            </div>
            <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                    <h1 style={{textAlign:'center',color:'#ff7043'}}>Sign Up</h1>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Your FullName"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={(e)=>this.setState({email:false,nameValue:e.target.value})}
                                        />
                                        <MDBInput
                                            label="Your email"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            disabled={email}
                                            onChange={(e)=>this.setState({city:false,emailValue:e.target.value})}
                                        />
                                        <DropdownPage disabled={city} onChange={(e)=>this.setState({pass1:false,cityValue:e.target.value})} label="City" list={[{name:"Mithi"},{name:"Islamkot"},{name:"Lahore"},{name:"Karachi"},{name:"Hyderabad"},{name:"Mirpurkhas"},{name:"Lahore"},{name:"Islamabad"}]} />
                                        <MDBInput
                                            label="Your password"
                                            group
                                            type="password"
                                            validate
                                            disabled={pass1}
                                            onChange={(e)=>this.setState({pass2:false,password:e.target.value})}                                            
                                        />
                                            <MDBInput
                                            label="Your password"
                                            group
                                            type="password"
                                            validate
                                            disabled={pass2}
                                            onChange={(e)=>this.setState({button:false,confirmPassword:e.target.value})}
                                        />
                                        
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <Button disabled={button} style={{ width: '300px' }} onClick={this.user.bind(this)} color="deep-orange" name="Register" />
                                        <br /><br />
                                        <Link to='/'>Already Have Account</Link>                                    
                                    </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        UserSignUp: (data,path) => dispatch(UserSignUp(data,path)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserSingup)
