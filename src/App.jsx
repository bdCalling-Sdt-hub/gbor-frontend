import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./404";
import "./App.css";
import useRole from "./Hooks/useRole";
import BecomeCreator from "./Pages/BecomeCreator/BecomeCreator";
import Contact from "./Pages/Contact/Contact";
import Banners from "./Pages/Dashboard/AdminPart/Banners/Banners";
import CreatorInfo from "./Pages/Dashboard/AdminPart/CreatorInfo/CreatorInfo";
import CreatorRequest from "./Pages/Dashboard/AdminPart/CreatorInfo/CreatorRequest";
import DashboardHome from "./Pages/Dashboard/AdminPart/DashboardHome/DashboardHome";
import Earning from "./Pages/Dashboard/AdminPart/Earning/Earning";
import Message from "./Pages/Dashboard/AdminPart/Message/Message";
import MessageCreatorPage from "./Pages/Dashboard/AdminPart/Message/MessageCreatorPage/MessageCreatorPage";
import Notification from "./Pages/Dashboard/AdminPart/Notification/Notification";
import Transaction from "./Pages/Dashboard/AdminPart/Transaction/Transaction";
import CreatorDashboardHome from "./Pages/Dashboard/CreatorPart/CreatorDashboardHome/CreatorDashboardHome";
import CreatorEarning from "./Pages/Dashboard/CreatorPart/CreatorEarning/CreatorEarning";
import DonarList from "./Pages/Dashboard/CreatorPart/DonarList/DonarList";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Setting from "./Pages/Dashboard/Setting/Setting";
import SettingPage from "./Pages/Dashboard/Setting/SettingPage/SettingPage";
import Email from "./Pages/Email/Email";
import Home from "./Pages/Home/Home";
import HowWork from "./Pages/HowWork/HowWork";
import Otp from "./Pages/Otp/Otp";
import OurCreators from "./Pages/OurCreators/OurCreators";
import OurCreatorsDetails from "./Pages/OurCreatorsDetails/OurCreatorsDetails";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";
import VerifyPage from "./Pages/VerifyPage/VerifyPage";
import WhoWe from "./Pages/WhoWe/WhoWe";
import AdminRoute from "./routers/AdminRoute/AdminRoute";
import PrivateRoute from "./routers/PrivateRoute/PrivateRoute";

function App() {
  const { identity } = useRole();

  console.log("hdi", identity);

  return (
    <>
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
            <Route
              path="/dashboard"
              element={identity ? <DashboardHome /> : <CreatorDashboardHome />}
            />
            <Route path="/dashboard/notification" element={<Notification />} />
            <Route path="/dashboard/message" element={<Message />} />
            <Route
              path="/dashboard/earning/:income"
              element={identity ? <Earning /> : <CreatorEarning />}
            />
            <Route path="/dashboard/creator-info" element={<CreatorInfo />} />
            <Route
              path="/dashboard/banner"
              element={
                <AdminRoute>
                  <Banners />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/creator-request"
              element={<CreatorRequest />}
            />

            <Route
              path="/dashboard/transaction"
              element={<Transaction />}
            ></Route>
            <Route path="/dashboard/setting" element={<Setting />} />
            <Route
              path="/dashboard/setting/:dynamic"
              element={<SettingPage />}
            />
            <Route
              path="/dashboard/message/:dynamic"
              element={<MessageCreatorPage />}
            />
            <Route
              path="/dashboard/donar-list"
              element={!identity && <DonarList />}
            />
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/email" element={<Email />} />
          <Route path="/forget-password/:email" element={<Otp />} />
          <Route path="/email-verify/:id/:token" element={<VerifyPage />} />
          <Route path="/update-password/:email" element={<UpdatePass />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
