import React from "react";
import arrow from './components/arrow.png';

export const January = ({ setCurrentPage, JanuaryImage, Diamond, setDate }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSetDate = (selectedDate) => {
    setDate(selectedDate);
    handleSetPage("Date");
  }

  return (
    <>
      <div style={{backgroundImage: `url(${JanuaryImage})`, height: "100vh", backgroundSize: "100%"}}> 
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginRight: "4vw", transform: "rotate(180deg)" }} 
            onClick={() => handleSetPage("December")}/>
            <span style={{ fontSize: "8vw", fontWeight: "bold", color: "white" }}>January</span>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginLeft: "4vw" }} onClick={() => 
                handleSetPage("February")}/>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "14vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
              fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", margin: "0 148px"}} onClick={() => 
              handleSetDate("1/10")}>10</div>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
              fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", margin: "0 148px"}} onClick={() => 
              handleSetDate("1/19")}>19</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
            <div style={{ backgroundImage: `url(${Diamond})`, height: "20vh", width: "40vh", backgroundSize: "100%", paddingTop: "1vh", 
              fontWeight: "bold", fontSize: "13vh", color: "black", display: "inline-block", margin: "0 148px"}} onClick={() => 
              handleSetDate("1/17")}>17</div>
          </div>
        </div>
      </div>
    </>
  );
};