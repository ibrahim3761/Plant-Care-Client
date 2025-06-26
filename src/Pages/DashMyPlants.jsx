import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loader from "../Componenets/Loader";
import { Helmet } from "react-helmet-async";

const DashMyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://plant-care-tracker-server-ten.vercel.app/plants/user/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyPlants(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-care-tracker-server-ten.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              setMyPlants((prev) => prev.filter((plant) => plant._id !== id));
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>My Plant || Plant Care</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        My Plants
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Watering
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Next Watering
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Health
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  <div className="flex justify-center">
                    <Loader></Loader>
                  </div>
                </td>
              </tr>
            ) : myPlants.length ? (
              myPlants.map((plant) => (
                <tr key={plant._id} className="border-t border-gray-200">
                  <td className="px-6 py-4">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-16 h-16 object-cover rounded border border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-800">{plant.name}</td>
                  <td className="px-6 py-4 capitalize text-gray-800">
                    {plant.category}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {plant.wateringFrequency}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {plant.nextWatering || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {plant.healthStatus || "Unknown"}
                  </td>
                  <td className=" px-6 py-4 space-x-2">
                    <Link
                      to={`/dashboard/update-plant/${plant._id}`}
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
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-6">
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

export default DashMyPlants;
