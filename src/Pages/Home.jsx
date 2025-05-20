import React from 'react';
import Banner from '../Componenets/Banner';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="space-y-24">
      {/* 🔼 Banner */}
      <Banner />

      {/* 🌿 New Plants Section (Dynamic - you will fetch data) */}
      <section className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-3">🌿 Discover New Plants</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore the latest additions and care for your leafy friends.
        </p>

        {/* Your dynamic DB-loaded plant cards will go here */}
        <div className="text-center text-gray-400 italic">
          Loading latest plants...
        </div>
      </section>

      {/* ❗ Top Plant Care Mistakes */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-red-700">🚫 Common Plant Care Mistakes</h2>
          <p className="text-gray-700 text-lg">
            Avoid these frequent errors to keep your plants healthy and happy.
          </p>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-800 text-base leading-7">
            <li>Overwatering or underwatering your plants</li>
            <li>Poor lighting or inconsistent sun exposure</li>
            <li>Wrong pot size or missing drainage holes</li>
            <li>Delaying treatment for pests or fungus</li>
            <li>Skipping seasonal repotting and fertilizing</li>
          </ul>
        </div>
      </section>

      {/* 🌼 Beginner-Friendly Plants */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold text-green-700">🪴 Best Plants for Beginners</h2>
          <p className="text-gray-700 text-lg">
            New to plants? Start with these easy-care options that thrive with minimal effort.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Spider Plant', desc: 'Low light tolerant and air-purifying' },
              { name: 'Pothos', desc: 'Grows fast and survives missed waterings' },
              { name: 'Snake Plant', desc: 'Hard to kill, perfect for beginners' },
            ].map((plant, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-green-600">{plant.name}</h3>
                <p className="text-gray-700 mt-2">{plant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
