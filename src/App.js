import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { HomePage } from "./Pages/HomePage/HomePage";
import PrivateLimitedPage from "./Pages/PrivateLimitedPage/PrivateLimitedPage";
import NidhiCompany from "./Pages/NidhiCompany/NidhiCompany"
import ProducerCompany from "./Pages/ProducerCompany/ProducerCompany";
import ShopAct from "./Pages/ShopAct/ShopAct";
import Terms from "./Pages/TermsAndConditions/Terms";
import Partnership from "./Pages/PartnershipFirm/Partnership";
import AboutUsPage from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SignInAdmin from "./Pages/Authentication/AdminSignIn/SignInAdmin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ClientDashboard from "./Pages/Dashboard/ClientDashboard";
import AdminPrivateRoute, {
  ClientPrivateRoute,
} from "./Components/PrivateRoutes";
import SignInClient from "./Pages/Authentication/ClientSignIn/SignInClient";
import SolePropietoryship from "./Pages/SolePropietoryship/SolePropietoryship";
import ReactGa from 'react-ga'
import React from "react";
import StartupIndia from "./Pages/StartupIndia/StartupIndia";
import LimitedLiabilityPartnership from "./Pages/LimitedLibialityPartership/LimitedLiabilityPartnership";

function App() {

  React.useEffect(() => {
    
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
    ReactGa.pageview("/")
    ReactGa.pageview(window.location.pathname + window.location.search)

  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/privatelimited" element={<PrivateLimitedPage />} />
          <Route exact path="/" element={<AdminPrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route exact path="/" element={<ClientPrivateRoute />}>
            <Route path="/client-dashboard" element={<ClientDashboard />} />
          </Route>
          <Route path="/privatelimited" element={<PrivateLimitedPage />} />
          <Route path="/nidhi-company" element={<NidhiCompany />} />
          <Route path="/limited-liability-partnership" element={<LimitedLiabilityPartnership />} />
          <Route path="/startup-india" element={<StartupIndia />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/partnershipfirm" element={<Partnership />} />
          <Route path="/producer-company" element={<ProducerCompany />} />
          <Route path="/sole-proprietorship" element={<SolePropietoryship />} />
          <Route path="/shop-act" element={<ShopAct />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in-admin" element={<SignInAdmin />} />
          <Route path="/sign-in" element={<SignInClient />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
