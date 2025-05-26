import React from "react";
import Rental from "./Rental";
import { Link } from "react-router-dom";

import photographer1 from "../assets/human1.webp";
import photographer2 from "../assets/human2.jpg";
import photographer3 from "../assets/human3.webp";
import photographer4 from "../assets/human4.webp";
import photographer5 from "../assets/human5.webp";
import photographer6 from "../assets/human6.jpg";
import photographer7 from "../assets/human7.jpg";
import photographer8 from "../assets/human8.jpg";
import photographer9 from "../assets/human9.webp";
import photographer10 from "../assets/human10.jpg";


const Rentals = ({ rentals }) => {
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Link to={`/profile/${rental.id}`} key={rental.id}>
            <Rental
              title={rental.title}
              image={rental.image}
              price={rental.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rentals;
