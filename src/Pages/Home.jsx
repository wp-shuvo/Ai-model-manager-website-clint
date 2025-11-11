import React from 'react';
import BannerSlider from '../Components/Header/BannerSlider';
import RecentModel from '../Components/AiModels/RecentModel';
import AboutAIModels from '../Components/StaticSection/AboutAIModels';
import GetStarted from '../Components/StaticSection/GetStarted';

const LatestmodelsPromise = fetch('http://localhost:5001/latest-models').then(
  res => res.json()
);

const Home = () => {
  return (
    <div className=" text-center text-3xl font-bold text-black">
      <BannerSlider />
      <RecentModel LatestmodelsPromise={LatestmodelsPromise} />
      <AboutAIModels />
      <GetStarted />
    </div>
  );
};

export default Home;
