import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModelCard from '../Components/AiModels/ModelCard';

const AllModels = () => {
  const [aiModels, setModels] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/models')
      .then(res => {
        console.log('after axios get ', res.data);
        setModels(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-4 md:px-16 md:py-8">
      <h2 className="text-3xl sm:text-4xl text-black md:text-5xl font-extrabold text-center mb-10">
        All Ai
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          {' '}
          Models{' '}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 ">
        {aiModels?.map(aiModel => (
          <ModelCard key={aiModel._id} aiModel={aiModel} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;
