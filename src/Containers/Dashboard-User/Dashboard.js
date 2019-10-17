import React from 'react'
import { NavbarPage1, NavTabs, Button ,OutlinedTextFields,Chips,Card} from '../../Componets/index'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {MDBCard} from 'mdbreact'
import {Verify} from '../index'
import '../Home/Home.css'
import {firebaseApp} from '../../Config/index'


class DashboardUser extends React.Component {
    constructor(){
        super();
        this.state={
            check:'',
            AllProducts:[],
        }
    }
    componentDidMount(){
        let {AllProducts} = this.state;
        let that = this
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(user.emailVerified);
              let emailVerified = user.emailVerified;
              that.setState({check:emailVerified})
            } else {
              // No user is signed in.
            }
          });
         firebaseApp.firestore().collection('Products').get()
         .then((res)=>{
            res.forEach(doc=>{
                console.log(doc.data())
                AllProducts.push(doc.data())
                console.log(AllProducts);
                this.setState({
                    AllProducts
                })
            })
        })

    }
    render() {
        let {AllProducts} = this.state;
        return (
            <div>
            {this.state.check ?

            <div>
            <div>
                    <NavbarPage1 profile='/Dashboard-User-myProfile' path={this.props.history} list={[]} />
                <div>
                    <Grid justify='center' container>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <NavTabs  >
                                <MDBCard className='bg' style={{backgroundColor:'black',}}>
                            <Paper>
                               <div style={{textAlign:'center',padding:'3%'}}>
                                <OutlinedTextFields label='search your resturant' style={{ width: '95%' }} />
                               <Button className='btn' style={{width:'250px',}} onClick={()=>alert("find-Resturent")}  color="deep-orange" name="Find-Resturent" />
                               </div>
                               <br />
                            </Paper> 
                            </MDBCard>
                            <br />
                            <div style={{textAlign:'center'}}>
                            <Chips label="Pizza" color='secondary' />
                            <Chips label="Burger" color='secondary' />
                            <Chips label="Fries" color='secondary' />
                            </div>
                            <br /><br />
                            <div>
                            {AllProducts.map((val,i)=>{
                                return <Card Producter={val.ProducterName}  AllCatigory={val.AllCatigory} catigory={val.CatigoryValue} charges={val.charges} key={i} name={val.ResturentName} ItemName={val.ItemName} product={val.CoverImage} product1={val.foodImage} history={this.props.history} click={this.addToCart}  price={val.Price} />
                            })}
                                
                            </div>
                            </NavTabs>
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

export default DashboardUser













