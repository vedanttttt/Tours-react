import React,{Component} from 'react';
import Pamplet from './MenuComponent';
import Home from './HomeComponent';
import TourDetail from './TourdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {TOURS} from '../shared/tours';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

 constructor(props){
  super(props);

  this.state={
    tours: TOURS,
    comments: COMMENTS,
    leaders:LEADERS,
    promotions:PROMOTIONS
  };
 }


 render(){ 

  const HomePage = ()=>{
  	return(
     	<Home tour={this.state.tours.filter((tour)=> tour.featured)[0]}
            promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />
  		);
  }

  const TourWithId = ({match})=>{
    return(
      <TourDetail tour={this.state.tours.filter((tour)=> tour.id === parseInt(match.params.dishId,10))[0]}
                  comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))} />
      );
  }
  
  return (
    <div>
      <Header />
      <Switch>
      	<Route path="/home" component={HomePage} />
      	<Route exact path="/pamplet" component={()=> <Pamplet tours={this.state.tours} /> } />
        <Route path="/menu/:dishId" component={TourWithId} />
        <Route exact path="/contactus" component={Contact} />
      	<Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
 }
}

export default Main;