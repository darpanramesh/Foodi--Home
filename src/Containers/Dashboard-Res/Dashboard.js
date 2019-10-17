import React from 'react'
import { NavbarPage1, NavTabs1 } from '../../Componets/index'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { MDBCard } from 'mdbreact'
import { Verify } from '../index'
import '../../App.css'
import {firebaseApp} from '../../Config/index'
class DashboardRes extends React.Component {
    constructor(){
        super();
        this.state={
            check:''
        }
    }
    componentDidMount(){
        let that = this
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(user.emailVerified);
              let emailVerified = user.emailVerified;
              that.setState({check:emailVerified})
            } else {
              // No user is signed in.
            }
        let x = JSON.parse(localStorage.getItem('Current_User'));
        console.log(x)
        firebaseApp.firestore().collection("Orders").where('ProducterName','==',x.email).get()
        .then(res=>{
            res.forEach(doc=>{
                console.log(doc.data())
            })
        })
          });
    }
    render() {
        console.log(this.props.history)
        return (
            <div>
                {this.state.check ?

                    <div>
                        <div>
                            <NavbarPage1 profile='/Dashboard-Resturent-myProfile' path={this.props.history} list={[{ name: 'Add Catigory',path:'/Dashboard-Resturent-AddCatigory' },{ name: 'Add Product', path: '/Dashboard-Resturent-AddProduct' },{ name: 'Delete Product', path: '/Dashboard-Resturent-DeleteProduct' }]} />
                            <div>
                                <Grid justify='center' container>
                                    <Grid item xs={12} sm={12} lg={12} md={12}>
                                        <NavTabs1
                                            page1={<MDBCard className='bg' style={{ backgroundColor: 'black', }}>
                                                <Paper>
                                                    <div style={{ textAlign: 'center', }}>
                                                        <h1 style={{ color: '#ff7043' }}>Order in Pending</h1>
                                                        <div className="order_main_div2">
                                                            <i className="fas fa-circle" style={{ color: 'rgb(52, 73, 94)' }}></i>
                                                            <p className="status">No Pending Request </p></div>
                                                    </div>
                                                    <br />
                                                </Paper>
                                            </MDBCard>}
                                            page2={<MDBCard className='bg' style={{ backgroundColor: '#d6d5d1', }}>
                                                <Paper>
                                                    <div style={{ textAlign: 'center', }}>
                                                        <h1 style={{ color: '#ff7043' }}>Order in Progress</h1>
                                                        <div className="order_main_div2">
                                                            <i className="fas fa-circle" style={{ color: 'rgb(52, 73, 94)' }}></i>
                                                            <p className="status">No Progress To Request </p></div>
                                                    </div>
                                                    <br />
                                                </Paper>
                                            </MDBCard>}
                                            page3={<MDBCard className='bg' style={{ backgroundColor: 'black', }}>
                                                <Paper>
                                                    <div style={{ textAlign: 'center', }}>
                                                        <h1 style={{ color: '#ff7043' }}>Order Delivered</h1>
                                                        <div className="order_main_div2">
                                                            <i className="fas fa-circle" style={{ color: 'rgb(52, 73, 94)' }}></i>
                                                            <p className="status">No Delivery </p></div>
                                                    </div>
                                                    <br />
                                                </Paper>
                                            </MDBCard>}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <Verify />
                    </div>}
            </div>
        )
    }
}

export default DashboardRes

