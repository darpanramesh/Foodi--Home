import React, { useState } from 'react';
import { NavbarPage1, Button } from '../../Componets/index'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import '../../App.css'
// import {order } from '../../Store/Action/Action'
import { connect } from 'react-redux'


const useStyles1 = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: "#c270e5"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    //   image: {
    //     width: 128,
    //     height: 128,
    //   },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '80%',
        maxHeight: '80%',
    },
}));
function Product(props) {
    let array = []
    const classes = useStyles1();

    const [count, setCount] = useState(0);
    const [disabled, setDisable] = useState(false);


    console.log(props.location.state);
    let value = props.location.state;
    array.push(value)

    return (
        <div>
            <NavbarPage1 profile='/Dashboard-User-myProfile' path={props.history} list={[]} />
            <div className={classes.root}>
                        <Paper>
                        <div className="nameDiv" style={{display: 'flex', flexDirection: 'column', margin: '0px auto', alignItems: 'center'}}>
                            <h1 >{value.ResturentName}</h1>
                            <button className="delBtn">Delivery 55 min <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" style={{fontSize: '30px'}}>
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                            <path fill="none" d="M0 0h24v24H0V0z"></path></svg></button>
                            <div className="starDiv">
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" style={{fontSize: '23px',paddingRight: '5px'}}>
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                             <span>(no rated)</span></div>
                             </div>
                            {/* <div style={{textAlign:'center'}} className='nameDiv'>
                            </div> */}
                            <br />
                        </Paper>
                        <br /><br />
            {array.map((val,i)=>{
                    return <div>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            {/* <ButtonBase className={classes.image}> */}
                            <img className={classes.img} alt="complex" src={val.product1} />
                            {/* </ButtonBase> */}
                        </Grid>
                        <Grid item xs={12} lg={6} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        <h2>{props.ItemName}</h2>
                                    </Typography>

                                    {/* {
                                        props.tag.map(val => {
                                            return <MDBBadge style={{ marginLeft: '10px' }} color='badge badge-success' >{val}</MDBBadge>
                                        })
                                    } */}

                                </Grid>
                                <Grid item>
                                    {/* <Typography variant="body2" style={{ cursor: 'pointer',float:"right" }}> */}
                                    <Button color='deep-orange' style={{width:'150px'}} onClick={()=>{props.order(val)}} name='Order' />                                        
                                    {/* </Typography> */}

                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">PKR   {val.price}</Typography>
                                <Typography variant="subtitle1">Delivery Charges   {val.charges}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                </div>})}
            </div>

            </div>
    )
}
const mapStateToProps = state => {
    return {
        name: state.name,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // order: (data) => dispatch(order(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)












