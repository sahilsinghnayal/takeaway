import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";
import TESTIMG from "./TESTIMG.jpg";
import chili from "./chili.png";
import Modals from "./leftcontainerCmp/Modal";

function Card() {
  const [count, setcount] = useState(0)
  const { data } = useGlobalContext();
    console.log(data);
  
  const minus=(e)=>{
    console.log((e.target.textContent))
  }
  const add=(value)=>{
    // setcount(count+1);
    // console.log(count);
    // console.log('plus',data[0].Product.ProductQty);
    var newArray = value;
    const index = newArray.findIndex((object) =>{
      return object.ProductID &&  object.ProductID !== 0
      ? object.ProductID === value.ProductID 
      : object.ProductID === value.ProductID;
    });

    if (index !== -1){
      newArray[index].ProductQty === 0
      ? (newArray[index].ProductQty = newArray[index].ProductQty + 2)
      : (newArray[index].ProductQty = newArray[index].ProductQty + 1);
      // updateTableproducts([...newArray]);
    }
                                                                                                           
   
  }

  return (
    <>
      {data.map((value) => {
        // const{Description,ImageName,vMenuDescription,Price,ProductQty}=value;
        const spicyCount = value.Product.bSpicy;
        
        return (
          <>
            <div
              className="card"
              style={{
                width: "14rem",
                marginTop: "2px",
                padding: "7px",
                marginRight: "8px",
                border:"2px solid rgb(110 101 101 / 56%) ",
                // boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"

              }}
            >
              <img
                style={{ width: "13rem" }}
                src={TESTIMG}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{value.Product.Description}</h5>
                {/* <p className="card-text">
            {value.Product.vMenuDescription}
          </p> */}

                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="modalcont"
                >
                  <Modals value={value.Product.Description} />
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:'12px'}} className="lower">
                  <span
                    style={{
                      color: "#134e13",
                      font: "bold",
                      // position: "absolute",
                      // right: "13px",
                      fontWeight: 700,
                      // bottom: "6px",
                    }}
                  >
                    £{value.Product.Price}
                  </span>
                    <button style={{border:"1px solid black",borderRadius:'12px'}} onClick={minus}> -</button>
                  {count}
                    <button style={{border:"1px solid black",borderRadius:'12px'}} onClick={(ProductID) => {
                      add(value)
                    }}>+</button>
                  {spicyCount <= 0 ? (
                    <div
                    // style={{ position: "relative", left: "-91px", top: "13px"}}
                    >
                      &#8203;
                    </div>
                  ) : (
                    <span
                    // style={{ position: "relative", left: "-91px", top: "13px" }}
                    >
                      {[...Array(spicyCount)].map((e) => (
                        <img
                          style={{ width: "15px", height: "15px" }}
                          src={chili}
                          alt=""
                        />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
