import React from 'react'
import LeftNav from './LeftNav'
import "../nav.css"
import Cart from './Cart'
function LeftContainer({word,setword}) {
  
  return (<> 
  <div className="leftcontainer">
 <LeftNav  word={word} setword={setword}/>
 <Cart/>
 
  </div>
   
    </>
  )
}

export default LeftContainer