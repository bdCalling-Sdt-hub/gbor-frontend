import React from "react";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { Link, useParams } from "react-router-dom";
import About from "../../../../Components/Setting/About/About";
import BlockList from "../../../../Components/Setting/BlockList/BlockList";
import HostPaymentTime from "../../../../Components/Setting/HostPaymentTime/HostPaymentTime";
import LoginActivity from "../../../../Components/Setting/LoginActivity/LoginActivity";
import PersonalInfo from "../../../../Components/Setting/PersonalInfo/PersonalInfo";
import PrivacyPolicy from "../../../../Components/Setting/PrivacyPolicy/PrivacyPolicy";
import RentiPercentage from "../../../../Components/Setting/RentiPercentage/RentiPercentage";
import TermsAndCondition from "../../../../Components/Setting/TermsAndCondition/TermsAndCondition";
import Trash from "../../../../Components/Setting/Trash/Trash";

const SettingPage = () => {
  const params = useParams();
  const style = {
    settingContainer: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
    },
    btn: {
      display: "flex",
      alignItems: "center",
      color: "black",
      marginBottom: "20px",
      fontSize: "20px",
      fontWeight: "normal",
      textTransform: "capitalize",
    },
  };

  //don't delete this it's a important for navigation(those are mandatory)
  const textSplit = params.dynamic.split("-");
  const text = textSplit.join(" ");

  console.log(text);
  return (
    <>
      <Link to="/setting" style={style.btn}>
        <LiaAngleLeftSolid fontSize={20} />
        <span>{text}</span>
      </Link>
      <div style={style.settingContainer}>
        {text === "personal information" && <PersonalInfo />}
        {text === "login activity" && <LoginActivity />}
        {text === "block list" && <BlockList />}
        {text === "renti percentage" && <RentiPercentage />}
        {text === "host payment time" && <HostPaymentTime />}
        {text === "trash" && <Trash />}
        {text === "privacy policy" && <PrivacyPolicy />}
        {text === "terms condition" && <TermsAndCondition />}
        {text === "about us" && <About />}
      </div>
    </>
  );
};

export default SettingPage;
