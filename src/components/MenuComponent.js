import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Pamplet extends Component{

	constructor(props){
		super(props);

		this.state = {
			selectedTour:null
		}
	}

	onTourSelect(tour){
		this.setState({
			selectedTour:tour
		});
	}

	renderTour(tour){
		if(tour!=null){
           return(
              <Card>
                 <CardImg width="100%" src={tour.image} alt={tour.name} />
                 <CardBody>
                    <CardTitle>{tour.name}</CardTitle>
                    <CardText>{tour.description}</CardText>
                 </CardBody>
              </Card>
           	);
		}
		else{
			return(
                <div></div>
				);
		}
	}


render(){

    const pamplet = this.props.tours.map((tour)=>{
    	return (
            <div key={tour.id} className="col-12 md-5 m-1">
               <Card onClick={()=> this.onTourSelect(tour)}>
                   <CardImg width="100%" src={tour.image} alt={tour.name} />
                   <CardImgOverlay>
                     <CardTitle>{tour.name}</CardTitle>
                   </CardImgOverlay> 
               </Card>
            </div>
    		);
    });

  return (
      <div className ="container">
         <div className="row">
               {pamplet}
         </div>
         <div className="row">
           {this.renderTour(this.state.selectedTour)}
         </div>
      </div>
  	);
 }
}

export default Pamplet;