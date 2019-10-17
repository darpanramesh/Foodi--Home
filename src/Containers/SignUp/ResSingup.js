import React from 'react'
import { Link } from 'react-router-dom';
import { NavbarPage, Button, DropdownPage } from '../../Componets/index'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, } from 'mdbreact';
import {ResturentSignUp} from '../../Store/Action/Action'
import { connect } from 'react-redux'
import {firebaseApp} from '../../Config/Firebase/Firebase'


class ResSingup extends React.Component {
    constructor() {
        super();
        this.state = {
            email1: true,
            pass1: true,
            city: true,
            button: true,
            pass2: true,
            gender: true,
            age: true,
            nameValue: '', email: '', password: '', confirmPassword: '', cityValue: '', genderValue: '', imageValue: '',
            ageValue: ''
        }
    }
    componentDidMount(){
    }
    async imageUpload(e){
        console.log(e.target.files[0]);
        let fileName = e.target.files[0].name;
        let ref = firebaseApp.storage().ref('/').child(`Certification/${fileName}`);
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url)=>{
            console.log(url);
            this.setState({imageValue:url,button:false})
        })
    }
    resturent() {
        let {nameValue,email,password,confirmPassword,cityValue,genderValue,ageValue,imageValue} = this.state
        const obj = {
            nameValue,email,password,confirmPassword,cityValue,genderValue,ageValue,imageValue
        }
       this.props.ResturentSignUp(obj,this.props.history);
    }
    render() {
        let { email1, pass1, pass2, city, button, gender, age, file } = this.state
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
                                        <h1 style={{ textAlign: 'center', color: '#ff7043' }}>Sign Up</h1>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your FullName"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={(e) => this.setState({ email1: false, nameValue: e.target.value })}
                                            />
                                            <MDBInput
                                                label="Your email"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                disabled={email1}
                                                onChange={(e) => this.setState({ gender: false, email: e.target.value })}
                                            />
                                            <DropdownPage disabled={gender} onChange={(e) => this.setState({ genderValue: e.target.value, age: false })} label="Gender" list={[{ name: "Male" }, { name: "FeMale" }]} />
                                            <MDBInput
                                                label="Your age"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                disabled={age}
                                                onChange={(e) => this.setState({ city: false, ageValue: e.target.value })}
                                            />
                                            <DropdownPage disabled={city} onChange={(e) => this.setState({ pass1: false, cityValue: e.target.value })} label="City" list={[{ name: "Mithi" }, { name: "Islamkot" }, { name: "Lahore" }, { name: "Karachi" }, { name: "Hyderabad" }, { name: "Mirpurkhas" }, { name: "Lahore" }, { name: "Islamabad" }]} />
                                            <MDBInput
                                                label="Your password"
                                                type="password"                                                
                                                onChange={(e) => this.setState({ pass2: false, password: e.target.value })}
                                                disabled={pass1}
                                            />
                                            <MDBInput
                                                label="Your password"
                                                type="password"
                                                onChange={(e) => this.setState({ file: false, confirmPassword: e.target.value })}
                                                disabled={pass2}
                                            />
                                            <MDBInput
                                                group
                                                type="file"
                                                validate
                                                disabled={file}
                                                onChange={this.imageUpload.bind(this)}
                                            />


                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <Button disabled={button} style={{ width: '300px' }} onClick={this.resturent.bind(this)} color="deep-orange" name="Register" />
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
        ResturentSignUp: (data,path) => dispatch(ResturentSignUp(data,path)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResSingup)

