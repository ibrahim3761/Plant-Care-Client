import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const DashAllPlants = () => {
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>All Plants || Plant Care</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">All Plants</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          className="px-4 py-2 rounded border text-black"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

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

      {/* Table View */}
      {!loading && plants.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-green-200 text-left text-sm text-black">
            <thead className="bg-green-200 text-green-800">
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Watering</th>
                <th className="px-4 py-2">Next Watering</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant._id} className="border-b hover:bg-green-50">
                  <td className="px-4 py-2">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium">{plant.name}</td>
                  <td className="px-4 py-2">{plant.category}</td>
                  <td className="px-4 py-2">{plant.wateringFrequency}</td>
                  <td className="px-4 py-2">{plant.nextWatering || 'N/A'}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/dashboard/plantDetails/${plant._id}`}
                      className="text-green-600 underline hover:text-green-800"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !loading && (
        <p className="text-center col-span-full text-black">No plants found.</p>
      )}
    </div>
  );
};

export default DashAllPlants;
