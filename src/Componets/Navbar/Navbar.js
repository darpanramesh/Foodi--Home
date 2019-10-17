import React, { Component } from "react";
import logo from '../../Images/foodi-home.jpg'
import { Link } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import {LogOut} from '../../Store/Action/Action'
import { connect } from 'react-redux'




class NavbarPage1 extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

logOut(data){
  console.log(data,900);
  this.props.LogOut(this.props.path)
}

render() {
  console.log("------>",this.props.path)
  return (

      <MDBNavbar color="unique-color-dark" dark expand="md" style={{ marginTop: "10px",background:'black' }}>
        <MDBNavbarBrand>
        <img src={logo} height="50" alt="" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
            </MDBNavItem>
          */}
            {
              // console.log(this.props,'==>')
                this.props.list.map((val)=>{
                return <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon  className="mr-1" /><Link style={{color:'white'}} to={val.path}>{val.name}</Link></MDBNavLink>
              </MDBNavItem>
              })
            }
              <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem onClick={()=>this.props.path.push(this.props.profile)}>My account</MDBDropdownItem>
                  <MDBDropdownItem onClick={()=>this.logOut(this.props.path)}>Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    );
  }
}

const mapStateToProps = state => {
  return {
      name: state.name,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      LogOut: (path) => dispatch(LogOut(path)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarPage1)
