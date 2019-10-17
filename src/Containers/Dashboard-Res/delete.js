import React from 'react'
import '../../App.css'
import {firebaseApp} from '../../Config/index';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { NavbarPage1, Button,  } from '../../Componets/index'









class Delete extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCart: [],
            products: []
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("cartDetail")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }

        let { products } = this.state
        firebaseApp.firestore().collection("Products").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getproducts = doc.data()
                    getproducts.id=doc.id
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
            })

    }

    delete = async (v,i) => {

        let {products} = this.state
        await firebaseApp.firestore().collection('Products').doc(v.id).delete().then(
            products.splice(i,1)          
        )
        this.setState({
            products:products
        })
        
    }
    render() {
        let { products } = this.state
        console.log(products);
        return (
            <div>
            <NavbarPage1 profile='/Dashboard-Resturent-myProfile' path={this.props.history} list={[{ name: 'Dashboard',path:'/Dashboard-Resturent' },{ name: 'Add Catigory',path:'/Dashboard-Resturent-AddCatigory' }, { name: 'Add Product', path: '/Dashboard-Resturent-AddProduct' }]} />
                <div>
                    <h1 className='App'>Delete Product</h1>
                    <div style={{ margin: "15px 15px 15px 0px", }}>
                    <Grid container justify='flex-start' spacing={3}>
                        <Grid item xs={12}>
                            <Paper style={{ padding: 20, display: "flex" }}>
                                <table>
                                    <tr>
                                        <td style={{ textAlign: "center",width:'500px',padding:'1%',fontWeight:'bold',border:'2px solid gray' }}>Item Image</td>
                                        <td style={{ textAlign: "center",width:'500px',padding:'1%',fontWeight:'bold',border:'2px solid gray' }}>Item Name</td>
                                        <td style={{ textAlign: "center",width:'500px',padding:'1%',fontWeight:'bold',border:'2px solid gray' }}>Item Price</td>
                                        <td style={{ textAlign: "center",width:'500px',padding:'1%',fontWeight:'bold',border:'2px solid gray' }}>Delivery Charges</td>
                                    </tr>
                                    <br />
                                    {products.map((val, i) =>
                                      {
                                    return <tr>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={val.foodImage} width="100" />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h2>{val.ItemName}</h2>
                                    </td>
                                    <td style={{ textAlign: "center"}}>
                                        <h3>{val.Price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h3>{val.charges}</h3>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h3 style={{color:'red',cursor:'pointer',fontWeight:'bold'}} onClick={()=> this.delete(val,i)}>X</h3>
                                    </td>
                                    </tr>
                                    }
                                    )}
                            </table>
                            </Paper>
                            </Grid>
                        </Grid>
                        </div>
                </div>
            </div>
        )
    }
}

export default Delete;