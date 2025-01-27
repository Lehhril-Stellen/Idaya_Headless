import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import css from "./css/style.css";
import main from "./css/main.css";
import textjs from "./js/textanimate.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Layout from "./pages/Layout";
import HomepagePart from "./pages/Home";
import NoPage from "./pages/NoPage";
import Ourrum from "./pages/Ourrum";
import OurRoots from "./pages/OurRoots";
import DiscoveryCabinet from "./pages/DiscoveryCabinet";
import BarLocator from "./pages/BarLocator";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import Press from "./pages/Press";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HimalayanLiterature from "./pages/HimalayanLiterature";
import AgeConfirmation from "./components/AgeConfirmation";
import ProtectedRoute from "./Confirmation/ProtectedRoute.js"


function App() {
  const location = useLocation();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Refresh component when route changes
    setRefreshKey((prevKey) => prevKey + 1);
  }, [location.pathname]);

  return (
    <>
      <AgeConfirmation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomepagePart key={refreshKey} />} />

          <Route path="/Ourrum" element={
            <ProtectedRoute path="/Ourrum">
              <Ourrum key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/OurRoots" element={
            <ProtectedRoute path="/OurRoots">
              <OurRoots key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/DiscoveryCabinet" element={
            <ProtectedRoute path="/DiscoveryCabinet">
              <DiscoveryCabinet key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/BarLocator" element={
            <ProtectedRoute path="/BarLocator">
              <BarLocator key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/AboutUs" element={
            <ProtectedRoute path="/AboutUs">
              <AboutUs key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/TermsConditions" element={
            <ProtectedRoute path="/TermsConditions">
              <TermsConditions key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/Press" element={
            <ProtectedRoute path="/Press">
              <Press key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/PrivacyPolicy" element={
            <ProtectedRoute path="/PrivacyPolicy">
              <PrivacyPolicy key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="/HimalayanLiterature" element={
            <ProtectedRoute path="/HimalayanLiterature">
              <HimalayanLiterature key={refreshKey} />
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <ProtectedRoute path="*">
              <NoPage key={refreshKey} />
            </ProtectedRoute>
          } /> 
          </Route>
      </Routes>
    </>
  );
}
export default App;
