import React from 'react'
import { PaperSheet, NavbarPage, Button } from '../../Componets/index'
import Grid from '@material-ui/core/Grid';
import logo from '../../Images/foodi-home.jpg'
import '../Home/Home.css'

class ResUser extends React.Component {
    render() {
        return (
            <div>
                <div style={{marginBottom:'4%'}}>
                <NavbarPage />
                </div>
                <Grid justify='center' container spacing={3}>
                    <PaperSheet>
                        <Grid item xs={10} sm={10} md={6} lg={5}>
                        <div>
                            <img src={logo} />
                        </div>
                        <div>
                            <Button className='btn' style={{width:'350px'}} onClick={()=>this.props.history.push('/Resturent')}  color="deep-orange" name="Resturent"  />
                            <br />
                            <Button style={{width:'350px'}} onClick={()=>this.props.history.push('/User')} color="deep-orange" name="&nbsp;&nbsp;&nbsp;&nbsp; User &nbsp;&nbsp;&nbsp;&nbsp;" />
                        </div>
                    </Grid>
                        </PaperSheet>
                </Grid>
            </div>
        )
    }
}

export default ResUser

