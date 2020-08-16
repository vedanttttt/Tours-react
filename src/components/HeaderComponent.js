import React,{Component} from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron,
  Button,Modal,ModalBody,ModalHeader,
  Form,FormGroup,Label,Col,Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

  constructor(props){
    super(props);

    this.state={
      isNavOpen:false,
      isModalOpen: false
    };
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }

  toggleNav(){
      this.setState({
        isNavOpen : !this.state.isNavOpen
      });
  }

  toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
  }

  handleLogin(event){
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
    event.preventDefault();
  }

render(){
	return(
	<>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Tour-e-Confusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/pamplet"><span className="fa fa-list fa-lg"></span> Pamplet</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"> Login</span></Button>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
      </Jumbotron>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="username" md={2}>Username</Label>
              <Col md={{size:8,offset:2}}>
                <Input type="text" name="username" id="username" placeholder="Username"
                  innerRef={(input)=> this.username=input} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password" md={2}>Password</Label>
              <Col md={{size:8,offset:2}}>
                <Input type="password" name="password" id="password" placeholder="Password"
                  innerRef={(input)=>this.password=input} />
              </Col>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember"
                  innerRef={(input)=>this.remember = input} />
                  Remember Me
              </Label>
            </FormGroup>
            <Button type="submit" className="bg-primary">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
		);
}
}

export default Header;