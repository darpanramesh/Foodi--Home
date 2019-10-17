import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Home, DashboardRes,ResUser, ResSingup, UserSingup, DashboardUser,AddProduct,Delete,Verify, Product, AddCatigory, ResturentProfile,UserProfile } from '../../Containers/index';


class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route  exact path="/" component={Home} />
                <Route  path="/Dashboard-Resturent" component={DashboardRes} />
                <Route  path="/Dashboard-Resturent-AddProduct" component={AddProduct} />
                <Route  path="/Dashboard-Resturent-DeleteProduct" component={Delete} />
                <Route  path="/Dashboard-User" component={DashboardUser} />
                <Route  path="/Account" component={ResUser} />
                <Route  path="/Resturent" component={ResSingup} />
                <Route  path="/User" component={UserSingup} />
                <Route  path="/Verify" component={Verify} />
                <Route  path="/Product" component={Product} />
                <Route path='/Dashboard-Resturent-AddCatigory' component={AddCatigory} />
                <Route path='/Dashboard-Resturent-myProfile' component={ResturentProfile} />
                <Route path='/Dashboard-User-myProfile' component={UserProfile} />
 
                {/* <PrivateRoute authed={false} path="/about" component={About} /> */}
            </Router>
        )
    }
}

export default BasicRouter









