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
import {postComment,fetchTours,fetchComments,fetchPromos,fetchLeaders,postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

 const mapStateToProps=state =>{
    return {
      tours: state.tours,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
      feedbacks: state.feedbacks
    }
 }

 const mapDispatchToProps = (dispatch) => ({
    postComment: (tourId,rating,author,comment) => dispatch(postComment(tourId,rating,author,comment)),
    fetchTours: () => {dispatch(fetchTours())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    postFeedback: (firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message))
 });

class Main extends Component {

 constructor(props){
  super(props);

 }

 componentDidMount() {
  this.props.fetchTours();
  this.props.fetchComments();
  this.props.fetchPromos();
  this.props.fetchLeaders();
 }

 render(){ 

  const HomePage = ()=>{
  	return(
     	<Home tour={this.props.tours.tours.filter((tour)=> tour.featured)[0]}
            toursLoading={this.props.tours.isLoading}
            toursErrMess={this.props.tours.errMess}
            promotion={this.props.promotions.promotions.filter((promotion)=> promotion.featured)[0]}
            promosLoading={this.props.promotions.isLoading}
            promosErrMess={this.props.promotions.errMess}
            leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
            leadersLoading={this.props.leaders.isLoading}
            leadersErrMess={this.props.leaders.errMess} />
  		);
  }

  const TourWithId = ({match})=>{
    return(
      <TourDetail tour={this.props.tours.tours.filter((tour)=> tour.id === parseInt(match.params.dishId,10))[0]}
                  isLoading={this.props.tours.isLoading}
                  errMess={this.props.tours.errMess}
                  comments={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                  commentsErrMess={this.props.comments.errMess}
                  postComment={this.props.postComment} />
      );
  }
  
  return (
    <div>
      <Header />
      <Switch>
      	<Route path="/home" component={HomePage} />
      	<Route exact path="/pamplet" component={()=> <Pamplet tours={this.props.tours} /> } />
        <Route path="/menu/:dishId" component={TourWithId} />
        <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} /> } />
        <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders} /> } />
      	<Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
 }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));