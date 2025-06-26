import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    fetch('https://plant-care-tracker-server-ten.vercel.app/plants')
      .then(res => res.json())
      .then(data => {
        setPlants(data);
        setTotalItems(data.length);
        if (user?.email) {
          const filtered = data.filter(plant => plant.userEmail === user.email);
          setMyItems(filtered.length);
        }
      })
      .catch(err => {
        console.error("Error fetching plants:", err);
        setPlants([]);
        setTotalItems(0);
        setMyItems(0);
      });
  }, [user]);

  return (
    <div className="px-6 py-14">
      <h2 className="text-4xl font-extrabold text-green-700 mb-4">
        🌿 Dashboard Overview
      </h2>

      {/* User Info */}
      <div className="mb-10">
        <p className="text-lg text-gray-800">
          Welcome, <span className="font-semibold text-green-600">{user?.displayName || "User"}</span>
        </p>
        <p className="text-sm text-gray-600">Email: {user?.email}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Items */}
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📦</div>
            <div>
              <p className="text-lg font-medium text-gray-600">Total Plants</p>
              <p className="text-3xl font-bold text-green-700">{totalItems}</p>
            </div>
          </div>
        </div>

        {/* My Items */}
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🪴</div>
            <div>
              <p className="text-lg font-medium text-gray-600">My Plants</p>
              <p className="text-3xl font-bold text-green-700">{myItems}</p>
            </div>
          </div>
        </div>

        {/* Account Status */}
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="text-4xl">✅</div>
            <div>
              <p className="text-lg font-medium text-gray-600">Account Status</p>
              <p className="text-2xl font-semibold text-green-700">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
