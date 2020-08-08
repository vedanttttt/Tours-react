import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Pamplet from './MenuComponent';
import TourDetail from './TourdetailComponent';
import {TOURS} from '../shared/tours';

class Main extends Component {

 constructor(props){
  super(props);

  this.state={
    tours: TOURS,
    selectedTour:null
  }
 }

  onTourSelect(tourId){
	this.setState({
		selectedTour:tourId
	});
}

 render(){ 
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
           <NavbarBrand href="/">Tour-e-ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <Pamplet tours={this.state.tours} 
        onClick={(tourId)=> this.onTourSelect(tourId)} />
      <TourDetail tour={this.state.tours.filter((tour)=> tour.id === this.state.selectedTour)[0]} />
    </div>
  );
 }
}

export default Main;