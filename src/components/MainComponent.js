import React,{Component} from 'react';
import Pamplet from './MenuComponent';
import Home from './HomeComponent';
import TourDetail from './TourdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment,fetchTours} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

 const mapStateToProps=state =>{
    return {
      tours: state.tours,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
 }

 const mapDispatchToProps = (dispatch) => ({
    addComment: (tourId,rating,author,comment) => dispatch(addComment(tourId,rating,author,comment)),
    fetchTours: () => {dispatch(fetchTours())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
 });

class Main extends Component {

 constructor(props){
  super(props);

 }

 componentDidMount() {
  this.props.fetchTours();
 }

 render(){ 

  const HomePage = ()=>{
  	return(
     	<Home tour={this.props.tours.tours.filter((tour)=> tour.featured)[0]}
            toursLoading={this.props.tours.isLoading}
            toursErrMess={this.props.tours.errMess}
            promotion={this.props.promotions.filter((promotion)=> promotion.featured)[0]}
            leader={this.props.leaders.filter((leader)=>leader.featured)[0]} />
  		);
  }

  const TourWithId = ({match})=>{
    return(
      <TourDetail tour={this.props.tours.tours.filter((tour)=> tour.id === parseInt(match.params.dishId,10))[0]}
                  isLoading={this.props.tours.isLoading}
                  errMess={this.props.tours.errMess}
                  comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                  addComment={this.props.addComment} />
      );
  }
  
  return (
    <div>
      <Header />
      <Switch>
      	<Route path="/home" component={HomePage} />
      	<Route exact path="/pamplet" component={()=> <Pamplet tours={this.props.tours} /> } />
        <Route path="/menu/:dishId" component={TourWithId} />
        <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
        <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders} /> } />
      	<Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
 }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));