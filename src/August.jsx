import React from "react";
import arrow from './components/arrow.png';

export const August = ({ setCurrentPage, Diamond, setDate, AugustImage }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSetDate = (selectedDate) => {
    setDate(selectedDate);
    handleSetPage("Date");
  }

  return (
    <>
      <div style={{backgroundImage: `url(${AugustImage})`, height: "100vh", backgroundSize: "100%"}}> 
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginRight: "4vw", transform: "rotate(180deg)" }} 
            onClick={() => handleSetPage("July")}/>
            <span style={{ fontSize: "8vw", fontWeight: "bold", color: "white" }}>August</span>
            <img src={arrow} alt="Img not Found" style={{ height: "4vw", width: "8vw", marginLeft: "4vw" }} onClick={() => 
                handleSetPage("September")}/>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "14vh" }}>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
            
          </div>
        </div>
      </div>
    </>
  );
};