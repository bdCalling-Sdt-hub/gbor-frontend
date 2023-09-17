import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Earning from "./Pages/Dashboard/Earning/Earning";
import Notification from "./Pages/Dashboard/Notification/Notification";

import NotFound from "./404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BecomeCreator from "./Pages/BecomeCreator/BecomeCreator";
import Contact from "./Pages/Contact/Contact";
import Banners from "./Pages/Dashboard/Banners/Banners";
import CreatorInfo from "./Pages/Dashboard/CreatorInfo/CreatorInfo";
import CreatorRequest from "./Pages/Dashboard/CreatorInfo/CreatorRequest";
import Message from "./Pages/Dashboard/Message/Message";
import Setting from "./Pages/Dashboard/Setting/Setting";
import SettingPage from "./Pages/Dashboard/Setting/SettingPage/SettingPage";
import Transaction from "./Pages/Dashboard/Transaction/Transaction";
import Email from "./Pages/Email/Email";
import Home from "./Pages/Home/Home";
import HowWork from "./Pages/HowWork/HowWork";
import Otp from "./Pages/Otp/Otp";
import OurCreators from "./Pages/OurCreators/OurCreators";
import OurCreatorsDetails from "./Pages/OurCreatorsDetails/OurCreatorsDetails";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";
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
            <Route path="/become-content-creator" element={<BecomeCreator />} />

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
              <Route path="/dashboard/message" element={<Message />}></Route>
              <Route path="/dashboard/earning/:income" element={<Earning />} />
              <Route path="/dashboard/creator-info" element={<CreatorInfo />} />
              <Route path="/dashboard/banner" element={<Banners />} />
              <Route
                path="/dashboard/creator-request"
                element={<CreatorRequest />}
              />

              <Route
                path="/dashboard/transaction"
                element={<Transaction />}
              ></Route>
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
