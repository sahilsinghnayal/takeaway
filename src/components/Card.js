import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";
import TESTIMG from "./TESTIMG.jpg";
import chili from "./chili.png";
import Modals from "./leftcontainerCmp/Modal";

function Card() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modaldata, setmodaldata] = useState(null);
  const { data, setdata } = useGlobalContext();
  console.log(data);

 
  const openModal = (data) => {
    // data coming from onclick as value.
    setmodaldata(data);
    setModalShow(true);
  };
  const minus = (id) => {
    setdata((p) => {
      return p.map((item) => {
        if (item.Product.ProductID === id &&item.Product.ProductQty===1) {
          return {
            ...item,
            Product: {
              ...item.Product,
              ProductQty: item.Product.ProductQty - 1,
            },
          };
        } else {
          return item;
        }
      });
    });
    // console.log(id, data);
    
  };
  const add = (id) => {
    setdata((p) => {
      return p.map((item) => {
        if (item.Product.ProductID === id) {
          return {
            ...item,
            Product: {
              ...item.Product,
              ProductQty: item.Product.ProductQty + 1,
            },
          };
        } else {
          return item;
        }
      });
    });
    console.log(id, data);
  };
  return (
    <>
      {modaldata && (
        <Modals
          modalShow={modalShow}
          setModalShow={setModalShow}
          data={modaldata}
        />
      )}

      <>
        {" "}
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
                  border: "2px solid rgb(110 101 101 / 56%) ",
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
                  <button
                    style={{
                      background: "#2080bd",
                      color: "white",
                      border: "none",
                      borderRadius: "7px",
                    }}
                    onClick={() => openModal(value)}
                  >
                    {" "}
                    Read More
                  </button>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="modalcont"
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "12px",
                    }}
                    className="lower"
                  >
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
                    <button
                      style={{
                        border: "1px solid black",
                        borderRadius: "12px",
                      }}
                    
                      onClick={()=>minus(value.Product.ProductID)}
                    >
                      {" "}
                      -
                    </button>
                    {value.Product.ProductQty}
                    <button
                      style={{
                        border: "1px solid black",
                        borderRadius: "12px",
                      }}
                      onClick={() => add(value.Product.ProductID)}
                    >
                      +
                    </button>
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
    </>
  );
}

export default Card;
