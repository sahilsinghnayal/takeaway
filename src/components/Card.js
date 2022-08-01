import React from "react";
import { useGlobalContext } from "../context/Context";
import TESTIMG from "./TESTIMG.jpg";
import chili from "./chili.png"
import Modals from "./leftcontainerCmp/Modal";

function Card() {
  const{data}=useGlobalContext();
  console.log(data);
  
 
  return (
    <>
     {data.map((value)=>{
      // const{Description,ImageName,vMenuDescription,Price}=value;
    const spicyCount=value.Product.bSpicy;
    // console.log(spicyCount);

    return( 
      <> 
      
    <div
        className="card"
        style={{
          width: "14rem",
          marginTop: "2px",
          padding: "7px",
          marginRight: "8px",
       
        }}
      >
        <img style={{width:"13rem"}} src={TESTIMG} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{value.Product.Description}</h5>
          {/* <p className="card-text">
            {value.Product.vMenuDescription}
          </p> */}
          
          <div className="modalcont">
          <Modals value={value}/>
          </div>
          <span
            style={{
              color: "#134e13",
              font: "bold",
              position: "absolute",
              right: "13px",
              fontWeight: 700,
              bottom: "6px"
            }}
          >
            £{value.Product.Price}
          </span>
          <span style={{position:"relative",left:"-91px",top:"13px"}}>
                   {[...Array(spicyCount)].map((e) => ( 
          <img  style={{width:"15px",height:"15px"}}src={chili} alt=""/>
          ))}       
          
          
          </span>
         
          
        
        </div>
      </div>
      </>
      )
  })}
      
    </>
  );
}

export default Card;
