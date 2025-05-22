import React, { useEffect, useState } from "react";
import Banner from "../Componenets/Banner";
import { Link } from "react-router";
import Loader from "./Loader";

const Home = () => {
  const [recentPlants, setRecentPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plant-care-tracker-server-ten.vercel.app/plants/recent") // Update if hosted
      .then((res) => res.json())
      .then((data) => {
        setRecentPlants(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="space-y-24">
      {/* 🔼 Banner */}
      <Banner />

      {/* 🌿 Discover New Plants Section */}
<section className="max-w-6xl mx-auto px-4 text-center mb-16">
  <h2 className="text-4xl font-extrabold text-green-700 mb-3">
    🌿 Discover New Plants
  </h2>
  <p className="text-lg text-gray-600 mb-10">
    Explore the latest additions and care for your leafy friends.
  </p>

  {loading ? (
    <div className="flex justify-center items-center min-h-[150px]">
      <Loader />
    </div>
  ) : (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {recentPlants.length === 0 ? (
        <div className="text-gray-400 col-span-full italic">
          No new plants found.
        </div>
      ) : (
        recentPlants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white border border-green-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Plant Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/api/placeholder/300/200";
                }}
              />
              {/* Health Status Badge */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${
                plant.healthStatus === 'Healthy' 
                  ? 'bg-green-100 text-green-800' 
                  : plant.healthStatus === 'Needs Care'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {plant.healthStatus || 'Unknown'}
              </div>
              {/* Care Level Badge */}
              <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                plant.careLevel === 'easy' 
                  ? 'bg-blue-100 text-blue-800' 
                  : plant.careLevel === 'moderate'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-purple-100 text-purple-800'
              }`}>
                {plant.careLevel || 'Unknown'} Care
              </div>
            </div>

            {/* Plant Details */}
            <div className="p-6">
              {/* Plant Name & Category */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-green-700 mb-1">
                  {plant.name}
                </h3>
                <span className="inline-block bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium capitalize">
                  {plant.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                {plant.description}
              </p>

              {/* Care Information */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center">
                    <span className="mr-1">💧</span>
                    Watering:
                  </span>
                  <span className="font-medium text-gray-700">
                    {plant.wateringFrequency}
                  </span>
                </div>
                
                {plant.lastWatered && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center">
                      <span className="mr-1">📅</span>
                      Last Watered:
                    </span>
                    <span className="font-medium text-gray-700">
                      {new Date(plant.lastWatered).toLocaleDateString()}
                    </span>
                  </div>
                )}
                
                {plant.nextWatering && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center">
                      <span className="mr-1">⏰</span>
                      Next Watering:
                    </span>
                    <span className="font-medium text-gray-700">
                      {new Date(plant.nextWatering).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Owner Information */}
              {plant.userName && (
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-100">
                  <span className="flex items-center">
                    <span className="mr-1">👤</span>
                    Cared by:
                  </span>
                  <span className="font-medium">
                    {plant.userName}
                  </span>
                </div>
              )}

              {/* Action Button */}
              <Link
                to={`/plantDetails/${plant._id}`}
                className="w-full inline-block text-center bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  )}
</section>

      {/* 🌱 Plant Parent Reflections */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold text-green-700">
            🌱 Plant Parent Reflections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nurturing plants is more than just a hobby — it's a reminder to slow
            down, observe, and grow alongside them.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 text-left text-gray-700">
            <blockquote className="border-l-4 border-green-500 pl-4 italic">
              "A plant is not just a decoration. It’s a living companion that
              rewards patience with beauty."
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4 italic">
              "Taking care of plants teaches us consistency, empathy, and the
              joy of small wins."
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4 italic">
              "The more attention you give, the more you notice — and that’s
              where growth begins."
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4 italic">
              "You’re not just watering leaves, you’re cultivating life."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 🧪 Quick Plant Troubleshooting Guide */}
      <section className="py-16 px-4 bg-white border-t border-green-100">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-green-700">
            🧪 Quick Plant Troubleshooting
          </h2>
          <p className="text-gray-600 text-lg">
            Not sure why your plant looks sad? Here are some common visual
            symptoms and what they often mean:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-green-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🟡 Yellow Leaves
              </h3>
              <p className="text-gray-700">
                Likely caused by overwatering or poor drainage. Let the soil dry
                out more between waterings.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🍂 Browning Tips
              </h3>
              <p className="text-gray-700">
                Usually due to low humidity or inconsistent watering. Mist
                lightly or use a humidity tray.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🪰 Tiny Flying Bugs
              </h3>
              <p className="text-gray-700">
                These are fungus gnats. Let soil dry completely and try neem oil
                or sticky traps.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🌱 Droopy Leaves
              </h3>
              <p className="text-gray-700">
                Can be underwatering or sudden environmental change. Check soil
                moisture and light conditions.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🌑 No Growth
              </h3>
              <p className="text-gray-700">
                Low light or nutrient deficiency. Try moving it closer to a
                window or repotting with fresh soil.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🧊 Curling Leaves
              </h3>
              <p className="text-gray-700">
                Often a sign of too much direct sun or sudden cold exposure.
                Move to filtered light and stable temps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
