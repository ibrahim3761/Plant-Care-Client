import React from "react";
import Banner from "../Componenets/Banner";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="space-y-24">
      {/* 🔼 Banner */}
      <Banner />

      {/* 🌿 New Plants Section */}
      <section className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-3">
          🌿 Discover New Plants
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore the latest additions and care for your leafy friends.
        </p>

        {/* Your dynamic DB-loaded plant cards will go here */}
        <div className="text-center text-gray-400 italic">
          Loading latest plants...
        </div>
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
