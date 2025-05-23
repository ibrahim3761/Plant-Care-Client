import React from 'react';
import { useLoaderData, Link } from 'react-router';

const AllPlants = () => {
  const plants = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
        All Plants
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-r from-green-50 to-green-100 border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-100 ">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">Plant Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">Watering Frequency</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">Next Watering</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants?.map((plant, index) => (
              <tr key={plant._id || index} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-6 py-4 text-black">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-16 h-16 object-cover rounded border border-gray-300 dark:border-gray-600"
                  />
                </td>
                <td className="px-6 py-4 text-black">{plant.name}</td>
                <td className="px-6 py-4 capitalize text-black">{plant.category}</td>
                <td className="px-6 py-4 text-black">{plant.wateringFrequency}</td>
                <td className="px-6 py-4 text-black">
                  {plant.nextWatering || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/plantDetails/${plant._id}`}
                    className="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            {!plants?.length && (
              <tr>
                <td colSpan="7" className="text-center text-black py-6">
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
