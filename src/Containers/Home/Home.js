import React from 'react'
import {  NavbarPage, Button } from '../../Componets/index'
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody  } from 'mdbreact';
import './Home.css'
import {Login } from '../../Store/Action/Action'
import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            passwordValue:true,
            button:true,
            password:'',
            email:''
        }
    }
    login(){
        let obj = {
            email:this.state.email,
            password:this.state.password
        }
        this.props.Login(obj,this.props.history)
    }
    render() {
        let {passwordValue,button} = this.state
        return (
            <div>
            <div style={{ marginBottom: '4%' }}>
                <NavbarPage />
            </div>
            <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <h1 style={{textAlign:'center',color:'#ff7043'}}>Login</h1>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={(e) => this.setState({ passwordValue: false, email: e.target.value })}
                                        />
                                        <MDBInput
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                            disabled={passwordValue}
                                            onChange={(e)=>this.setState({button:false,password:e.target.value})}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <Button disabled={button} style={{ width: '300px' }} onClick={this.login.bind(this)} color="deep-orange" name="Login" />
                                        <br /><br />
                                        <Link to='/Account'>Create new Account</Link>
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
        Login: (data,path) => dispatch(Login(data,path)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)


