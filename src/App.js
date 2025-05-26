import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import PhotographerProfile from "./components/PhotographerProfile";

function App() {
  // Rentals data for IDs
  const rentals = [
    { id: 1, title: "Alex Johnson", image: require("./assets/human1.webp"), price: "100" },
    { id: 2, title: "Maria Chen", image: require("./assets/human2.jpg"), price: "200" },
    { id: 3, title: "David Kim", image: require("./assets/human3.webp"), price: "300" },
    { id: 4, title: "Sophia Lee", image: require("./assets/human4.webp"), price: "400" },
    { id: 5, title: "James Smith", image: require("./assets/human5.webp"), price: "500" },
    { id: 6, title: "Emily Davis", image: require("./assets/human6.jpg"), price: "600" },
    { id: 7, title: "Michael Brown", image: require("./assets/human7.jpg"), price: "700" },
    { id: 8, title: "Olivia Wilson", image: require("./assets/human8.jpg"), price: "800" },
    { id: 9, title: "Daniel Martinez", image: require("./assets/human9.webp"), price: "900" },
    { id: 10, title: "Grace Clark", image: require("./assets/human10.jpg"), price: "1000" },
  ];
  return (
    <Router>
      <div className="">
        {/* Navbar */}
        <Navbar />
        {/* Routing */}
        <Routes>
          <Route path="/" element={
            <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
              <Filters />
              {/* Rentals */}
              <Rentals rentals={rentals} />
            </div>
          } />
          <Route path="/profile/:id" element={<PhotographerProfile rentals={rentals} />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
