import React,{Component} from 'react';
import Pamplet from './MenuComponent';
import Home from './HomeComponent';
import TourDetail from './TourdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {TOURS} from '../shared/tours';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

 constructor(props){
  super(props);

  this.state={
    tours: TOURS
  };
 }


 render(){ 

  const HomePage = ()=>{
  	return(
     	<Home />
  		);
  }
  
  return (
    <div>
      <Header />
      <Switch>
      	<Route path="/home" component={HomePage} />
      	<Route exact path="/pamplet" component={()=> <Pamplet tours={this.state.tours} /> } />
      	<Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
 }
}

export default Main;