import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModelCard from '../Components/AiModels/ModelCard';

const AllModels = () => {
  const [aiModels, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://ai-model-manager-server-k5f7.vercel.app/models')
      .then(res => {
        console.log('after axios get ', res.data);
        setModels(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#632EE3] border-solid"></div>
      </div>
    );
  }

  const handleSecrch = e => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    axios
      .get(
        `https://ai-model-manager-server-k5f7.vercel.app/search?search=${search_text}`
      )
      .then(res => {
        setModels(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4 md:px-16 md:py-8">
      <h2 className="text-3xl sm:text-4xl text-black md:text-5xl font-extrabold text-center mb-5">
        All Ai
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          {' '}
          Models{' '}
        </span>
      </h2>
      <p className="text-center text-gray-600 font-medium text-lg mb-10">
        Explore a curated collection of{' '}
        <span className="text-[#9F62F2]">AI models</span> built for innovation
        and research.
      </p>

      {/* Search Bar */}
      <form
        onSubmit={handleSecrch}
        className="flex justify-center md:justify-end mb-8"
      >
        <div className="flex w-full sm:w-[70%] md:w-[40%] lg:w-[25%] items-center">
          <input
            type="search"
            name="search"
            placeholder="Search Here ..."
            className="flex-grow px-3 py-2 md:py-3 text-gray-700 border border-gray-300 rounded-l-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#632EE3] focus:border-[#632EE3] sm:text-sm"
          />
          <button className="px-4 py-2 md:py-2.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium rounded-r-md hover:opacity-90 transition">
            Search
          </button>
        </div>
      </form>

      {/* Model Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 ">
        {aiModels?.map(aiModel => (
          <ModelCard key={aiModel._id} aiModel={aiModel} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;
