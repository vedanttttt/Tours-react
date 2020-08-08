import React,{Component} from 'react';
import Pamplet from './MenuComponent';
import TourDetail from './TourdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header />
      <Pamplet tours={this.state.tours} 
        onClick={(tourId)=> this.onTourSelect(tourId)} />
      <TourDetail tour={this.state.tours.filter((tour)=> tour.id === this.state.selectedTour)[0]} />
      <Footer />
    </div>
  );
 }
}

export default Main;