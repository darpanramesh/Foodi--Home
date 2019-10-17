import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {Button} from '../index';
import Grid from '@material-ui/core/Grid';


const RecipeReviewCard = (props) => {
    const [count, setCount] = useState(1)
    return (
        <div style={{ margin: "20px" }}>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={12} md={12} lg={12}>
                <Paper style={{ padding: 40, display: "flex",width:'500px' }}>
                    <div style={{ marginRight: "10px" }}>
                        <img src={props.product} width='100' />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                        <h3 style={{ color: "#878a8f" }}>Rs: {props.price}</h3>
                        <h3>Quantity:</h3>
                        <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "20%" }}>
                            <button onClick={() => setCount(count > 0 ? count - 1 : 0)} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                            <h5 style={{ color: "#9C27B0", marginTop: "2px" }}>{count}</h5>
                            <button onClick={() => setCount(count + 1)} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                        </div>
                        <Button onClick={() => props.click({ props, count })} size="large" style={{ color: "#fff", backgroundColor: "#878a8f", marginTop: "30px" }}>
                            Add to Cart
                    </Button>
                    </div>
                </Paper>
                </Grid>
                </Grid>
        </div>
            )
        }
        
export default RecipeReviewCard;