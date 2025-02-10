import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Track = () => {
  const { id } = useParams();
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (trackingId === "") {
      alert("Please enter a tracking ID");
      return;
    }
  };

  return (
    <div className="max-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md my-auto mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Track Your Order</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your tracking ID to see the current status
          </p>
        </div>

        {id === undefined || id === null ? (
          <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="tracking-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tracking ID
                </label>
                <div className="mt-1">
                  <input
                    id="tracking-id"
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border 
                              border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                              focus:outline-none focus:ring-2 focus:ring-violet-500 
                              focus:border-violet-500"
                    placeholder="Enter your tracking ID"
                  />
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent 
                          rounded-md shadow-sm text-sm font-medium text-white 
                          bg-violet-600 hover:bg-violet-700 focus:outline-none 
                          focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 
                          transition-colors duration-200"
              >
                Track Order
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Tracking Details
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Tracking ID: <span className="font-medium">{id}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
