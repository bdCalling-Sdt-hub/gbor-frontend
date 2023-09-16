import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Earning from "./Pages/Dashboard/Earning/Earning";
import HostInfo from "./Pages/Dashboard/HostInfo/HostInfo";
import HostRequest from "./Pages/Dashboard/HostInfo/HostRequest";
import KycForm from "./Pages/Dashboard/Kyc/KycForm";
import Notification from "./Pages/Dashboard/Notification/Notification";
import RentInformation from "./Pages/Dashboard/RentInformation/RentInformation";
import UserInfo from "./Pages/Dashboard/UserInfo/UserInfo";
import Wallet from "./Pages/Dashboard/Wallet/Wallet";
import Email from "./Pages/Email/Email";
import Otp from "./Pages/Otp/Otp";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";

import NotFound from "./404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CarInformation from "./Pages/Dashboard/CarInformation/CarInformation";
import CarKyc from "./Pages/Dashboard/CarKyc/CarKyc";
import HostKyc from "./Pages/Dashboard/HostKyc/HostKyc";
import HostPayment from "./Pages/Dashboard/HostPayment/HostPayment";
import RentisIncome from "./Pages/Dashboard/RentisIncome/RentisIncome";
import Setting from "./Pages/Dashboard/Setting/Setting";
import SettingPage from "./Pages/Dashboard/Setting/SettingPage/SettingPage";
import StripeBills from "./Pages/Dashboard/StripeBills/StripeBills";
import UserKyc from "./Pages/Dashboard/UserKyc/UserKyc";
import UserPayment from "./Pages/Dashboard/UserPayment/UserPayment";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/HowWork/Contact";
import HowWork from "./Pages/HowWork/HowWork";
import OurCreators from "./Pages/OurCreators/OurCreators";
import OurCreatorsDetails from "./Pages/OurCreatorsDetails/OurCreatorsDetails";
import WhoWe from "./Pages/WhoWe/WhoWe";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/our-creators" element={<OurCreators />} />
            <Route path="/our-creators/:id" element={<OurCreatorsDetails />} />
            <Route path="/who-we-are" element={<WhoWe />} />
            <Route path="/how-it-work" element={<HowWork />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route
                path="/dashboard/notification"
                element={<Notification />}
              />
              <Route path="/dashboard/earning/:income" element={<Earning />} />
              <Route path="/dashboard/host-info" element={<HostInfo />} />
              <Route path="/dashboard/host-request" element={<HostRequest />} />
              <Route path="/dashboard/kyc-form" element={<KycForm />} />
              <Route path="/dashboard/wallet" element={<Wallet />} />

              <Route path="/dashboard/user-info" element={<UserInfo />} />
              <Route
                path="/dashboard/rent-info"
                element={<RentInformation />}
              />
              <Route path="/dashboard/car-info" element={<CarInformation />} />
              <Route path="/dashboard/user-payment" element={<UserPayment />} />
              <Route
                path="/dashboard/renti-income"
                element={<RentisIncome />}
              />
              <Route path="/dashboard/host-payment" element={<HostPayment />} />
              <Route path="/dashboard/stripe-bills" element={<StripeBills />} />
              <Route path="/dashboard/host-kyc" element={<HostKyc />} />
              <Route path="/dashboard/user-kyc" element={<UserKyc />} />
              <Route path="/dashboard/car-kyc" element={<CarKyc />} />
              <Route path="/dashboard/setting" element={<Setting />}></Route>
              <Route
                path="/dashboard/setting/:dynamic"
                element={<SettingPage />}
              />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/email" element={<Email />} />
            <Route path="/forget-password" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
