import React from "react";
import arrow from './components/arrow.png';

export const March = ({ setCurrentPage, Diamond, setDate, MarchImage }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSetDate = (selectedDate) => {
    setDate(selectedDate);
    handleSetPage("Date");
  }

  return (
    <>
      <div style={{backgroundImage: `url(${MarchImage})`, height: "100vh", backgroundSize: "100%"}}> 
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginRight: "4vw", transform: "rotate(180deg)" }} 
            onClick={() => handleSetPage("February")}/>
            <span style={{ fontSize: "8vw", fontWeight: "bold", color: "white" }}>March</span>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginLeft: "4vw" }} onClick={() => 
                handleSetPage("April")}/>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "14vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "48px"}} onClick={() => 
                handleSetDate("3/06")}>06</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "48px"}} onClick={() => 
                handleSetDate("3/08")}>08</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                  fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "48px"}} onClick={() => 
                  handleSetDate("3/04")}>04</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                  fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "48px", opacity: "100"}}></div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
                  fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", marginLeft: "48px"}} onClick={() => 
                handleSetDate("3/29")}>29</div>
          </div>
        </div>
      </div>
    </>
  );
};