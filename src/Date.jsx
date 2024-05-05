import React from "react";

export const Date = ({ setCurrentPage, TinDrumImage, date, Momonoki, Sankranti, SweetHut, month, setMonth, Sankranti2, NaveLol, 
  ImFondueYou, GeorgiaAquarium, CafeIntermezzo, WokChi, RrealTacos, SriThai, BentoBus, LuckyBuddha, Chipotle, FoodTerminal, RrealTacos0403, FoodTerminal0503 }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  let backgroundImage = TinDrumImage;
  if (date === "1/10") {
    setMonth("January");
  }
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
  } else if (date === "2/11") {
    backgroundImage = CafeIntermezzo;
    setMonth("February");
  } else if (date === "2/14") {
    backgroundImage = WokChi;
    setMonth("February");
  } else if (date === "2/21") {
    backgroundImage = RrealTacos;
    setMonth("February");
  } else if (date === "2/24") {
    backgroundImage = SriThai;
    setMonth("February");
  } else if (date === "3/04") {
    backgroundImage = BentoBus;
    setMonth("March");
  } else if (date === "3/06") {
    backgroundImage = LuckyBuddha;
    setMonth("March");
  } else if (date === "3/08") {
    backgroundImage = Chipotle;
    setMonth("March");
  } else if (date === "3/29") {
    backgroundImage = FoodTerminal;
    setMonth("March");
  } else if (date === "4/03") {
    backgroundImage = RrealTacos0403;
    setMonth("April");
  } else if (date === "5/03") {
    backgroundImage = FoodTerminal0503;
    setMonth("May");
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