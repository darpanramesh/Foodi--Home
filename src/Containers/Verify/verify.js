import React from 'react'
import { NavbarPage1, NavTabs1, NavbarPage, Button } from '../../Componets/index'
import './Verify.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import iconVerify from '../../Images/verify.jpg'
export default class Verify extends React.Component {
    render() {
        return (
            <div>
                    <div>
                        <NavbarPage1 list={[]} />
                    </div>
                <Grid justify='center' container>
                    <Grid item xs={12} sm={12} lg={12} md={12}>
                    <Paper>
                    <div className="verify-container">
                        <div className="img-div">
                            <img className="img-div" src={iconVerify} />
                            <p className="head1">Verify your email to proceed</p>
                            <p className="para">We just sent an email to the address: <b></b></p>
                            <p className="para2">Please check your email and click on the link provided to verify your address.</p>
                            <Button color='deep-orange' name="resend verification email" /></div>
                    </div> 
                    </Paper>
                    </Grid>
                    </Grid>
            </div>
                )
            }
}