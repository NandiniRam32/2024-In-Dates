import React from "react";
import arrow from './components/arrow.png';

export const February = ({ setCurrentPage, Diamond, setDate, FebruaryImage }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSetDate = (selectedDate) => {
    setDate(selectedDate);
    handleSetPage("Date");
  }

  return (
    <>
      <div style={{backgroundImage: `url(${FebruaryImage})`, height: "100vh", width: "100vw", backgroundSize: "100%"}}> 
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginRight: "4vw", transform: "rotate(180deg)" }} 
            onClick={() => handleSetPage("January")}/>
            <span style={{ fontSize: "8vw", fontWeight: "bold", color: "white" }}>February</span>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginLeft: "4vw" }} onClick={() => 
                handleSetPage("March")}/>
          </div>
          <div style={{ marginTop: "14vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
              fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
              handleSetDate("2/02")}>02</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
              fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
              handleSetDate("2/04")}>04</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
                handleSetDate("2/09")}>09</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
                handleSetDate("2/14")}>14</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
                handleSetDate("2/03")}>03</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
                handleSetDate("2/05")}>05</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
                handleSetDate("2/11")}>11</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "24px"}} onClick={() => 
                handleSetDate("2/21")}>21</div>
          </div>
        </div>
      </div>
    </>
  );
};