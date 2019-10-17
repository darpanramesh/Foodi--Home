import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavbarPage1, Button,  } from '../../Componets/index'
import { firebaseApp } from '../../Config/Firebase/Firebase'
// import Multiselect from 'multiselect-dropdown-react'
import '../Home/Home.css'

export default class AddProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            Catigory:'',
        }
        this.addCatigory = this.addCatigory.bind(this);
    }
    addCatigory() {
        let x = JSON.parse(localStorage.getItem('Current_User'));
        console.log(x)
        let obj = {
            UserName:x.email,
            name:this.state.Catigory
        }
        console.log(obj)

        firebaseApp.firestore().collection("Catigory").add(obj);
    }
    componentDidMount() {
    }
    
    render() {
        return (
            <div>
            <div style={{ marginBottom: '4%' }}>
            <NavbarPage1 profile='/Dashboard-Resturent-myProfile' path={this.props.history} list={[{ name: 'Dashboard',path:'/Dashboard-Resturent' },{ name: 'Add Product',path:'/Dashboard-Resturent-AddProduct' }, { name: 'Delete Product', path: '/Dashboard-Resturent-DeleteProduct' }]} />
            </div>
            <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <h1 style={{textAlign:'center',color:'#ff7043'}}>Add Catigory</h1>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Catigory Name"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ Catigory: e.target.value }) }}
                                    />                                   
                                </div>
                                <div className="text-center py-4 mt-3">
                                        <Button onClick={this.addCatigory}  style={{ width: '300px' }}  color="deep-orange" name="add Catigory" />
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