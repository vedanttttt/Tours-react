import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

   function RenderMenuItem({tour,onClick}){
      return(
               <Card onClick={()=>onClick(tour.id)}>
                   <CardImg src={tour.image} alt={tour.name} />
                   <CardImgOverlay>
                     <CardTitle>{tour.name}</CardTitle>
                   </CardImgOverlay> 
               </Card>
        );
   } 

  const Menu = (props)=>{
      const pamplet = props.tours.map((tour)=>{
      return (
            <div key={tour.id} className="col-12 col-md-5 mt-4 m-1">
               <RenderMenuItem tour={tour} onClick={props.onClick} />
            </div>
        );
    });

  return (
      <div className ="container">
         <div className="row">
               {pamplet}
         </div>
      </div>
    );
   }

export default Menu;
