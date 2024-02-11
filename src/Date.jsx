import React from "react";

export const Date = ({ setCurrentPage, TinDrumImage, date, Momonoki, Sankranti, SweetHut, month, setMonth, Sankranti2, NaveLol, 
  ImFondueYou, GeorgiaAquarium }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  let backgroundImage = TinDrumImage;
  if (date === "1/17") {
    backgroundImage = Momonoki;
    setMonth("January");
  } else if (date === "1/19") {
    backgroundImage = Sankranti;
    setMonth("January");
  } else if (date === "2/02") {
    backgroundImage = SweetHut;
    setMonth("February");
  } else if (date === "2/03") {
    backgroundImage = Sankranti2;
    setMonth("February");
  } else if (date === "2/04") {
    backgroundImage = NaveLol;
    setMonth("February");
  } else if (date === "2/05") {
    backgroundImage = ImFondueYou;
    setMonth("February");
  } else if (date === "2/09") {
    backgroundImage = GeorgiaAquarium;
    setMonth("February");
  }

  return (
    <>
      <div
        style={{backgroundImage: `url(${backgroundImage})`, height: "100vh", backgroundSize: "100%"}} 
        onClick={() => handleSetPage(month)}> {}
      </div>
    </>
  );
};