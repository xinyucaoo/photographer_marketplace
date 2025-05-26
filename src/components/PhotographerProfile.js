import React from "react";
import { useParams, Link } from "react-router-dom";

// Demo gallery images for each photographer (by id)
const galleries = {
  1: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  ],
  2: [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  ],
  3: [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
  ],
  4: [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  ],
  5: [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  ],
  6: [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
  ],
  7: [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  ],
  8: [
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  ],
  9: [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
  ],
  10: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  ],
};

const PhotographerProfile = ({ rentals }) => {
  const { id } = useParams();
  const photographer = rentals.find((r) => r.id === Number(id));
  const gallery = galleries[id] || [];

  if (!photographer) {
    return <div className="p-8 text-center">Photographer not found.</div>;
  }

  return (
    <div className="flex flex-col items-center py-10">
      <img src={photographer.image} alt="profile" className="rounded-full w-48 h-48 object-cover mb-6 border-4 border-black" />
      <h2 className="text-3xl font-bold mb-2">{photographer.title}</h2>
      <p className="text-xl text-gray-700 mb-2">Price: ${photographer.price}</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-black text-white rounded-full">Back to list</Link>
      {/* Gallery */}
      <div className="mt-10 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-4">Photography Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500">No gallery images available.</div>
          ) : (
            gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-lg object-cover w-full h-48 border"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotographerProfile; 