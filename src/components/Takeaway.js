import React, { useState } from "react";

import TakeawayNav from "./TakeawayNav";
import Card from "./Card";
import "./nav.css";
import LeftContainer from "./leftcontainerCmp/LeftContainer";
import Modal from "./leftcontainerCmp/Modal"
export default function TakeAway() {
    const [word, setword] = useState("Mains");
  return (
    <>
      <TakeawayNav />
      <div className="headeroffood">
        <h2>{word}</h2>
      </div>
      <div className="fullcontainer">
        <div className="takeAwaycontainer">
          <Card  />
        </div>
        <LeftContainer  word={word} setword={setword}/>
          
      </div>
    </>
  );
}
