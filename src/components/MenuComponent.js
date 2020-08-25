import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

   function RenderMenuItem({tour,onClick}){
      return(
              <Card>
                <Link to={`/menu/${tour.id}`} >
                  <CardImg src={baseUrl + tour.image} alt={tour.name} />
                  <CardImgOverlay>
                    <CardTitle>{tour.name}</CardTitle>
                  </CardImgOverlay> 
                </Link>
              </Card>
        );
   } 

  const Menu = (props)=>{
      const pamplet = props.tours.tours.map((tour)=>{
      return (
            <div key={tour.id} className="col-12 col-md-5 mt-4 m-1">
               <RenderMenuItem tour={tour} />
            </div>
        );
    });

  if(props.tours.isLoading){
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if(props.tours.errMess){
    return(
      <div className="container">
        <div className="row">
          <h4>{props.tours.errMess}</h4>
        </div>
      </div>
    );
  }
  else{
    return (
        <div className ="container">
           <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Pamplet</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>Pamplet</h3>
                <hr />
              </div>  
           </div>
           <div className="row">
                 {pamplet}
           </div>
        </div>
      );
    }
   }

export default Menu;
