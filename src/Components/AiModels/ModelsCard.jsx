import React from 'react';

const ModelsCard = ({ model }) => {
  const { name, framework, description, image } = model;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-contain mx-auto rounded-full mb-4 bg-gray-100"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-500  mb-3">{framework}</p>
      <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
    </div>
  );
};

export default ModelsCard;
