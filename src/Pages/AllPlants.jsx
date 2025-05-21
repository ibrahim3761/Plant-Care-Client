import React from 'react';
import { useLoaderData, Link } from 'react-router';

const AllPlants = () => {
  const plants = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">All Plants</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Plant Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Watering Frequency</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants?.map((plant, index) => (
              <tr key={plant.id || index} className="border-t border-gray-200">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{plant.name}</td>
                <td className="px-6 py-4 capitalize">{plant.category}</td>
                <td className="px-6 py-4">{plant.wateringFrequency}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/plants/${plant.id}`}
                    className="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            {!plants?.length && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6">
                  No plants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
