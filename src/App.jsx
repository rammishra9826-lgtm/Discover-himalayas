import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import TourDetails from "./pages/TourDetails.jsx";
import UpcommingTours from "./pages/upcommingTours.jsx";
import PastTours from "./pages/pasttours.jsx";
import Destinations from "./pages/Destinations.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import CustomTours from "./pages/CustomTours.jsx";
import Journal from "./pages/Journal.jsx";
import FAQ from "./pages/FAQ.jsx";
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
          <Route path="/upcoming-tours" element={<UpcommingTours />} />
          <Route path="/past-tours" element={<PastTours />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-tours" element={<CustomTours />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/faq" element={<FAQ />} />

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