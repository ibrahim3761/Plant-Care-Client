import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [order, setOrder] = useState('asc');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPlants = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (order) params.append('order', order);
    if (category) params.append('category', category);

    try {
      const res = await fetch(`https://plant-care-tracker-server-ten.vercel.app/plants?${params.toString()}`);
      const data = await res.json();
      setPlants(data);
    } catch (error) {
      console.error('Failed to fetch plants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, [order, category]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-16">
      <Helmet>
        <title>All Plants || Plant Care</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">All Plants</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {/* Order */}
        <select
          className="px-4 py-2 rounded border text-black"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        {/* Category */}
        <select
          className="px-4 py-2 rounded border text-black"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="tropical">Tropical</option>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-green-600 font-semibold">Loading plants...</p>
      )}

      {/* Card View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading && plants.length ? (
          plants.map((plant) => (
            <div key={plant._id} className="bg-green-50 border border-green-200 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-black">
                <h3 className="text-xl font-bold mb-1">{plant.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Category: {plant.category}</p>
                <p className="text-sm text-gray-600 mb-1">Watering: {plant.wateringFrequency}</p>
                <p className="text-sm text-gray-600 mb-3">Next: {plant.nextWatering || 'N/A'}</p>
                <Link
                  to={`/plantDetails/${plant._id}`}
                  className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : !loading && (
          <p className="text-center col-span-full text-black">No plants found.</p>
        )}
      </div>
    </div>
  );
};

export default AllPlants;
