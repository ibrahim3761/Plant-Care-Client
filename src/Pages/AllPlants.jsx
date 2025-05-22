import React from 'react';
import { useLoaderData, Link } from 'react-router';

const AllPlants = () => {
  const plants = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-6">
        All Plants
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-100 dark:bg-green-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Plant Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Watering Frequency</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Next Watering</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants?.map((plant, index) => (
              <tr key={plant._id || index} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-16 h-16 object-cover rounded border border-gray-300 dark:border-gray-600"
                  />
                </td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{plant.name}</td>
                <td className="px-6 py-4 capitalize text-gray-800 dark:text-gray-100">{plant.category}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{plant.wateringFrequency}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">
                  {plant.nextWatering || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/plantDetails/${plant._id}`}
                    className="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition dark:bg-green-500 dark:hover:bg-green-600"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            {!plants?.length && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 dark:text-gray-300 py-6">
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
