import React, { useEffect, useState } from "react";
import Banner from "../Componenets/Banner";
import { Link } from "react-router";
import Loader from "./Loader";

const Home = () => {
  const [recentPlants, setRecentPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    fetch("https://plant-care-tracker-server-ten.vercel.app/plants/recent")
      .then((res) => res.json())
      .then((data) => {
        setRecentPlants(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
   <div className="md:px-10 md:py-14 px-5 py-5" data-theme={theme}>
      <div className="pb-5">
        {/* 🌗 Theme Toggle */}
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={handleToggleTheme} checked={theme === "dark"} />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>

      </div>

      <div className="space-y-24">
        {/* 🔼 Banner */}
      <Banner></Banner>

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
            <Loader></Loader>
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
                    <div
                      className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${
                        plant.healthStatus === "Healthy"
                          ? "bg-green-100 text-green-800"
                          : plant.healthStatus === "Needs Care"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {plant.healthStatus || "Unknown"}
                    </div>
                    {/* Care Level Badge */}
                    <div
                      className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                        plant.careLevel === "easy"
                          ? "bg-blue-100 text-blue-800"
                          : plant.careLevel === "moderate"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {plant.careLevel || "Unknown"} Care
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
                        <span className="font-medium">{plant.userName}</span>
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
      <section className="bg-green-50 py-16 px-4 rounded-2xl">
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
      <section className="py-16 px-4 bg-white border-t border-green-100 rounded-2xl">
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
    </div>
  );
};

export default Home;
