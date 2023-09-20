import React from "react";

import FooterLogo from "../FooterLogo";
import './Footer.style.css'

const Footer = () => {
  return (
    <div className="TheMainFooter">
      <div className="theFWidth">

<div className="FGridCont">

      <div className="FSecCon">
      <div className="fLogo">
        <div className="theFProp"><FooterLogo /></div>
      </div>
      <div className="FmiddleCon">
        <div className="FmiddleSubCon">
          <div className="FDescription">
          Gives You All the latest Article of Hollywood, Bollywood, etc.Let's explore the blog...
          </div>
          <div className="FCopywrite">
            <span>©</span>2023.The Siren. All Rights reserved
          </div>
        </div>
      </div>
      </div>
     
      <div className="Fcontact">
        <h3>Contact Us</h3>
        <div>
          <span className="LocEmoji"></span> <i>110025, Noida,</i>
        </div>
        <div>
          <span className="PhoneEmoji"></span> <i>+91 95689748951</i>
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">✉ </span> <i> contact@thesiren.com </i></pre>
        </div>
      </div>

      <div className="FRefernce">
        <h3 className="TheFReferences">Useful Links</h3>
        <div className="TheFBollywood"><a className="Flinks" href="/Bollywood">Bollywood</a></div>
        <div className="TheFHollywood"><a className="Flinks" href="/Hollywood">Hollywood</a></div>
        <div className="TheFTechnology"><a className="Flinks" href="/Technology">Technology</a></div>
        <div className="TheFFitness"><a className="Flinks" href="/Fitness">Fitness</a></div>
        <div className="TheFFood"><a className="Flinks" href="/Food">Food</a></div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
