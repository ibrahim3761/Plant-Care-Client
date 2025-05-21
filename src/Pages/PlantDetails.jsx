import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
  const plant = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold text-green-700">{plant.name}</h2>
          <p className="text-gray-600"><span className="font-semibold">Category:</span> {plant.category}</p>
          <p className="text-gray-600"><span className="font-semibold">Care Level:</span> {plant.careLevel}</p>
          <p className="text-gray-600"><span className="font-semibold">Watering Frequency:</span> {plant.wateringFrequency}</p>
          <p className="text-gray-600"><span className="font-semibold">Last Watered:</span> {plant.lastWatered}</p>
          <p className="text-gray-600"><span className="font-semibold">Next Watering:</span> {plant.nextWatering}</p>
          <p className="text-gray-600"><span className="font-semibold">Health Status:</span> {plant.healthStatus}</p>
          <p className="text-gray-600"><span className="font-semibold">Description:</span> {plant.description}</p>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">
              Added by: <span className="font-medium">{plant.userName}</span> (<span className="text-green-600">{plant.userEmail}</span>)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
