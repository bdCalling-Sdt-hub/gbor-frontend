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
import CreatorTransaction from "./Pages/Dashboard/CreatorPart/CreatorTransaction/CreatorTransaction";
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
import Failed from "./Pages/PaymentResPage/Failed";
import Success from "./Pages/PaymentResPage/Success";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";
import VerifyPage from "./Pages/VerifyPage/VerifyPage";
import WhoWe from "./Pages/WhoWe/WhoWe";
import TempoError from "./Shared/TempoError/TempoError";
import AdminRoute from "./routers/AdminRoute/AdminRoute";
import PrivateRoute from "./routers/PrivateRoute/PrivateRoute";

function App() {
  const { identity } = useRole();

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/creators" element={<OurCreators />} />
          <Route path="/creators/:id" element={<OurCreatorsDetails />} />
          <Route path="/who-we-are" element={<WhoWe />} />
          <Route path="/how-it-work" element={<HowWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-content-creator" element={<BecomeCreator />} />
          <Route path="/search/:text" element={<SearchPage />} />
          <Route path="/payment/success" element={<Success />} />
          <Route path="/payment/failed" element={<Failed />} />

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
              element={
                identity ? (
                  <AdminRoute>
                    <DashboardHome />
                  </AdminRoute>
                ) : (
                  <CreatorDashboardHome />
                )
              }
            />
            <Route path="/dashboard/notification" element={<Notification />} />
            <Route
              path="/dashboard/message"
              element={
                <AdminRoute>
                  <Message />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/earning/:income"
              element={
                identity ? (
                  <AdminRoute>
                    <Earning />
                  </AdminRoute>
                ) : (
                  <CreatorEarning />
                )
              }
            />
            <Route
              path="/dashboard/creator-info"
              element={
                <AdminRoute>
                  <CreatorInfo />
                </AdminRoute>
              }
            />
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
              element={
                <AdminRoute>
                  <CreatorRequest />
                </AdminRoute>
              }
            />

            <Route
              path="/dashboard/transaction"
              element={
                identity ? (
                  <AdminRoute>
                    <Transaction />
                  </AdminRoute>
                ) : (
                  <CreatorTransaction />
                )
              }
            ></Route>
            <Route path="/dashboard/setting" element={<Setting />} />
            <Route
              path="/dashboard/setting/:dynamic"
              element={<SettingPage />}
            />
            <Route
              path="/dashboard/message/:id/:name"
              element={<MessageCreatorPage />}
            />

            <Route
              path="/dashboard/donar-list"
              element={!identity ? <DonarList /> : <TempoError />}
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
