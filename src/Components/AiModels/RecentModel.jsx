import React, { use } from 'react';
import ModelsCard from './ModelsCard';

const RecentModel = ({ LatestmodelsPromise }) => {
  const models = use(LatestmodelsPromise);
  console.log(models);

  return (
    <div className="p-4 md:px-16 md:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-10 mb-10">
        Most Recent
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          {' '}
          AI Models{' '}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 ">
        {models?.map(model => (
          <ModelsCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default RecentModel;
