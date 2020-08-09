import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

	function RenderTour({tour}){
           return(
           	 <div className="col-12 col-md-5 m-1">
              <Card>
                 <CardImg width="100%" src={tour.image} alt={tour.name} />
                 <CardBody>
                    <CardTitle>{tour.name}</CardTitle>
                    <CardText>{tour.description}</CardText>
                 </CardBody>
              </Card>
             </div>
           	);
	}

	function RenderComments({comments}){
		if(comments==null){
			return(<div></div>);
		}
        const cmnts = comments.map((comment)=>{
           	return(
             <li key ={comment.id}>
               <p>{comment.comment}</p>
               <p>-- {comment.author},
               &nbsp;
               {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
             </li>       
           	);
	})

	return(
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">
         {cmnts}
        </ul>
      </div>   
	);
}

 const TourDetail = (props)=>{
 	if(props.tour==null){
 		return(<div></div>);
 	}
 	return(
    <div className="container">
      <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/pamplet">Pamplet</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.tour.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.tour.name}</h3>
              <hr />
            </div>  
         </div>
      <div className="row">
       <RenderTour tour={props.tour} />
       <RenderComments comments={props.comments} />
      </div> 
    </div>  
 	);
	}


export default TourDetail; 