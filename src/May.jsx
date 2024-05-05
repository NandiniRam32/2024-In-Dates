import React from "react";
import arrow from './components/arrow.png';

export const May = ({ setCurrentPage, Diamond, setDate, MayImage }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSetDate = (selectedDate) => {
    setDate(selectedDate);
    handleSetPage("Date");
  }

  return (
    <>
      <div style={{backgroundImage: `url(${MayImage})`, height: "100vh", backgroundSize: "100%"}}> 
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginRight: "4vw", transform: "rotate(180deg)" }} 
            onClick={() => handleSetPage("April")}/>
            <span style={{ fontSize: "8vw", fontWeight: "bold", color: "white" }}>May</span>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginLeft: "4vw" }} onClick={() => 
                handleSetPage("June")}/>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "14vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                      fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "48px"}} onClick={() => 
                    handleSetDate("5/03")}>03</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
            
          </div>
        </div>
      </div>
    </>
  );
};