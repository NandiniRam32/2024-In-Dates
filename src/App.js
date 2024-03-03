import React, { useState } from 'react';
import { MainMenu } from './MainMenu';
import { January } from './January';
import { Date } from './Date';
import { February } from './February';
import { March } from './March';
import { April } from './April';
import { May } from './May';
import { June } from './June';
import { July } from './July';
import { August } from './August';
import { September } from './September';
import { October } from './October';
import { November } from './November';
import { December } from './December';
import mainPic from './components/2024-in-Dates.jpg';
import TinDrumImage from './components/TinDrum.jpg';
import JanuaryImage from './components/JanuaryImage.jpg';
import Diamond from './components/Diamond.png';
import Momonoki from './components/Momonoki.jpg';
import Sankranti from './components/Sankranti.jpg';
import SweetHut from './components/SweetHut.jpg';
import FebruaryImage from './components/FebruaryImage.webp';
import MarchImage from './components/MarchImage.jpg';
import AprilImage from './components/AprilImage.webp';
import MayImage from './components/MayImage.jpg';
import JuneImage from './components/JuneImage.jpg';
import JulyImage from './components/JulyImage.jpg';
import AugustImage from './components/AugustImage.webp';
import SeptemberImage from './components/SeptemberImage.jpg';
import OctoberImage from './components/OctoberImage.jpg';
import NovemberImage from './components/NovemberImage.jpg';
import DecemberImage from './components/DecemberImage.jpg';
import Sankranti2 from './components/Sankranti2.jpg';
import NaveLol from './components/NaveLol.jpg';
import ImFondueYou from './components/ImFondueYou.jpg';
import GeorgiaAquarium from './components/GeorgiaAquarium.jpg';
import CafeIntermezzo from './components/CafeIntermezzo.jpg';
import WokChi from './components/WokChi.png';
import RrealTacos from './components/RrealTacos.jpg';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [date, setDate] = useState('1/10');
  const [month, setMonth] = useState('January');
  
  return (
    <div className="App" style={{ textAlign: "center" }}>
      {(() => {
        if (currentPage === "main") {
          return <MainMenu setCurrentPage={setCurrentPage} mainPic={mainPic} />;
        } else if (currentPage === "January") {
          return <January setCurrentPage={setCurrentPage} JanuaryImage={JanuaryImage} Diamond={Diamond} setDate={setDate} date={date} />;
        } else if (currentPage === "Date") {
          return <Date setCurrentPage={setCurrentPage} TinDrumImage={TinDrumImage} Momonoki={Momonoki} date={date} Sankranti={Sankranti} 
          SweetHut={SweetHut} month={month} setMonth={setMonth} Sankranti2={Sankranti2} NaveLol={NaveLol} ImFondueYou={ImFondueYou} 
          GeorgiaAquarium={GeorgiaAquarium} CafeIntermezzo={CafeIntermezzo} WokChi={WokChi} RrealTacos={RrealTacos}/>;
        } else if (currentPage === "February") {
          return <February setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          FebruaryImage={FebruaryImage}/>;
        } else if (currentPage === "March") {
          return <March setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          MarchImage={MarchImage}/>;
        } else if (currentPage === "April") {
          return <April setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          AprilImage={AprilImage}/>;
        } else if (currentPage === "May") {
          return <May setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          MayImage={MayImage}/>;
        } else if (currentPage === "June") {
          return <June setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          JuneImage={JuneImage}/>;
        } else if (currentPage === "July") {
          return <July setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          JulyImage={JulyImage}/>;
        } else if (currentPage === "August") {
          return <August setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          AugustImage={AugustImage}/>;
        } else if (currentPage === "September") {
          return <September setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          SeptemberImage={SeptemberImage}/>;
        } else if (currentPage === "October") {
          return <October setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          OctoberImage={OctoberImage}/>;
        } else if (currentPage === "November") {
          return <November setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          NovemberImage={NovemberImage}/>;
        } else if (currentPage === "December") {
          return <December setCurrentPage={setCurrentPage} Diamond={Diamond} setDate={setDate} date={date} 
          DecemberImage={DecemberImage}/>;
        }
      })()}
    </div>
  );
};

export default App;