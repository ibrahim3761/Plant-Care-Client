import React from "react";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const AddPlant = () => {
  const { user } = use(AuthContext);

  const handleAddPlant = (e) =>{
    e.preventDefault();
    const form = e.target;
    const newPlant = Object.fromEntries(new FormData(form));
    console.log(newPlant);
    // add to db
    fetch("http://localhost:3000/plants",{
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        toast.success('Plant added Successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-green-50 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Add New Plant</h2>
      <form onSubmit={handleAddPlant} className="space-y-5">

        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Plant Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Plant Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-1">Category</label>
          <select
            name="category"
            id="category"
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Category</option>
            <option value="succulent">Succulent</option>
            <option value="fern">Fern</option>
            <option value="flowering">Flowering</option>
            <option value="tropical">Tropical</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <div>
          <label htmlFor="careLevel" className="block text-gray-700 font-medium mb-1">Care Level</label>
          <select
            name="careLevel"
            id="careLevel"
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Care Level</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>

        <div>
          <label htmlFor="wateringFrequency" className="block text-gray-700 font-medium mb-1">Watering Frequency</label>
          <input
            type="text"
            name="wateringFrequency"
            id="wateringFrequency"
            placeholder="e.g., every 3 days"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="lastWatered" className="block text-gray-700 font-medium mb-1">Last Watered Date</label>
          <input
            type="date"
            name="lastWatered"
            id="lastWatered"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="nextWatering" className="block text-gray-700 font-medium mb-1">Next Watering Date</label>
          <input
            type="date"
            name="nextWatering"
            id="nextWatering"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="healthStatus" className="block text-gray-700 font-medium mb-1">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            id="healthStatus"
            placeholder="Health Status"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="userEmail" className="block text-gray-700 font-medium mb-1">User Email</label>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-lg text-gray-600"
          />
        </div>

        <div>
          <label htmlFor="userName" className="block text-gray-700 font-medium mb-1">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-lg text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
