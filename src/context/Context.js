import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const GetApiUrl = "http://belinnov.co.in/tcbapi/GetTakeAwayProducts";
function AppProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([])
  const getData = async (url) => {
    setloading(true);
    const response = await fetch(url);
    const Apidata = await response.json();
    setdata(Apidata.TakeAwayGroups[0].GroupProducts)
    setloading(false);
    // console.log(data);
  };
  useEffect(() => {
    getData(GetApiUrl);
  }, []);


  return <AppContext.Provider value={{loading,data,setdata}}>{children}</AppContext.Provider>;
}
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobalContext} ;
