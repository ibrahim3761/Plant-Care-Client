import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/plants/user/${user.email}`)
        .then(res => res.json())
        .then(data => setMyPlants(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(result => {
            if (result.deletedCount > 0) {
              setMyPlants(prev => prev.filter(plant => plant._id !== id));
              Swal.fire('Deleted!', 'Your plant has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-6">My Plants</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-100 dark:bg-green-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Watering</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Next Watering</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Health</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myPlants?.map(plant => (
              <tr key={plant._id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-6 py-4">
                  <img src={plant.image} alt={plant.name} className="w-16 h-16 object-cover rounded border border-gray-300 dark:border-gray-600" />
                </td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{plant.name}</td>
                <td className="px-6 py-4 capitalize text-gray-800 dark:text-gray-100">{plant.category}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{plant.wateringFrequency}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{plant.nextWatering || 'N/A'}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{plant.healthStatus || 'Unknown'}</td>
                <td className="px-6 py-4 space-x-2">
                  <Link
                    to={`/update-plant/${plant._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!myPlants?.length && (
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

export default MyPlants;
