import React from 'react';
import { Link } from 'react-router';

const ModelCard = ({ aiModel }) => {
  const { _id, name, framework, useCase, image } = aiModel;
  console.log(aiModel);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col">
      <img src={image} alt={name} className="w-full h-auto rounded-lg mb-4" />

      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Framework:</span> {framework}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Use Case:</span> {useCase}
      </p>

      <Link
        to={`/modeldetails/${_id}`}
        className="mt-auto inline-block text-center w-full py-2 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold hover:opacity-90 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ModelCard;
