import React, { Component } from "react";
import logo from '../../Images/foodi-home.jpg'
import { MDBNavbar, MDBNavbarBrand,  } from "mdbreact";
class NavbarPage extends Component {
    state = {
      collapseID: ""
    };
    
    toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
    
    render() {
      return (
          <MDBNavbar color="unique-color-dark" style={{ marginTop: "10px" }} dark>
            <MDBNavbarBrand href="#">
              <img src={logo} height="50" alt="" />
            </MDBNavbarBrand>
          </MDBNavbar>
        );
      }
    }

export default NavbarPage;