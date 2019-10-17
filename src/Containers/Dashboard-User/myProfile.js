import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavbarPage1, Button,  } from '../../Componets/index'
import { firebaseApp } from '../../Config/Firebase/Firebase'
// import Multiselect from 'multiselect-dropdown-react'
import '../Home/Home.css'

export default class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled1:true,            
            disabled2:true,            
        }
        this.editProfile = this.editProfile.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }
    editProfile() {
        this.setState({
            disabled1:false, 
        })
    }
    saveChanges(){
        this.setState({
            disabled1:true,
        })
        localStorage.setItem('Current_User',JSON.stringify(this.state));
    }
    componentDidMount() {
        let x = JSON.parse(localStorage.getItem('Current_User'));
        console.log(x)
        
        this.setState({
            nameValue:x.nameValue,
            cityValue:x.cityValue,
            emailValue:x.emailValue,
            genderValue:x.genderValue,           
            ageValue:x.ageValue,
            imageValue:x.imageValue,
            id:x.id,
            check:x.check,
        })
    }
    
    render() {
        let {disabled1,disabled2,nameValue,cityValue,emailValue} = this.state

        return (
            <div>
            <div style={{ marginBottom: '4%' }}>
            <NavbarPage1 profile='/Dashboard-User-myProfile' path={this.props.history} list={[]} />
            </div>
            <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <h1 style={{textAlign:'center',color:'#ff7043'}}>Edit Profile</h1>
                                    <div className="grey-text">
                                    <MDBInput
                                        group
                                        type="text"
                                        validate
                                        value={nameValue}
                                        disabled={disabled1}
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ nameValue: e.target.value }) }}
                                    />
                                        <MDBInput
                                        group
                                        type="text"
                                        validate
                                        value={emailValue}
                                        disabled={disabled2}
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ emailValue: e.target.value }) }}
                                    />
                                        <MDBInput
                                        group
                                        type="text"
                                        validate
                                        value={cityValue}
                                        disabled={disabled1}
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ cityValue: e.target.value }) }}
                                    />                                  
                                </div>
                                <div className="text-center py-4 mt-3">
                                    {disabled1 ?
                                        <Button onClick={this.editProfile}  style={{ width: '300px' }}  color="deep-orange" name="Edit Profile" />
                                        :
                                        <Button onClick={this.saveChanges}  style={{ width: '300px' }}  color="deep-orange" name="Save Changes" />
                                    }
                                        <br /><br />
                                       
                                    </div>
                                <br /><br />
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        )
    }

}