import React from "react";

export const MainMenu = ({ setCurrentPage, mainPic }) => {
  const handleSetPage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <div
        style={{backgroundImage: `url(${mainPic})`, height: "100vh", backgroundSize: "100%"}} onClick={() => handleSetPage("January")}> {}
      </div>
    </>
  );
};