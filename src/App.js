import React,{Component} from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Pamplet from './components/MenuComponent';
import './App.css';
import {TOURS} from './shared/tours';

class App extends Component {

 constructor(props){
  super(props);

  this.state={
    tours: TOURS
  }
 } 

 render(){ 
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
           <NavbarBrand href="/">Tour-e-ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <Pamplet tours={this.state.tours} />
    </div>
  );
 }
}

export default App;
