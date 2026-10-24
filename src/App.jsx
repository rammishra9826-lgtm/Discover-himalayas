
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import TourDetails from "./pages/TourDetails.jsx";
import Destinations from "./pages/Destinations.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import HighwayThroughHeaven from "./pages/HighwayThroughHeaven.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:slug" element={<TourDetails />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Highway Through Heaven Tour */}
          <Route
            path="/tours/highway-through-heaven"
            element={<HighwayThroughHeaven />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
