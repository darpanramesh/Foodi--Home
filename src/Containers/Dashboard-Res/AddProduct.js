import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import { NavbarPage1, Button, DropdownPage } from '../../Componets/index'
import { firebaseApp } from '../../Config/Firebase/Firebase'
// import Multiselect from 'multiselect-dropdown-react'
import '../Home/Home.css'

export default class AddProduct extends React.Component {
    constructor() {
        super();
        this.state = {
          ItemName:'',
          Price:'',
          charges:'',
          foodImage:'',
          SearchTag:'',
          CoverImage:'',
          CatigoryValue:'',
          AllCatigory:[],
          CoverImage:'',
          ResturentName:'',
          ProducterName:''
        }
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct() {
        console.log(this.state)
        firebaseApp.firestore().collection("Products").add(this.state);
    }
    componentDidMount() {
        let {AllCatigory,CoverImage} = this.state;
        let x = JSON.parse(localStorage.getItem('Current_User'));
        console.log(x)
        firebaseApp.firestore().collection('Catigory').where('UserName','==',x.email).get()
        .then((res)=>{
            res.forEach(doc=>{
                AllCatigory.push(doc.data())
                console.log(AllCatigory);
                this.setState({
                    AllCatigory,
                })
            })
        })
        firebaseApp.firestore().collection('Users').doc(x.id).get()
        .then((res)=>{
            let user = res.data()
            console.log(user);
                this.setState({
                    CoverImage:user.imageValue,
                    ResturentName:user.nameValue,
                    ProducterName:user.email
                })
        })
    }
    async imageUpload(e) {
        console.log(e.target.files[0]);
        let fileName = e.target.files[0].name;
        let ref = firebaseApp.storage().ref('/').child(`FoodImages/${fileName}`);
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url);
            this.setState({ foodImage: url })
        })
    }

    
    render() {
        console.log(this.state)
        return (
            <div>
            <div style={{ marginBottom: '4%' }}>
            <NavbarPage1 profile='/Dashboard-Resturent-myProfile' path={this.props.history} list={[{ name: 'Dashboard',path:'/Dashboard-Resturent' },,{ name: 'Add Catigory',path:'/Dashboard-Resturent-AddCatigory' }, { name: 'Delete Product', path: '/Dashboard-Resturent-DeleteProduct' }]} />
            </div>
            <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <h1 style={{textAlign:'center',color:'#ff7043'}}>Add Product</h1>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Item Name"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ ItemName: e.target.value }) }}
                                    />
                                        <DropdownPage  onChange={(e)=>this.setState({CatigoryValue:e.target.value})} label="Select Catigory" list={this.state.AllCatigory} />
                                        <MDBInput
                                        label="Search tag"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ SearchTag: e.target.value }) }}
                                    />
                                       <MDBInput
                                        group
                                        validate
                                        error="wrong"
                                        success="right"
                                        type="number"  label="Price" 
                                        onChange={(e) => { this.setState({ Price: e.target.value }) }}
                                    />
                                        <MDBInput
                                        type="file" 
                                        group
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.imageUpload.bind(this)}  
                                    />
                                    <MDBInput
                                        type="number"
                                        group
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { this.setState({ charges: e.target.value }) }} 
                                        label="Delivery Charges"
                                    />                                    
                                </div>
                                <div className="text-center py-4 mt-3">
                                        <Button  style={{ width: '300px' }} onClick={this.addProduct}  color="deep-orange" name="Add Product" />
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