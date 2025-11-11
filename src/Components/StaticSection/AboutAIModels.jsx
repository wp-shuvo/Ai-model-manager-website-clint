import React from 'react';
import { Brain, Cpu, Image, MessageSquare } from 'lucide-react';

const AboutAIModels = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#9F62F2]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#632EE3]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          About{' '}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            AI Models
          </span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-14">
          Artificial Intelligence (AI) models are trained systems capable of
          learning from data and making predictions, classifications, or
          decisions. They power modern tools — from intelligent chatbots to
          image recognition and recommendation engines — shaping the way
          technology interacts with humans.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mb-4">
              <Brain className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Neural Networks
            </h3>
            <p className="text-gray-600 text-sm">
              The building blocks of AI — systems that mimic human brain
              structure to recognize complex patterns and relationships in data.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mb-4">
              <Image className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Computer Vision
            </h3>
            <p className="text-gray-600 text-sm">
              AI models can analyze and understand images or videos, enabling
              applications like facial recognition and autonomous vehicles.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mb-4">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Natural Language
            </h3>
            <p className="text-gray-600 text-sm">
              Models that understand and generate human-like text, powering
              chatbots, translators, and content assistants.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mb-4">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Automation
            </h3>
            <p className="text-gray-600 text-sm">
              AI streamlines repetitive processes, boosting efficiency and
              enabling smarter decision-making across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAIModels;
